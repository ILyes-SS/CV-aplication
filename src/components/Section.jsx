import { Field } from "./Field";
import { SubmitBtn } from "./SubmitBtn";

export function Section({ fieldsInfos, setShowPart, setText }) {
  return (
    <>
      {fieldsInfos.map((field, index) => {
        return (
          <Field
            key={field.id}
            type={field.type}
            label={field.label}
            setText={setText}
            index={index}
          />
        );
      })}
      {fieldsInfos[0].label == "Company Name" ? (
        <SubmitBtn setShowPart={setShowPart} />
      ) : null}
    </>
  );
}
