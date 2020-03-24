import React from "react";
import "./content.css";
export default class Content extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-11">
              <div class="jumbotron" id="jumbo">
                <h1 class="display-5 text-white " id="quote">
                  <b>
                    “if you are persistent you will get it. <br />
                    if you are consistent you will <br /> keep it.”{" "}
                  </b>
                </h1>
                <small class="text-white" id="quote2">
                  <i> -Harvey McKay </i>
                </small>
              </div>
              <div id="marq">
                <marquee>
                  MARKET CLOSED, SEE YOU AT 09:15 am IN THE MORNING
                </marquee>
              </div>
              {/* <div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
