import React from "react";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Text from "./components/Text"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      factTableID: "",
      dimensionTableID: new Map(),
      rowNumber: 0,
      viewName:'',
      viewTag:'',
      viewDescription:''
    };
    this.handleFactValue = this.handleFactValue.bind(this);
    this.addDimensionTable = this.addDimensionTable.bind(this);
    this.handleDimensionValue=this.handleDimensionValue.bind(this);
    this.handleViewName=this.handleViewName.bind(this);
    this.handleViewTag=this.handleViewTag.bind(this);
    this.handleViewDescription=this.handleViewDescription.bind(this);
  }
  handleViewName(input){
    this.setState({viewName:input});
  }

  handleViewTag(input){
    this.setState({viewTag:input});
  }
  handleViewDescription(input){
    this.setState({viewDescription:input});
  }

  handleFactValue(rowNUmber,factTableId) {
    this.setState({ factTableID: factTableId });
  }

  handleDimensionValue(rowNumber,id){
    let { dimensionTableID } = this.state;
    dimensionTableID.set(rowNumber,id);
  
    this.setState({
      dimensionTableID:dimensionTableID,
    })
    console.log(dimensionTableID);
  }

  addDimensionTable() {
    let { dimensionTableID } = this.state;
    let { rowNumber } = this.state;
    dimensionTableID.set(rowNumber, "");

    this.setState({
      dimensionTableID: dimensionTableID,
      rowNumber: rowNumber + 1,
    });
  }
  render() {
    let { dimensionTableID } = this.state;
    var keys=dimensionTableID.keys()
    const items=[]
    for(var rowNumber of keys){
      items.push(
        <div className="form-group">
          <Search rowNumber={rowNumber} handleChange={this.handleDimensionValue}/>
        </div>    
      )     
    }
    return (
     
      <div className="App">
         <Header/>
         <br/><br/>
        <div className="container">
        <form>
          <Text label="View Name" placeholder="Enter view name" handleChange={this.handleViewName}/>
          <Text label="View Tag" placeholder="Enter view tag" handleChange={this.handleViewTag}/>
        <div className="form-group">
          <label>View Description</label>
          <textarea className="form-control" rows="3" /> 
        </div>
        <div className="form-group">
          <label>Select Fact Table</label>
         <Search handleChange={this.handleFactValue} /> 
        </div>
        <div className="form-group">
          <label>Select Dimension Tables</label>
         <Search handleChange={this.handleFactValue} /> 
        </div>
          {items}
        </form>
        <button type="btn" className="btn btn-danger" onClick={this.addDimensionTable}>Add</button>
        <br/>
        <br/>
        <button type="Submit" class="btn btn-success btn-lg btn-block">Create View</button>

      
        </div>
      </div>
    );
  }
}

export default App;
