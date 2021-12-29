import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import { useLocalization } from "../../hooks/useLocalization";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import strings from "./AdditionalInfo.strings.json";

export default function AdditionalInfo(): JSX.Element {
  const localizer = useLocalization(strings);
  return (
    <section id="additional-info">
      <Container>
        <CategoryTitle title={localizer("additionalInformation")} />
        <Table
          striped
          bordered
          className="col-lg-8 col-md-8 col-sm-12 col-xs-12"
        >
          <tbody>
            <tr>
              <td>{localizer("capacity")}</td>
              <td>6 {localizer("peoples")}</td>
            </tr>
            <tr>
              <td>WIFI</td>
              <td>{localizer("included")} (ADSL)</td>
            </tr>
            <tr>
              <td>{localizer("surface")}</td>
              <td>95m²</td>
            </tr>
            <tr>
              <td>{localizer("bedrooms")}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{localizer("beds")}</td>
              <td>4 ({localizer("bedsCountDescription")})</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
