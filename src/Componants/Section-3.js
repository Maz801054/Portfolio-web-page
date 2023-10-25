import React from "react";
import Mazimg from "../Images/WhatsApp Image 2023-04-28 at 8.20.18 PM.jpeg";

const Section3 = (props) => {
  return (
    <section class={`section3 bg-${props.mode}`} id="about">
      <div class={`container bg-${props.mode}`}>
        <div class="row pb-5">
          <div class="col-sm-12 col-md-6 col-lg-6 col-12 text-end pt-5 pb-5 text-center">
            <img src={Mazimg} class="img-fluid imgcontrol" alt="..." />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-12 pt-5">
            <div class="s3control">
              <h1
                style={{
                  // backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                About Me
              </h1>
              <h4
                style={{
                  // backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                Devlopar <span class="pink">& Designer</span>
              </h4>
              <p
                class="mt-3"
                style={{
                  // backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
                voluptates ratione hic recusandae facere quidem commodi
                provident! Dolor iure aut nemo neque. Quisquam enim rerum quod
                soluta facere voluptas! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Fugit eum repellat unde odio esse modi aliquam
                labore praesentium? Molestias, sit?
              </p>
              <button>Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
