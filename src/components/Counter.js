import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}> Add</button>
        <button onClick={this.props.asyncAdd}> asyncAdd</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Counter);
