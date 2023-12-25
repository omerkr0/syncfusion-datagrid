/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Functional component StatusComponent that takes props as its argument.
const StatusComponent = (props) => (
  // The main container div.
  <div>
    {/* Container div for the status with dynamic classes based on the Status prop. */}
    <div
      className={`statustemp ${
        props.Status === "Active" ? "e-activecolor" : "e-inactivecolor"
      }`}
    >
      {/* Span for displaying the status text with dynamic classes based on the Status prop. */}
      <span
        className={`statustxt ${
          props.Status === "Active" ? "e-activecolor" : "e-inactivecolor"
        }`}
      >
        {props.Status}
      </span>
    </div>
  </div>
);

// Exporting the StatusComponent as the default export of this module.
export default StatusComponent;
