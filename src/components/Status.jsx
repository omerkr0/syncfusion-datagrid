/* eslint-disable react/prop-types */
// StatusComponent.js
const StatusComponent = (props) => (
  <div>
    <div
      className={`statustemp ${
        props.Status === "Active" ? "e-activecolor" : "e-inactivecolor"
      }`}
    >
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

export default StatusComponent;
