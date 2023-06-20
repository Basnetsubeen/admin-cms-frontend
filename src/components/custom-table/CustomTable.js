import React from "react";
import { Table } from "react-bootstrap";

const CustomTable = ({ tableHead = {}, tableData = {} }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {tableHead.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              {/* Objects.keys help to convert into array. */}
              {Object.keys(data).map((key, j) => (
                <td className={j}>{data[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
