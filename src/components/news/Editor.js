import React from "react";
import RichTextEditor from "react-rte";
import { compose, withState, lifecycle, withHandlers } from "recompose";

import { toolbarConfig, formatTimestamp, formatText } from "../../utils/editor";

const Editor = ({ title, onTitle, text, onText, closeEditor, onSubmit, initialData }) => (
  <div className="editor">
    <input
      type="text"
      placeholder="Nadpis aktuality"
      value={title}
      onChange={(e) => onTitle(e.target.value)}
      className="editor-title"
    />
    <RichTextEditor
      value={text}
      onChange={(e) => onText(e)}
      toolbarConfig={toolbarConfig}
      className="editor-field"
      placeholder="Text aktuality"
    />
    <div className="flex-row flex-end">
      <button onClick={() => closeEditor()} className="editor-button cancel">
        Zrušiť
      </button>
      <button onClick={() => onSubmit()} className="editor-button submit">
        {initialData ? "Uložiť" : "Pridať"}
      </button>
    </div>
  </div>
);


export default compose(
  withState("title", "onTitle", ""),
  withState("text", "onText", RichTextEditor.createEmptyValue()),
  lifecycle({
    componentDidMount() {
      const { initialData, onTitle, onText } = this.props;
      onTitle(initialData ? initialData.title : "");
      onText(RichTextEditor.createValueFromString(
        initialData ? initialData.text : "", "html")
      );
    }
  }),
  withHandlers({
    onSubmit: ({ action, initialData, closeEditor, title, text }) => () => {
      action({
        id: initialData ? initialData.id : null,
        time: initialData ? initialData.time : formatTimestamp(new Date().toString()),
        title,
        text: formatText(text.toString("html"))
      });
      closeEditor();
    }
  })
)(Editor);
