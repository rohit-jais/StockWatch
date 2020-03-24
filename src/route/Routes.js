import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../components/MainPage';
import DisplayChart from './../components/DisplayChart';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import { connect } from 'react-redux'


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() =>  <Login /> } />
                <Route exact path='/dashboard' render={() => this.props.isLogin ? <MainPage /> : <Redirect to='/login' />} />
                <Route exact path='/login' render={() => <Login />} />
                <Route exact path='/register' render={() => <Register />} />
                <Route exact path='/dashboard' component={MainPage} />
                <Route exact path='/chart/:sym' render={(props) => <DisplayChart  {...props}/>} />
                {/* <Route exact render={() => <PageNotFound />} /> */}
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin 
})


export default connect(mapStateToProps)(Routes)