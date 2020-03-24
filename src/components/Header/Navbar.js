import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBox: '',
      searchresult: [0],
    }
  }

  handelChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    })
    let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${e.target.value}&apikey=1BQSNDWLJ5O17A7B`;
    fetch(API_Call)
      .then((res) => {
        return res.json();
      }
      )
      .then((data) => {
        console.log(data)
        this.setState({
          searchresult: data["bestMatches"]
        })
      }
      )
  }

  render() {
    console.log(this.state.searchresult)

    return (
      <div>
        <div class="container-fliud">
          <nav
            class="navbar fixed-top navbar-expand-lg navbar-light"
            id="navbar"
          >
            <a class="navbar-brand ml-5" href="#">
              <img src="logo.png" width="300" height="55" alt="" />
            </a>
            <div>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Info & Docs
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item">
                      <button
                        type="button"
                        class="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#rohit"
                      >
                        About
                      </button>
                    </a>
                    <a class="dropdown-item" href="#">
                      <button
                        type="button"
                        class="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Credits
                      </button>{" "}
                    </a>
                    <a class="dropdown-item" href="#">
                      <button
                        type="button"
                        class="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Update
                      </button>{" "}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <form>

                    <input name='searchBox' placeholder="Search Stock" value={this.state.searchBox} onChange={this.handelChange} className='form-control ' id="nav" />
                    {this.state.searchresult.map((item, index) => <div key={index} value={item["1. symbol"]}>  <Link to={`/chart/${item["1. symbol"]}`}>{item['2. name']}</Link> </div>)}
            </form>
              </div>
            </div>
</div>
          </nav>

      </div>
      </div >
    );
  }
}
