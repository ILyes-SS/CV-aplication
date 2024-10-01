import { Field } from "./Field";
import { SubmitBtn } from "./SubmitBtn";

export function Section({ fieldsInfos, setShowPart }) {
  return (
    <>
      {fieldsInfos.map((field) => {
        return <Field key={field.id} type={field.type} label={field.label} />;
      })}
      {fieldsInfos[0].label == "Company Name" ? (
        <SubmitBtn setShowPart={setShowPart} />
      ) : null}
    </>
  );
}
