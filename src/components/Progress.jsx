/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Functional component ProgressComponent that takes props as its argument.
const ProgressComponent = (props) => {
  // Extracting the percentage value from props based on the specified column field.
  let percentage = props[props.column.field];

  // Adjusting the percentage value conditionally.
  if (percentage <= 20) {
    percentage += 30;
  }

  // Returning the JSX for the progress component.
  return (
    <div id="myProgress" className="pbar">
      {/* Container for the progress bar with dynamic classes based on props. */}
      <div
        id="myBar"
        className={`bar ${
          props.Status === "Inactive" ? "progressdisable" : ""
        }`}
        style={{ width: `${percentage}%` }}
      >
        {/* Label for the progress bar displaying the percentage value. */}
        <div id="pbarlabel" className="barlabel">
          {`${percentage}%`}
        </div>
      </div>
    </div>
  );
};

// Exporting the ProgressComponent as the default export of this module.
export default ProgressComponent;
