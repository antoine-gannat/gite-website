import * as React from "react";
import "./Booking.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Booking.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import BookingParser, { BookingMonth, BookingWeek } from "./BookingParser";

const gdfReservationsUrl =
  "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075";

function Booking({ translate }: DefaultPropsWithTranslation): JSX.Element {
  function formatDateForDisplay(date: Date): string {
    return `${date.getDate()} ${monthsNames[date.getMonth()].slice(0, 3)}`;
  }

  function displayPrice(week: BookingWeek): JSX.Element {
    if (!week.available) {
      return <>{translate("unavailable")}</>;
    }
    if (week.price === 0) {
      return <>{translate("fortnight_only")}</>;
    }
    return <>{week.price} €</>;
  }
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
  const [bookingMonths, setBookingMonths] = React.useState<BookingMonth[]>([]);
  const [monthsToDisplay, setMonthsToDisplay] = React.useState<number>(3);
  React.useEffect(() => {
    fetch(gdfReservationsUrl).then(async (data) => {
      const parser = new BookingParser(await data.text());
      setBookingMonths(parser.getBookings());
    });
  }, []);
  return (
    <section
      id="booking"
      className="booking mt-5 col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1"
    >
      <CategoryTitle title={translate("booking")} />
      {bookingMonths.slice(0, monthsToDisplay).map((month, monthIndex) => (
        <div key={`month-${monthIndex}`}>
          <h2>
            {monthsNames[month.nb]} {month.weeks[0]?.from.getFullYear()}
          </h2>
          <ul className="row col-12">
            {month.weeks.map((week, weekIndex) => (
              <li
                className="week col-lg-3 col-md-4 col-sm-6 col-12"
                role="button"
                onClick={() => window.open(week.url)}
                key={`month-${month.nb}-week-${weekIndex}`}
              >
                <h3 className="date">
                  {formatDateForDisplay(week.from)} -{" "}
                  {formatDateForDisplay(week.to)}
                </h3>
                <p
                  className={
                    "price" + (week.available ? " available" : " not-available")
                  }
                >
                  {displayPrice(week)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        className="btn btn-primary"
        disabled={monthsToDisplay >= bookingMonths.length}
        onClick={() => setMonthsToDisplay(monthsToDisplay + 3)}
      >
        More
      </button>
    </section>
  );
}

export default translateComponent(Booking, strings);
