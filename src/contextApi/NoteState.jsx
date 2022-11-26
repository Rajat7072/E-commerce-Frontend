import { React, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <NoteContext.Provider value={{ smShow, setSmShow }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
