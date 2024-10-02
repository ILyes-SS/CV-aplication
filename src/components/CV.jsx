import { useState } from "react";
import { Form } from "./Form";
import { Infos } from "./Infos";

export function CV() {
  let [showPart, setShowPart] = useState(0);
  let [formData, setFormData] = useState({
    generalInfos: {
      Name: "",
      Email: "",
      "Phone Number": "",
    },
    educationalExp: {
      "School Name": "",
      "Title Of Study": "",
      "Date Of Study": "",
    },
    practicalExp: {
      "Company Name": "",
      "Position Title": "",
      "Job Responsibilities": "",
      "started Work": "",
      "End Work": "",
    },
  });

  function handelInputChange(e) {
    let { id, value } = e.target;
    let [section, field] = id.split(".");

    console.log("Updating field:", section, field, id, value);
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  }
  return (
    <>
      {showPart < 1 ? (
        <Form
          setShowPart={setShowPart}
          handelInputChange={handelInputChange}
          formData={formData}
        />
      ) : (
        <Infos setShowPart={setShowPart} formData={formData} />
      )}
    </>
  );
}
