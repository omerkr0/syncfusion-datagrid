/* eslint-disable react/prop-types */
// TrustComponent.js
const TrustComponent = (props) => {
    const Trustworthiness = props.Trustworthiness === "Select All"
      ? null
      : `src/assets/images/${props.Trustworthiness}.png`;
  
    return (
      <div>
        {Trustworthiness && (
          <>
            <img style={{width: "31px", height: "24px"}} src={Trustworthiness} alt="Trustworthiness" />
            <span id="Trusttext">{props.Trustworthiness}</span>
          </>
        )}
      </div>
    );
  }
  
  export default TrustComponent;
  