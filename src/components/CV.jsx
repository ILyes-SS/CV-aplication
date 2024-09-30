import { useState } from "react";
import { Form } from "./Form";
import { Infos } from "./Infos";

export function CV() {
  let [generalText, setGeneralText] = useState(new Array(3).fill(""));
  let [eduText, setEduText] = useState(new Array(3).fill(""));
  let [practicalText, setPracticalText] = useState(new Array(4).fill(""));

  let [showPart, setShowPart] = useState(0);
  return (
    <>
      {showPart < 1 ? (
        <Form
          setShowPart={setShowPart}
          setGeneralText={setGeneralText}
          setEduText={setEduText}
          setPracticalText={setPracticalText}
        />
      ) : (
        <Infos setShowPart={setShowPart} />
      )}
    </>
  );
}
