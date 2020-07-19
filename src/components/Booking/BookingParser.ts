type BookingWeek = {
  from: Date;
  to: Date;
  price: number;
  link: string;
  available: boolean;
};

export type BookingMonth = {
  weeks: BookingWeek[];
  nb: number;
};

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
    const dateAsArray = date
      .replace(/\\\//g, " ")
      .split(" ")
      .map((el) => Number(el));
    return new Date(dateAsArray[2], dateAsArray[1], dateAsArray[0]);
  }

  parseWeek(week: Element): BookingWeek | null {
    const availability = week.getAttribute("class");
    const price = week.getAttribute("data-prix");
    const numberOfDays = week.getAttribute("data-nbj");
    const startDate = week.getAttribute("data-deb");
    const link = "";

    if (
      !price ||
      !startDate ||
      !numberOfDays ||
      !availability ||
      Number(numberOfDays) !== 7
    ) {
      return null;
    }

    const parsedStartDate = this.parseDate(startDate);
    const endDate = new Date();
    endDate.setDate(parsedStartDate.getDate() + Number(numberOfDays));

    return {
      price: Number(price),
      from: parsedStartDate,
      to: endDate,
      available:
        availability === "libre" ||
        availability === "indisponible partiellementDispo",
      link,
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
