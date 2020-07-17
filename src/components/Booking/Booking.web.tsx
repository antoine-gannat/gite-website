import * as React from "react";
import "./Booking.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Booking.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";

function Booking({ translate }: DefaultPropsWithTranslation): JSX.Element {
  return (
    <section id="booking" className="booking mt-5">
      <CategoryTitle title={translate("booking")} />
    </section>
  );
}

export default translateComponent(Booking, strings);
