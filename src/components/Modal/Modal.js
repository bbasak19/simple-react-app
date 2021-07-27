import React, { useState, useEffect } from "react";
import "./modal.css";

export default function Modal(props) {
  const [modalClass, setModalClass] = useState("");
  useEffect(() => {
    if (props.show) {
      setTimeout(() => {
        setModalClass("on");
      }, 200);
    }
  }, [props]);

  return (
    <>
      {props.show && (
        <div className={"react-modal-wrap " + modalClass}>
          <div className="react-modal-inner">
            <div className="react-modal-titlebar">
              {props.title}
              <span
                className="react-modal-titlebar-close"
                onClick={() => {
                  setModalClass(" ");
                  setTimeout(() => {
                    props.close(false);
                  }, 200);
                }}
              >
                &times;
              </span>
            </div>
            <div className="react-modal-body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}
