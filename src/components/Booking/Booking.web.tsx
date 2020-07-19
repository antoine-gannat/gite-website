import * as React from "react";
import "./Booking.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Booking.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import BookingParser, { BookingMonth } from "./BookingParser";

const gdfReservationsUrl =
  "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075";

function Booking({ translate }: DefaultPropsWithTranslation): JSX.Element {
  const monthsNames = [
    translate("january"),
    translate("february"),
    translate("march"),
    translate("april"),
    translate("may"),
    translate("june"),
    translate("july"),
    translate("august"),
    translate("september"),
    translate("october"),
    translate("november"),
    translate("december"),
  ];
  function formatDateForDisplay(date: Date): string {
    return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  }

  const [bookingMonths, setBookingMonths] = React.useState<BookingMonth[]>([]);
  React.useEffect(() => {
    fetch(gdfReservationsUrl).then(async (data) => {
      const parser = new BookingParser(await data.text());
      setBookingMonths(parser.getBookings());
    });
  }, []);
  return (
    <section id="booking" className="booking mt-5">
      <CategoryTitle title={translate("booking")} />
      {bookingMonths.map((month, monthIndex) => (
        <div key={`month-${monthIndex}`}>
          <h2>{monthsNames[month.nb]}</h2>
          <ul>
            {month.weeks.map((week, weekIndex) => (
              <li className="week" key={`month-${month.nb}-week-${weekIndex}`}>
                <h3 className="date">
                  {formatDateForDisplay(week.from)} -{" "}
                  {formatDateForDisplay(week.to)}
                </h3>
                <p
                  className={
                    "price" + (week.available ? " available" : " not-available")
                  }
                >
                  {week.price > 0
                    ? `${week.price} ${week.available ? "€" : ""}`
                    : translate("fortnight_only")}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default translateComponent(Booking, strings);
