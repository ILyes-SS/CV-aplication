import { Field } from "./Field";
import { SubmitBtn } from "./SubmitBtn";

export function Section({
  fieldsInfos,
  setShowPart,
  sectionLabel,
  handelInputChange,
  formData,
}) {
  return (
    <div className="section">
      {fieldsInfos.map((field) => {
        return (
          <Field
            key={field.id}
            sectionLabel={sectionLabel}
            type={field.type}
            label={field.label}
            handelInputChange={handelInputChange}
            formData={formData}
          />
        );
      })}
      {fieldsInfos[0].label == "Company Name" ? (
        <SubmitBtn setShowPart={setShowPart} />
      ) : null}
    </div>
  );
}
