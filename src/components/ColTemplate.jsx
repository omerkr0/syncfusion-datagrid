/* eslint-disable react/prop-types */
// ColTemplateComponent.js
import { FaLocationDot } from "react-icons/fa6";

const ColTemplateComponent = (props) => (
  <div className="Mapimage">
    <FaLocationDot className="e-image" />
    <span> </span>
    <span id="locationtext">{props.Location}</span>
  </div>
);

export default ColTemplateComponent;
