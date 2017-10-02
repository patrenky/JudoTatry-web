import React from "react";
import RichTextEditor from "react-rte";

import { toolbarConfig } from "./toolbarConfig";

const formatText = text =>
  text
    .replace(/href="www/g, "href='http://www")
    .replace(/<a /g, "<a target='_blank' ")
    .replace(/"/g, "'")
    .replace(/\n/g, "");

class Editor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
    title: ""
  };

  componentDidMount() {
    this.setState({
      value: RichTextEditor.createValueFromString("<p>Text aktuality</p>", "html")
    });
  }

  onChange = value => {
    this.setState({ value });
  };

  onTitle = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = () => {
    this.props.addNew({
      title: this.state.title,
      time: new Date().toString(),
      text: formatText(this.state.value.toString("html"))
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nadpis aktuality"
          onChange={this.onTitle}
          style={{
            width: "98%",
            padding: "1%",
            marginBottom: ".3em",
            border: "solid 1px #e2e2e2",
            borderRadius: "3px",
            outline: "none"
          }}
        />
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          toolbarConfig={toolbarConfig}
        />
        <button
          style={{
            marginTop: ".3em",
            marginBottom: ".3em",
            paddingTop: ".3em",
            border: "solid 1px #e2e2e2",
            background: "transparent",
            borderRadius: "3px"
          }}
          onClick={this.onSubmit}
        >
          Pridať
        </button>
      </div>
    );
  }
}

export default Editor;
