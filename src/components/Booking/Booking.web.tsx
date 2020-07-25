import * as React from "react";
import "./Booking.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Booking.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import BookingParser, { BookingMonth, BookingWeek } from "./BookingParser";
import { cssMerge } from "../Miscs/styles";

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

  function changeMonthsToDisplay(newValue: number) {
    setMonthsToDisplay(newValue);
    document.getElementById("booking")?.scrollIntoView();
  }

  function displayBooking(): JSX.Element[] | JSX.Element {
    if (bookingMonths === undefined) {
      return <h3>Loading..</h3>;
    }

    return bookingMonths
      .slice(monthsToDisplay - 3, monthsToDisplay)
      .map((month, monthIndex) => (
        <div key={`month-${monthIndex}`}>
          <h2>
            {monthsNames[month.nb]} {month.weeks[0]?.from.getFullYear()}
          </h2>
          <ul className="row col-12">
            {month.weeks.map((week, weekIndex) => (
              <li
                className={cssMerge(
                  "week col-lg-3 col-md-4 col-sm-6 col-12",
                  week.available ? "available" : "not-available"
                )}
                role="button"
                onClick={() => week.available && window.open(week.url)}
                key={`month-${month.nb}-week-${weekIndex}`}
              >
                <h3 className="date">
                  {formatDateForDisplay(week.from)} -{" "}
                  {formatDateForDisplay(week.to)}
                </h3>
                <p className="price">{displayPrice(week)}</p>
              </li>
            ))}
          </ul>
        </div>
      ));
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
  const [bookingMonths, setBookingMonths] = React.useState<
    BookingMonth[] | undefined
  >(undefined);
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
      <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-4">
        <button
          className="btn btn-more col-6"
          disabled={monthsToDisplay <= 3}
          onClick={() => changeMonthsToDisplay(monthsToDisplay - 3)}
        >
          <i className="fas fa-chevron-left"></i> {translate("prev")}
        </button>
        <button
          className="btn btn-more col-6"
          disabled={!bookingMonths || monthsToDisplay >= bookingMonths.length}
          onClick={() => changeMonthsToDisplay(monthsToDisplay + 3)}
        >
          {translate("next")} <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      {displayBooking()}
    </section>
  );
}

export default translateComponent(Booking, strings);
