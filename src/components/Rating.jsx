/* eslint-disable react/prop-types */
// RatingComponent.js
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

const CustomRatingComponent = (props) => (
  <div>
    <RatingComponent
      value={props.Rating}
      cssClass={"custom-rating"}
      readOnly={true}
    />
  </div>
);

export default CustomRatingComponent;
