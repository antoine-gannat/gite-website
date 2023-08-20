import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { IComponentBaseProps } from "../types";

export default function AdditionalInfo({
  strings,
}: IComponentBaseProps): JSX.Element {
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
              <td>{strings.capacityValue}</td>
            </tr>
            <tr>
              <td>WIFI</td>
              <td>{strings.wifiValue}</td>
            </tr>
            <tr>
              <td>{strings.surface}</td>
              <td>{strings.surfaceValue}</td>
            </tr>
            <tr>
              <td>{strings.bedrooms}</td>
              <td>{strings.bedroomsValue}</td>
            </tr>
            <tr>
              <td>{strings.beds}</td>
              <td>{strings.bedsCountDescription}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
