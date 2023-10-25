import React from "react";

const Section2 = (props) => {
  return (
    <section class={`section1 container-fluid bg-${props.mode}`} id="home">
      <div class={`cont1 bg-${props.mode}`}>
        <div
          class="font"
          style={{
            // backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "black" ? "white" : "black",
          }}
        >
          <h4>Hello, my name is</h4>
          <h1 class="hcantrol">Mansuri Maz</h1>
          <h4>I'am a Web Devlopar</h4>
          <input
            placeholder="Enter your text..."
            class={`input inputcontrol bg-${props.mode}`}
            name="text"
            type="text"
          />
        </div>
      </div>
    </section>
  );
};
export default Section2;
