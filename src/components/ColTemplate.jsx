/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Importing the FaLocationDot icon from the react-icons/fa6 library.
import { FaLocationDot } from "react-icons/fa6";

// Functional component ColTemplateComponent that takes props as its argument.
const ColTemplateComponent = (props) => (
  // The main container div with the "Mapimage" class.
  <div className="Mapimage">
    {/* Rendering the FaLocationDot icon with the "e-image" class. */}
    <FaLocationDot className="e-image" />

    {/* Adding an empty span for spacing. */}
    <span> </span>

    {/* Displaying the location text received as a prop. */}
    <span id="locationtext">{props.Location}</span>
  </div>
);

// Exporting the ColTemplateComponent as the default export of this module.
export default ColTemplateComponent;
