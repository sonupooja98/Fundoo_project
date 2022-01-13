import React, { Component } from "react";
import '../forgotPassword/Forgot.css'
import { TextField } from "@material-ui/core";
// import { Link } from "react-router-dom";

export class Forgot extends Component {

           constructor(props){
                    super(props)

                    this.state={
                        numEmail:'',
                        numEmailError:false
                    }
                }
                changeHandle =(e)=>{
                    console.log(this.state)
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }
            
                validation =() =>{
                    let isError = false;
                    const error  =this.state;
                    error.numEmailError  = this.state.numEmail === '' ? true : false;
            
            
            
                    this.setState({
                        ...error
                    })
            
                    return isError = error.numEmailError;
                }
            
            
                next =() =>{
                    var validated = this.validation();
                    if(validated){
                        console.log("Validation successfull !!!")
                    }
                }
        



 render() {
        return (
            <div className="forgot-main">
                <div className="forgot">
                    <div className="first-part">
                        <div className="Fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        
                      <p className="Email">Find your email</p>
                        <p className="phoneNumber">Enter your phone or recovery email</p> 
                    </div>
                    <div className="Num-or-Email">
                        <TextField name="numEmail" id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth
                        error={this.state.numEmailError}
                        helperText={this.state.numEmailError ? "Number or Email required" : ""}
                        onChange={e=>this.changeHandle(e)} />
                    </div>
                 {/* /*<Link to="./reseta">*/<button className="button" onClick={this.next}>Next</button>/*</Link> */}
                </div>
            </div>
        )
    }
}

export default Forgot