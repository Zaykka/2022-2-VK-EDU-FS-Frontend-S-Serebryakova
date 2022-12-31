import React from "react";
import classes from "./Source.module.css";
import { connect } from "react-redux";
import { translate } from "../../actions/translate";
import { mapDispatch, mapState } from "./utils";


class Source extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        translate(this)
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit} className={classes.source}>
                <input className={classes.form_input}
                    name="message-text"
                    type="textarea"
                    onChange={(e) => this.setState({ text: e.target.value })}
                />
            </form>
        );
    }
}

export default connect(mapState, mapDispatch)(Source);


