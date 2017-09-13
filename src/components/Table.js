import React from "react";

const Table = () => (
  <div className="table">
    <div className="table-row table-head">
      <p className="table-day">Deň</p>
      <div className="table-col">
        <div className="table-col-row">
          <p className="table-time">Čas</p>
          <p className="table-categ">Kategória</p>
        </div>
      </div>
    </div>
    <div className="table-row">
      <p className="table-day">Pondelok</p>
      <div className="table-col">
        <div className="table-col-row">
          <p className="table-time">16:30 - 17:30</p>
          <p className="table-categ">MiniJudo</p>
        </div>
        <div className="table-col-row">
          <p className="table-time">17:30 - 19:00</p>
          <p className="table-categ">Judo</p>
        </div>
      </div>
    </div>
    <div className="table-row">
      <p className="table-day">Streda</p>
      <div className="table-col">
        <div className="table-col-row">
          <p className="table-time">16:30 - 17:30</p>
          <p className="table-categ">MiniJudo</p>
        </div>
        <div className="table-col-row">
          <p className="table-time">17:30 - 19:00</p>
          <p className="table-categ">Judo</p>
        </div>
      </div>
    </div>
    <div className="table-row">
      <p className="table-day">Piatok</p>
      <div className="table-col">
        <div className="table-col-row">
          <p className="table-time">16:30 - 18:00</p>
          <p className="table-categ">MiniJudo + Judo</p>
        </div>
      </div>
    </div>
    <p className="opening-text">
      <i className="fa fa-info-circle" />Začíname 2.októbra v malej teocvični ZŠ KOmenského Svit
    </p>
  </div>
);

export default Table;
