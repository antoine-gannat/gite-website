import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import styles from "./Booking.module.css";
import BookingParser, { BookingMonth, BookingWeek } from "./BookingParser";
import { css } from "@/utils/css";
import { IComponentBaseProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const gdfReservationsUrl =
  "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075";

export default function Booking({ strings }: IComponentBaseProps): JSX.Element {
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
      return <>{strings.unavailable}</>;
    }
    if (week.price === 0) {
      return <>{strings.fortnightOnly}</>;
    }
    return <>{week.price} €</>;
  }

  function changeMonthsToDisplay(newValue: number) {
    setMonthsToDisplay(newValue);
    document.getElementById("booking")?.scrollIntoView();
  }

  function displayBooking(): JSX.Element[] | JSX.Element {
    if (bookingMonths === undefined) {
      return <h4>{strings.loading}...</h4>;
    }
    if (bookingMonths === null) {
      return (
        <h4>
          <a
            href="http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={strings.GDFWebsite}
          >
            {strings.GDFWebsite}
          </a>
        </h4>
      );
    }

    return bookingMonths
      .slice(monthsToDisplay - 3, monthsToDisplay)
      .map((month, monthIndex) => (
        <div key={`month-${monthIndex}`} className="p-3">
          <h2 className="text-center">
            {monthsNames[month.nb]} {month.weeks[0]?.from.getFullYear()}
          </h2>
          <div className={css(styles.month, "row col-12 flex justify-center")}>
            {month.weeks.map((week, weekIndex) => (
              <div
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
                <p className="text-center text-2xl">{displayPrice(week)}</p>
              </div>
            ))}
          </div>
        </div>
      ));
  }

  function navButtons() {
    if (!bookingMonths) {
      return null;
    }
    return (
      <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
        <button
          className={"btn col-6 border-none hover:underline"}
          disabled={monthsToDisplay <= 3}
          onClick={() => changeMonthsToDisplay(monthsToDisplay - 3)}
        >
          <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
          {strings.prev}
        </button>
        <button
          className={"btn col-6 border-none hover:underline"}
          disabled={!bookingMonths || monthsToDisplay >= bookingMonths.length}
          onClick={() => changeMonthsToDisplay(monthsToDisplay + 3)}
        >
          {strings.next}
          <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
        </button>
      </div>
    );
  }

  const monthsNames = [
    strings.january,
    strings.february,
    strings.march,
    strings.april,
    strings.may,
    strings.june,
    strings.july,
    strings.august,
    strings.september,
    strings.october,
    strings.november,
    strings.december,
  ];
  return (
    <section
      id="booking"
      className="mt-5 col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1"
    >
      <CategoryTitle
        title={strings.booking}
        subTitle={
          <a
            style={{
              color: "rgb(185, 2, 17)",
            }}
            className="text-base underline"
            href="http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={strings.GDFWebsite}
          >
            {strings.GDFWebsite}
          </a>
        }
      />
      {navButtons()}
      {displayBooking()}
      {navButtons()}
    </section>
  );
}
