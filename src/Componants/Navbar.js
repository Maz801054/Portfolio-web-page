import React from "react";

const navBar = (props) => {
  return (
    <nav
      class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5 pt-5 `}
    >
      <div class="container-fluid ones">
        <a class="navbar-brand fs-1 " href="#" >
          Portfo<span class="pink">lio</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto control mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link alik active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link alik active" aria-current="page" href="#about">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link alik active"
                aria-current="page"
                href="#service"
              >
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link alik active" aria-current="page" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link alik active"
                aria-current="page"
                href="#contact"
              >
                Contact US
              </a>
            </li>
          </ul>
          <button onClick={props.toggleMode}>Subscribe</button>
        </div>
      </div>
    </nav>
  );
};
export default navBar;
