import React, { Component } from "react";

export class IsolatedTable extends Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr><th colSpan="5"
            className="bg-info text-white text-center h4 p-2">
            (Isolated) Products
          </th></tr>
          <tr>
            <th>ID</th><th>Name</th><th>Category</th>
            <th className="text-right">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="5" className="text-center p-2">No Data</td></tr>
        </tbody>
      </table>
    );
  }
}
