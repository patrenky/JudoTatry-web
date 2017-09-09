import React from "react";
import RichTextEditor from "react-rte";

const toolbarConfig = {
  display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "LINK_BUTTONS", "HISTORY_BUTTONS"],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" }
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" }
  ]
};

class Editor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  componentDidMount() {
    this.setState({
      value: RichTextEditor.createValueFromString("<p>aaa<strong>bbb</strong></p>", "html")
    });
  }

  onChange = value => {
    this.setState({ value });
    // if (this.props.onChange) {
    //   this.props.onChange(value.toString("html"));
    // }
  };

  render() {
    return (
      <div>
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        toolbarConfig={toolbarConfig}
      />
      <button onClick={() => console.log(this.state.value.toString("html"))}>show</button>
      </div>
    );
  }
}

export default Editor;
