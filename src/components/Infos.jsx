import { EditBtn } from "./EditBtn";
import "../styles/infos.css";
export function Infos({ setShowPart, formData }) {
  return (
    // we need the values of each input put in the html elements
    <div className="infos">
      <h1>General Informations</h1>
      <ul style={{ listStyle: "none" }}>
        <li>{formData.generalInfos["Name"]}</li>
        <li>{formData.generalInfos["Email"]}</li>
        <li>{formData.generalInfos["Phone Number"]}</li>
      </ul>
      <h1>Educational Experience</h1>
      <ul style={{ listStyle: "none" }}>
        <li>{formData.educationalExp["School Name"]}</li>
        <li>{formData.educationalExp["Title Of Study"]}</li>
        <li>{formData.educationalExp["Date Of Study"]}</li>
      </ul>
      <h1>Practical Experience</h1>
      <ul style={{ listStyle: "none" }}>
        <li>{formData.practicalExp["Company Name"]}</li>
        <li>{formData.practicalExp["Position Title"]}</li>
        <li>{formData.practicalExp["Job Responsibilities"]}</li>
        <li>{formData.practicalExp["started Work"]}</li>
        <li>{formData.practicalExp["End Work"]}</li>
      </ul>
      <EditBtn setShowPart={setShowPart} />
    </div>
  );
}
