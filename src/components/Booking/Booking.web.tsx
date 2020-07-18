import * as React from "react";
import "./Booking.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Booking.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";

const gdfReservationsUrl =
  "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075";

type Price =
  | "On request"
  | "Partially available"
  | "Not available"
  | number
  | string;

type ReservationWeek = {
  from: Date;
  to: Date;
  price: Price;
  link: string;
  available: boolean;
};

function Booking({ translate }: DefaultPropsWithTranslation): JSX.Element {
  function parseRawData(data: string): ReservationWeek[] {
    function replaceAll(
      input: string,
      toReplace: string,
      replaceValue: string
    ): string {
      return input.split(toReplace).join(replaceValue);
    }
    function parseStartAndEndDates(
      dateElement: Element
    ): { from: Date; to: Date } {
      function parseDate(rawDate: string, offset: number): number[] {
        let parsedDate = rawDate.slice(offset, rawDate.indexOf("&"));
        parsedDate = parsedDate.replace(/\\\//g, " ");
        return parsedDate.split(" ").map((el) => Number(el));
      }

      // get the 'to' element content
      const toDateArray = parseDate(
        dateElement.querySelector("span .au")!.innerHTML,
        "to ".length
      );

      // get the 'from' element content
      const fromDateArray = parseDate(dateElement.innerHTML, "From ".length);
      return {
        from: new Date(fromDateArray[2], fromDateArray[1], fromDateArray[0]),
        to: new Date(toDateArray[2], toDateArray[1], toDateArray[0]),
      };
    }
    function parsePrice(priceElement: Element): Price {
      const price = priceElement.innerHTML.slice(
        "<span>".length,
        priceElement.innerHTML.indexOf("&")
      );

      const priceAsNumber = price.replace(/\D/g, "");
      return priceAsNumber.length > 0 ? Number.parseInt(priceAsNumber) : price;
    }

    // parse the string to an HTML element
    const parsedElement = new DOMParser().parseFromString(
      replaceAll(data, '\\"', '"'),
      "text/html"
    );
    const tdElements = parsedElement.querySelectorAll(
      'table .tarifsAvecDispo_detailUnMois_tarifUneDuree [data-duree-tarif="semaine"] td'
    );
    const results: ReservationWeek[] = [];

    // getting the start date
    tdElements.forEach((tdElement) => {
      const dateElement = tdElement.querySelector("span .du");
      const priceElement = tdElement.querySelector("p .tarif");
      if (!dateElement || !priceElement) {
        return;
      }
      const { from, to } = parseStartAndEndDates(dateElement);
      const price = parsePrice(priceElement);
      results.push({
        from,
        to,
        price,
        link: "www",
        available: typeof price === "number",
      });
    });

    return results;
  }
  function formatDateForDisplay(date: Date): string {
    return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  }

  const [weeks, setWeeks] = React.useState<ReservationWeek[]>([]);
  React.useEffect(() => {
    fetch(gdfReservationsUrl).then(async (data) => {
      setWeeks(parseRawData(await data.text()));
    });
  }, []);
  return (
    <section id="booking" className="booking mt-5">
      <CategoryTitle title={translate("booking")} />
      <ul>
        {weeks.map((week, index) => (
          <div key={`week-${index}`}>
            {(index === 0 ||
              weeks[index - 1].from.getMonth() !== week.from.getMonth() ||
              weeks[index - 1].from.getMonth() !== week.to.getMonth()) && (
              <h2>Nouveau mois</h2>
            )}
            <li className="week">
              <h3 className="date">
                {formatDateForDisplay(week.from)} -{" "}
                {formatDateForDisplay(week.to)}
              </h3>
              <p
                className={
                  "price" + (week.available ? " available" : " not-available")
                }
              >
                {week.price} {week.available ? "€" : ""}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default translateComponent(Booking, strings);
