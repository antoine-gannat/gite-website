export type BookingWeek = {
  from: Date;
  to: Date;
  price: number;
  url: string;
  available: boolean;
  fortnightOnly: boolean;
};

export type BookingMonth = {
  weeks: BookingWeek[];
  nb: number;
};

// Months where the gite is closed
const startDate = new Date(0, 3, 1);
const endDate = new Date(0, 10, 13);

export default class BookingParser {
  dataAsElement: Document;
  constructor(rawData: string) {
    // parse the string to an HTML element
    this.dataAsElement = new DOMParser().parseFromString(
      rawData.replace(/\\"/g, '"'),
      "text/html"
    );
  }

  parseDate(date: string): Date {
    const dateAsArray: number[] = date
      .replace(/\\\//g, " ")
      .split(" ")
      .map((el) => Number(el));
    return new Date(dateAsArray[2], dateAsArray[1] - 1, dateAsArray[0]);
  }

  parseWeek(week: Element): BookingWeek | null {
    const className = week.getAttribute("class");
    const price = week.getAttribute("data-prix");
    const numberOfDays = week.getAttribute("data-nbj");
    const startDate = week.getAttribute("data-deb");
    if (
      !price ||
      !startDate ||
      !numberOfDays ||
      !className ||
      Number(numberOfDays) !== 7
    ) {
      return null;
    }

    const parsedStartDate = this.parseDate(startDate);
    const endDate = new Date(
      parsedStartDate.getFullYear(),
      parsedStartDate.getMonth(),
      parsedStartDate.getDate() + Number(numberOfDays)
    );
    const fortnightOnly = className === "indisponible partiellementDispo";
    const url = `https://reservation.itea.fr/resa/etape1.php?ident=gites29_b${parsedStartDate.getFullYear()}.1.29G17250.G&exe=${parsedStartDate.getFullYear()}&dep=29&jour=${parsedStartDate.getDate()}&mois=${
      parsedStartDate.getMonth() + 1
    }&annee=${parsedStartDate.getFullYear()}&duree=${
      fortnightOnly ? Number(numberOfDays) * 2 : numberOfDays
    }&referer=www.google.fr&OPE=WFNGF`;

    return {
      price: Number(price),
      from: parsedStartDate,
      to: endDate,
      available: className === "libre" || fortnightOnly,
      url,
      fortnightOnly,
    };
  }

  weeksToMonths(weeks: BookingWeek[]): BookingMonth[] {
    let months: BookingMonth[] = [];
    // sort weeks by start date
    weeks.sort((a, b) => {
      const aTime = a.from.getTime();
      const bTime = b.from.getTime();
      if (aTime < bTime) {
        return -1;
      } else if (aTime === bTime) {
        return 0;
      } else {
        return 1;
      }
    });

    let currentMonth: BookingMonth = { nb: -1, weeks: [] };
    weeks.forEach((week) => {
      const weekMonth = week.from.getMonth();
      const day = week.from.getDate();
      const month = week.from.getMonth();
      // Set closed weeks as unavailable
      if (
        (day < startDate.getDate() && month <= startDate.getMonth()) ||
        (day > endDate.getDate() && month >= endDate.getMonth())
      ) {
        week.available = false;
      }
      if (weekMonth !== currentMonth.nb) {
        if (currentMonth.weeks.length > 0) {
          months.push({
            nb: currentMonth.nb,
            weeks: currentMonth.weeks,
          });
        }
        currentMonth.nb = weekMonth;
        currentMonth.weeks = [];
      }
      currentMonth.weeks.push(week);
    });
    if (currentMonth.weeks.length > 0) {
      months.push(currentMonth);
    }
    return months;
  }

  getBookings(): BookingMonth[] {
    // Get the month tables (a table contain the booking for a month)
    const allWeeks = this.dataAsElement.querySelectorAll(
      "table .tarifsAvecDispo_detailUnMois_tarifUneDuree [data-duree-tarif=semaine] td"
    );
    const parsedWeeks: BookingWeek[] = [];

    allWeeks.forEach((week) => {
      const parsedWeek = this.parseWeek(week);
      if (parsedWeek) {
        parsedWeeks.push(parsedWeek);
      }
    });

    return this.weeksToMonths(parsedWeeks);
  }
}
