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

const formatLinks = text =>
  text
    .replace(/href="www/g, "href='http://www")
    .replace(/<a /g, "<a target='_blank' ")
    .replace(/"/g, "'");

class Editor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  componentDidMount() {
    this.setState({
      value: RichTextEditor.createValueFromString("<p>Nová aktualita...</p>", "html")
    });
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <p>Tvoj editor:</p>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          toolbarConfig={toolbarConfig}
        />
        <p>Môj výstup:</p>
        <textarea
          rows={10}
          value={formatLinks(this.state.value.toString("html"))}
          onChange={() => null}
          style={{
            marginTop: ".5em",
            marginBottom: "1em",
            width: "99.5%",
            resize: "none",
            border: "solid 1px #e2e2e2",
            borderRadius: "5px",
            outline: "none"
          }}
        />
        <p>Server coming soon...</p>
      </div>
    );
  }
}

export default Editor;
