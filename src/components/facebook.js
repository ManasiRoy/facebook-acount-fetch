import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        name: "",
        email: "",
        picture: "",
        userID: "",
    }
    responseFacebook = response => {
        //console.log(response)
        this.setState({
            isLoggedIn: true,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            userID: response.userID,
        })
    }
    componentClicked = () => {
        console.log('clicked')
    }
    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div>
                    <h1>User Name : {this.state.name}</h1>
                    <img src={this.state.picture} alt={this.state.name} />
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2470293293300787"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

