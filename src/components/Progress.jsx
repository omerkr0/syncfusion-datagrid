/* eslint-disable react/prop-types */
// ProgressComponent.js
const ProgressComponent = (props) => {
  let percentage = props[props.column.field];
  if (percentage <= 20) {
    percentage += 30;
  }

  return (
    <div id="myProgress" className="pbar">
      <div
        id="myBar"
        className={`bar ${
          props.Status === "Inactive" ? "progressdisable" : ""
        }`}
        style={{ width: `${percentage}%` }}
      >
        <div id="pbarlabel" className="barlabel">
          {`${percentage}%`}
        </div>
      </div>
    </div>
  );
};

export default ProgressComponent;
