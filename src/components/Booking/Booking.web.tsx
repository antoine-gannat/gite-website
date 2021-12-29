import * as React from "react";

import { useLocalization } from "../../hooks/useLocalization";
import { css } from "../../utils";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import strings from "./Booking.strings.json";
import { useStyles } from "./Booking.styles";
import BookingParser, { BookingMonth, BookingWeek } from "./BookingParser";

const gdfReservationsUrl =
  "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075";

export default function Booking(): JSX.Element {
  const localizer = useLocalization(strings);
  const styles = useStyles();
  const [bookingMonths, setBookingMonths] = React.useState<
    BookingMonth[] | undefined | null
  >(undefined);
  const [monthsToDisplay, setMonthsToDisplay] = React.useState<number>(3);

  React.useEffect(() => {
    fetch(gdfReservationsUrl)
      .then(async (data) => {
        const parser = new BookingParser(await data.text());
        setBookingMonths(parser.getBookings());
      })
      .catch(() => {
        setBookingMonths(null);
      });
  }, []);

  function formatDateForDisplay(date: Date): string {
    return `${date.getDate()} ${monthsNames[date.getMonth()].slice(0, 3)}`;
  }

  function displayPrice(week: BookingWeek): JSX.Element {
    if (!week.available) {
      return <>{localizer("unavailable")}</>;
    }
    if (week.price === 0) {
      return <>{localizer("fortnightOnly")}</>;
    }
    return <>{week.price} €</>;
  }

  function changeMonthsToDisplay(newValue: number) {
    setMonthsToDisplay(newValue);
    document.getElementById("booking")?.scrollIntoView();
  }

  function displayBooking(): JSX.Element[] | JSX.Element {
    if (bookingMonths === undefined) {
      return <h4>{localizer("loading")}...</h4>;
    }
    if (bookingMonths === null) {
      return (
        <h4>
          <a
            href="http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={localizer("GDFWebsite")}
          >
            {localizer("GDFWebsite")}
          </a>
        </h4>
      );
    }

    return bookingMonths
      .slice(monthsToDisplay - 3, monthsToDisplay)
      .map((month, monthIndex) => (
        <div key={`month-${monthIndex}`}>
          <h2 className={styles.monthHeading}>
            {monthsNames[month.nb]} {month.weeks[0]?.from.getFullYear()}
          </h2>
          <ul className="row col-12">
            {month.weeks.map((week, weekIndex) => (
              <li
                className={css(
                  styles.week,
                  "col-lg-3 col-md-4 col-sm-6 col-12",
                  week.available ? styles.available : styles.notAvailable
                )}
                key={`month-${month.nb}-week-${weekIndex}`}
                role="button"
                onClick={() => week.available && window.open(week.url)}
              >
                <h3 className={styles.date}>
                  {formatDateForDisplay(week.from)} -{" "}
                  {formatDateForDisplay(week.to)}
                </h3>
                <p className={styles.price}>{displayPrice(week)}</p>
              </li>
            ))}
          </ul>
        </div>
      ));
  }

  function navButtons() {
    if (!bookingMonths) {
      return null;
    }
    return (
      <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-4">
        <button
          className={css(
            "btn booking-nav-btn col-6",
            monthsToDisplay <= 3 ? "hidden" : ""
          )}
          disabled={monthsToDisplay <= 3}
          onClick={() => changeMonthsToDisplay(monthsToDisplay - 3)}
        >
          <i className="fas fa-chevron-left"></i> {localizer("prev")}
        </button>
        <button
          className={css(
            "btn booking-nav-btn col-6",
            !bookingMonths || monthsToDisplay >= bookingMonths.length
              ? "hidden"
              : ""
          )}
          disabled={!bookingMonths || monthsToDisplay >= bookingMonths.length}
          onClick={() => changeMonthsToDisplay(monthsToDisplay + 3)}
        >
          {localizer("next")} <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }

  const monthsNames = [
    localizer("january"),
    localizer("february"),
    localizer("march"),
    localizer("april"),
    localizer("may"),
    localizer("june"),
    localizer("july"),
    localizer("august"),
    localizer("september"),
    localizer("october"),
    localizer("november"),
    localizer("december"),
  ];
  return (
    <section
      id="booking"
      className="booking mt-5 col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1"
    >
      <CategoryTitle
        title={localizer("booking")}
        subTitle={
          <a
            style={{
              color: "rgb(185, 2, 17)",
              fontSize: "15px",
              textDecoration: "underline",
            }}
            href="http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={localizer("GDFWebsite")}
          >
            {localizer("GDFWebsite")}
          </a>
        }
      />
      {navButtons()}
      {displayBooking()}
      {navButtons()}
    </section>
  );
}
