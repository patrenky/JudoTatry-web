import React from "react";
// import { compose, withHandlers } from "recompose";
import RichTextEditor from "react-rte";

import { toolbarConfig, formatText } from "../../utils/editor";

class Editor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
    title: ""
  };

  componentDidMount() {
    this.setState({
      value: RichTextEditor.createValueFromString("<p>Text novej aktuality</p>", "html")
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
      <div className="editor">
        <input
          type="text"
          placeholder="Nadpis aktuality"
          onChange={this.onTitle}
          className="editor-title"
        />
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          toolbarConfig={toolbarConfig}
          className="editor-field"
        />
        <button onClick={this.onSubmit} className="editor-button">
          Pridať
        </button>
      </div>
    );
  }
}

export default Editor;
