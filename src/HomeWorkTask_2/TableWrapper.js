import React, { Component } from "react";
import PropTypes from "prop-types";
import TableWithPropType from "./TableWithPropType";
import Row from "./Row";
import Cell from "./Cell";

const TableWrapper = () => (
  <TableWithPropType>
    <tr>
      <Row head="true">
        <th>
          <Cell type="">#</Cell>
        </th>
        <th>
          <Cell type="date">Current deta</Cell>
        </th>
        <th>
          <Cell type="number">Total amount</Cell>
        </th>
        <th>
          <Cell type="money" currency="$">
            Salary in $
          </Cell>
        </th>
      </Row>
    </tr>
    <tr>
      <Row>
        <td>
          <Cell type="" background="red">
            просто ред
          </Cell>
        </td>
        <td>
          <Cell type="date">Data+Курсив</Cell>
        </td>
        <td>
          <Cell type="number">Число</Cell>
        </td>

        <td>
          <Cell type="money" currency="$">
            money+currency
          </Cell>
        </td>
      </Row>
    </tr>
  </TableWithPropType>
);

export default TableWrapper;
