import { useState } from "react";
import { Form } from "./Form";
import { Infos } from "./Infos";

export function CV() {
  let [showPart, setShowPart] = useState(0);
  return (
    <>
      {showPart < 1 ? (
        <Form setShowPart={setShowPart} />
      ) : (
        <Infos setShowPart={setShowPart} />
      )}
    </>
  );
}
