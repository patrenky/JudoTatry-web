import React from "react";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import { compose, withState } from "recompose";

import Editor from './Editor';

import { formatDate } from "../../utils";
import { updateNew, deleteNew } from "../../actions";

const NewItem = ({ data, updateNew, deleteNew, isEditing, setEditing, isDelete, setDelete }) => (
    <div className="news-row news-admin">
        {isEditing ?
            <Editor
                action={updateNew}
                initialData={data}
                closeEditor={() => setEditing(false)}
            />
            :
            <div>
                <p className="news-title">
                    {data.title}
                    <i className="fa fa-pencil" onClick={() => setEditing(true)} />
                    {isDelete ?
                        <span>
                            <i
                                className="fa fa-check"
                                onClick={() => {
                                    deleteNew(data.id);
                                    setDelete(false);
                                }}
                            />
                            <i className="fa fa-times" onClick={() => setDelete(false)} />
                        </span>
                        :
                        <i className="fa fa-trash-o" onClick={() => setDelete(true)} />
                    }
                </p>
                <p className="news-time">{formatDate(data.time)}</p>
                <div className="news-text">{Parser(data.text)}</div>
            </div>}
    </div>
);

export default compose(
    connect(null, { updateNew, deleteNew }),
    withState("isEditing", "setEditing", false),
    withState("isDelete", "setDelete", false)
)(NewItem);