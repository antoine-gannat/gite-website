import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { ILocalizationProps } from "@/utils/localization/localization";

export default function AdditionalInfo({
  strings,
}: ILocalizationProps): JSX.Element {
  return (
    <section id="additional-info" className="mt-5">
      <Container className="max-w-5xl">
        <CategoryTitle title={strings.additionalInformation} />
        <Table
          striped
          bordered
          className="col-lg-8 col-md-8 col-sm-12 col-xs-12"
        >
          <tbody>
            <tr>
              <td>{strings.capacity}</td>
              <td>6 {strings.peoples}</td>
            </tr>
            <tr>
              <td>WIFI</td>
              <td>{strings.included} (ADSL)</td>
            </tr>
            <tr>
              <td>{strings.surface}</td>
              <td>95m²</td>
            </tr>
            <tr>
              <td>{strings.bedrooms}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{strings.beds}</td>
              <td>4 ({strings.bedsCountDescription})</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
