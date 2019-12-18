import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { localhost } from '../GlobalVars'

export default class GetUsernamePage extends Component {

    state={username:''}

    componentDidMount = () =>{
        axios.get(`${localhost}/user/username/${this.props.match.params.username}`)
        .then(r=>{
            this.setState({username:r.data.username})
        })
        .catch(err=>console.log(err))
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.username!='' && <h1>username is:{this.state.username}</h1>}
            </div>
        )
    }
}
