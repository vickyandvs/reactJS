import React, { Component } from "react";

import AsyncSelect from "react-select/lib/Async";
import { colourOptions } from "./data";

const loadOptions = (inputValue, callback) => {
  return fetch("http://localhost:4444/tables")
    .then((res) => res.json())
    .then((res) => {
      var results = res.map((table) => {
        return {
          label: table.name,
          value: table.id,
        };
      });
      callback(results);
    });
};

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleChange = (selectedOption) => {
   
    this.props.handleChange(this.props.rowNumber,selectedOption.value);
  };

  render() {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
