import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { registerUser } from './../../redux/action';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            username: '',
            mobile: '',
            description: ''
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container">
                    <div className="text-center h1">Register Form</div>
                    <div className="d-flex justify-content-center">
                        <div className="row p-5">

                            <form onSubmit={this.handelSubmit}>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handelChange} className="form-control" placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handelChange} className="form-control" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="Username" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" />
                                </div>

                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="number" name="mobile" value={this.state.mobile} onChange={this.handelChange} className="form-control" placeholder="Mobile" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                                <div className="d-flex justify-content-center p-5">
                                    <Link to='/login'><button className='ml-5'>Go to Login</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
