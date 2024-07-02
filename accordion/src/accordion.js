import React, { useState } from "react";
import data from "./data";
import "./App.css";

const Accordion = () => {
  const [selected, SetSelected] = useState(null);

  const handlesingleSelction = (getcurrentId) => {
    console.log(getcurrentId);
    SetSelected(getcurrentId===selected?null :getcurrentId);
  };

  return (
    <div className="wrapper">
      <h1>Accoridon</h1>
      <div className="accrdion">

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handlesingleSelction(dataItem.id)}
                className="title"
              >
                <h3 className="heading">{dataItem.question}</h3>
                <span className="click">+</span>
                <div className="answer">
                  {selected === dataItem.id ? (
                    <div>{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
