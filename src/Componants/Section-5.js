import React from "react";

const section5 = (props) => {
  return (
    <section
      className={`section5 container-fluid bg-${props.mode}`}
      id="contact"
    >
      <div className="container pt-5 pb-5 container-fluid">
        <h1
          className={`text-shadow animed container-fluid pb-5 bg-${props.mode}`}
          style={{
            // backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "black" ? "white" : "black",
          }}
        >
          -- Contact Us --
        </h1>
        <div
          className="contact"
          style={{
            // backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "black" ? "white" : "black",
          }}
        >
          <i class="fa-solid fa-signature"></i> <span> Mansuri maz</span>
          <i class="fa-solid fa-phone"></i> 6353942595
          <i class="fa-solid fa-envelope"></i> mazmansuri@gmail.com
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};
export default section5;
