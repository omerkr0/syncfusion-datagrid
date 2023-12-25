/* eslint-disable react/prop-types */
// The above line disables eslint warnings related to missing prop types.

// Functional component TrustComponent that takes props as its argument.
const TrustComponent = (props) => {
  // Determine the path to the Trustworthiness image or set to null if "Select All" is chosen.
  const Trustworthiness =
    props.Trustworthiness === "Select All"
      ? null
      : `public/assets/${props.Trustworthiness}.png`;

  // Return JSX for the TrustComponent.
  return (
    <div>
      {/* Conditional rendering: Display image and text if Trustworthiness is not "Select All". */}
      {Trustworthiness && (
        <>
          {/* Image element with inline styling for width and height. */}
          <img
            style={{ width: "31px", height: "24px" }}
            src={Trustworthiness}
            alt="Trustworthiness"
          />

          {/* Span for displaying the Trustworthiness text. */}
          <span id="Trusttext">{props.Trustworthiness}</span>
        </>
      )}
    </div>
  );
};

// Exporting the TrustComponent as the default export of this module.
export default TrustComponent;
