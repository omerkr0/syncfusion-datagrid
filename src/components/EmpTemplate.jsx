/* eslint-disable react/prop-types */
// EmpTemplateComponent.js
import { FaUser } from "react-icons/fa";

const EmpTemplateComponent = (props) => (
  <div>
    <div className="empimg">
      <span className={`e-userimg sf-icon-${props.EmployeeImg}`}>
        <FaUser className="empimg" color="blue" />
      </span>
    </div>
    <span id="Emptext">{props.Employees}</span>
  </div>
);

export default EmpTemplateComponent;
