import { useState } from "react";
import { Section } from "./Section";
import "../styles/form.css";

const generalInfos = [
  {
    label: "Name",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "Email",
    type: "email",
    id: crypto.randomUUID(),
  },
  {
    label: "Phone Number",
    type: "tel",
    id: crypto.randomUUID(),
  },
];
const educationalExp = [
  {
    label: "School Name",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "Title Of Study",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "Date Of Study",
    type: "date",
    id: crypto.randomUUID(),
  },
];
const practicalExp = [
  {
    label: "Company Name",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "Position Title",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "Job Responsibilities",
    type: "text",
    id: crypto.randomUUID(),
  },
  {
    label: "started Work",
    type: "date",
    id: crypto.randomUUID(),
  },
  {
    label: "End Work",
    type: "date",
    id: crypto.randomUUID(),
  },
];

export function Form({ setShowPart, handelInputChange, formData }) {
  let [sectionIndex, setSectionIndex] = useState(1);
  return (
    <div className="form">
      <div>
        <button onClick={() => setSectionIndex(1)}>General Informations</button>
        <button onClick={() => setSectionIndex(2)}>
          Educational Experience
        </button>
        <button onClick={() => setSectionIndex(3)}>Practical Experience</button>
      </div>
      {sectionIndex === 1 ? (
        <Section
          fieldsInfos={generalInfos}
          sectionLabel="generalInfos"
          handelInputChange={handelInputChange}
          formData={formData}
        />
      ) : sectionIndex === 2 ? (
        <Section
          fieldsInfos={educationalExp}
          sectionLabel="educationalExp"
          handelInputChange={handelInputChange}
          formData={formData}
        />
      ) : (
        <Section
          fieldsInfos={practicalExp}
          setShowPart={setShowPart}
          sectionLabel="practicalExp"
          handelInputChange={handelInputChange}
          formData={formData}
        />
      )}
    </div>
  );
}
