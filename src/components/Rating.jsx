/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Importing the RatingComponent from the "@syncfusion/ej2-react-inputs" library.
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

// Functional component CustomRatingComponent that takes props as its argument.
const CustomRatingComponent = (props) => (
  // The main container div.
  <div>
    {/* Rendering the RatingComponent with specified props. */}
    <RatingComponent
      value={props.Rating} // Setting the value based on the Rating prop.
      cssClass={"custom-rating"} // Applying a custom CSS class to the RatingComponent.
      readOnly={true} // Making the RatingComponent read-only.
    />
  </div>
);

// Exporting the CustomRatingComponent as the default export of this module.
export default CustomRatingComponent;
