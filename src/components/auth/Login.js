import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './../../redux/action';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            data: ''

        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.checkAuth(this.state)
    }

    render() {

        let isLogin = this.props.isLogin
        return (
            <div>
                <div className="container">
                    <div className="text-center h1">Login Form</div>
                    <div className="d-flex justify-content-center">
                        <div className="row p-5">

                            <form onSubmit={this.handelSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handelChange} className="form-control" placeholder="username" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" placeholder="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                                <div className="d-flex justify-content-center p-5">
                                    <div>Dont have Account </div>
                                    <Link to='/register'><button className='ml-5'>Register</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Route render={() => isLogin && <Redirect to='/dashboard' />} />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

const mapDispatchToProps = dispatch => ({
    checkAuth: (payload) => dispatch(checkAuth(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
