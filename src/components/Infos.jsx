import { EditBtn } from "./EditBtn";
export function Infos({ setShowPart }) {
  return (
    // we need the values of each input put in the html elements
    <>
      <h1>generalInfos</h1>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <h1>educationalExp</h1>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <h1>practicalExp</h1>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <EditBtn setShowPart={setShowPart} />
    </>
  );
}
