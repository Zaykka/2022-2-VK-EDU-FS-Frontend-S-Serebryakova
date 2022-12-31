import React from "react";
import classes from "./Destination.module.css";
import { connect } from "react-redux";
import { mapDispatch, mapState } from "./utils";


class Destination extends React.Component {
  render() {
    return (
      <div className={classes.destination}>
        {this.props.translated_text}
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Destination);