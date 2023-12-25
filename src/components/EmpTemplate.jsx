/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Importing the FaUser icon from the react-icons/fa library.
import { FaUser } from "react-icons/fa";

// Functional component EmpTemplateComponent that takes props as its argument.
const EmpTemplateComponent = (props) => (
  // The main container div.
  <div>
    {/* Container div for employee image with the "empimg" class. */}
    <div className="empimg">
      {/* Span for styling employee image with a dynamic class based on props. */}
      <span className={`e-userimg sf-icon-${props.EmployeeImg}`}>
        {/* Rendering the FaUser icon with the "empimg" class and blue color. */}
        <FaUser className="empimg" color="blue" />
      </span>
    </div>

    {/* Span for displaying employee text received as a prop. */}
    <span id="Emptext">{props.Employees}</span>
  </div>
);

// Exporting the EmpTemplateComponent as the default export of this module.
export default EmpTemplateComponent;
