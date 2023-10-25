import React from "react";
import first from "../Images/first.avif";
import second from "../Images/second.avif";
import therd from "../Images/therd.avif";
import four from "../Images/four.png";
import five from "../Images/five.jpeg";
import six from "../Images/six.webp";

const section4 = (props) => {
  return (
    <div className={`container-fluid bg-${props.mode}`} id="service">
      <h1
        class={`text-shadow animed bg-${props.mode}`}
        style={{
          // backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "black" ? "white" : "black",
        }}
      >
        -- My Service --
      </h1>
      <div class="row pt-5">
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5">
            <img src={first} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                <a href="https://github.com/Maz801054/Healthcare.github.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5">
            <img src={second} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                <a href="https://github.com/Maz801054/Make-betar-zoon.github.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5">
            <img src={therd} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                <a href="https://github.com/Maz801054/Mytunes-website-github.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-5 ">
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5 ">
            <img src={four} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                <a href="https://github.com/Maz801054/Tecno-web.github.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5">
            <img src={five} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                {" "}
                <a href="https://github.com/Maz801054/Tution-website.github.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <div class="card mt-5">
            <img src={six} alt="" />
            <div class="card__content">
              <p class="card__title">Web Devlopmetn</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="mt-5">
                <a href="https://github.com/Maz801054/Flipkart-clone.gihub.io">
                  Read more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default section4;
