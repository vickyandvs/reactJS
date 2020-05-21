import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export class Text extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(input){
        if(input.length==0)return;
        this.props.handleChange(input);
    }
    render() {
        return (
           <div className="form-group">
            <label>{this.props.label}</label>
            <input type="text" className="form-control"  placeholder={this.props.placeholder}
                onchange={this.handleChange}
            />
        </div>
        )
    }
}

export default Text

