import { useState } from "react";

export function Field({
  type,
  label,
  sectionLabel,
  handelInputChange,
  formData,
}) {
  return (
    <div className="field">
      <label htmlFor={sectionLabel + "." + label}>{label}</label>
      <input
        type={type}
        id={sectionLabel + "." + label}
        value={formData[sectionLabel][label]}
        onChange={(e) => handelInputChange(e)}
      />
    </div>
  );
}
