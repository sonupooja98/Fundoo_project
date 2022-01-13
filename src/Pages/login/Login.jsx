import React, { Component } from 'react'
import './Login.css'
import { TextField } from "@material-ui/core";
// import { Link } from "react-router-dom";
export class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            emailId : '',
            passId :'',
            emailIdError : false,
            passIdError:false
        }

    }

    Data =(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    validation = () =>{
        let isError = false;
        const error = this.state;
        error.emailIdError = this.state.emailId === '' ? true : false;
        error.passIdError = this.state.passId === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailIdError || error.passIdError;
    }







next =() =>{
        var validated = this.validation();
        if(validated){
            console.log("sucessfull")
        } else console.log("something missing")
    }






    render() {
        return (
            <div className="L-main">
        <div className="l-con">
            <div className="c1">
                <div className="f">
                    <p style={{ color: 'blue' }} >F</p>
                    <p style={{ color: 'red' }}>u</p>
                    <p style={{ color: 'yellow' }}>n</p>
                    <p style={{ color: 'blue' }}>d</p>
                    <p style={{ color: 'green' }}>o</p>
                    <p style={{ color: 'red' }}>o</p>
                </div>
                <p className="s-in">Sign in</p>
                < p className="c-account">Use your fundoo Account</p>
            </div>
            <div className="em">
                <TextField name="emailId" id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth 
                error = {this.state.emailIdError}
                helperText = {this.state.emailIdError ? "Email or number required" : ""} onChange={e=>this.Data(e)}
                onChange={e=>this.Data(e)}/>
            </div>
            <br></br>
            <div className="pass">
                <TextField name="passId" id="outlined-basic" label="Password" variant="outlined" helperText="Forgot Password" fullWidth 
                error={this.state.passIdError}
                helperText = {this.state.passIdError ? "Password required" : ""}onChange={e=>this.Data(e)}
                onChange={e=>this.Data(e)}/>

            </div>
            <div className="com">
                <p className="t">Not your computer? Use Guest mode to sign in privately.</p>
                <p className="m">Learn more</p>
            </div>
            <div className="c">
               {/* /*<Link to="./signup">*/<p className="acct" >Create account ?</p>/*</Link> */}
                <div className="b">
                    <button className="bu" onClick={this.next}>Next</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Login
