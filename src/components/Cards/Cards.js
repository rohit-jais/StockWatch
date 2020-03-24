import React from "react";
import "./cards.css";

export default class Cards extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 className=" text-center mt-5 " id="txt-colr">
            <b>We're Here For</b>
          </h1>
        </div>
        <div className="container" id="main">
          <div className="row justify-content-center">
            <div className="col-3 m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="https://image.freepik.com/free-vector/stock-market-growth-illustration_82574-1568.jpg" className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h3 className=" text-center" id="maroon">
                      <b>Helping you going back with some Gains</b>
                    </h3>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 m-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/536/332/non_2x/businessman-running-with-candlestick-chart-background-concept-of-stock-market-vector-illustration.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <h3 className=" text-center" id="maroon">
                      <b>Real-Time Market Graphs, on which you can climb on.</b>
                    </h3>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-3 m-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://image.freepik.com/free-vector/stock-market-trader-illustration_1284-9882.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <h3 className=" text-center" id="maroon">
                      <b>We Help you to Understand what's Going on.</b>
                    </h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="card text-center">
            <div className="card-header">
              <h1 className=" text-center" id="blue">
                <b>You seemed to be Interested, Buzz In...!!!</b>
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Need a Special Treatment?</h5>
              <p className="card-text">
                Sign-Up with us and get ready to be our special one.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Sign-Up Here
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Hey Newbie, Sign Up Here
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" Create Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                          aria-label="Recipient's Email"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            ***
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder=" Create a Password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              <h3>
                Already with us?{" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                >
                  Just Login
                </button>
              </h3>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Hey, Welcome Back. Login Here:
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              ***
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder=" Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </form>{" "}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                       <button type="button" class="btn btn-primary">
                        Save changes
                      </button> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="rohit"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  STOCK-WATCH{" "}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h4>About</h4>
                <p>Stock-Watch is able to represent graphical/chart visualization of Real-Time/Historical Stock Data of listed firms on the Stock Market. It is be able to help it's users to show what's going on the stock market and will be helping them to invest and having their investment safe   </p>
                <h4>Stack Used & Reference</h4>
                <ul>
                  <li>
                    <h5>Stacks and Framework: </h5> React.js, Redux, Routing, Bootstrap
       </li>
                  <li>
                    <h5>API used: </h5> Alpha Vantage and Google Charts
       </li>
                </ul>
              </div>


              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button" class="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid mt-5" id="foot">
          <div class="container">
            <h1 class="display-5 text-center mb-3">
              <b>About</b>
            </h1>
            <p class="lead">
              <b>
                This product was build under Masai School's Hackathon Contest,
                which was conducted on 21st Feb and lasted for 36 hours.{" "}
              </b>
            </p>
            <hr></hr>
            <div class="text-center mt-5">
              <small>
                <b>o MADE WITH LEARNING AT MASAI SCHOOL, BENGALURU o</b>
              </small>
            </div>
          </div>
          <hr></hr>
          <div class="text-center ">
            <small>
              <b>
                © 2020 | DEFCON: "TWO" | Prabhat Kr. Ranjan and Rohit Jaiswal
              </b>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
