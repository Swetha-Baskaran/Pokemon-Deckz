import React from 'react'
import Navbar from '../components/Navbar'
import classes from "./style.module.scss"
import { FormControl, FormHelperText, TextField } from "@mui/material"
import loginImg from "../assets/login_img.png"

const ResetPassword = () => {
  return (
    <div>
        <Navbar />
        <div className={classes["login-container"]}>
            <div className={classes["login-img-hold"]} style={customStyle.bgImg}>
                {/* <img src={loginImg} alt='' className={classes["login-img"]}/> */}
            </div>
            <div className={classes["content-hold"]}>
                <h1 className={classes["login-heading"]}>
                    Reset your password
                </h1>
                <p className={classes["login-text"]}>
                    If you have forgotten your password please enter your email address below and we will send you an email with instructions to reset your password
                </p>
                <div className={classes["input-row"]}>
					<FormControl style={customStyle.formControl}>
						<FormHelperText id='email-helper-text' style={customStyle.label}>
							Enter your email Address
						</FormHelperText>
						<TextField
							id='outlined-size-small'
                            name="email-helper-text"
							size='small'
							placeholder='bruel.tiphaine@gmail.com'
							style={customStyle.textField}
						/>
					</FormControl>
				</div>
                <div className={classes["go-btn-hold"]}>
                  <button className={classes["go-btn"]}>
                     Submit
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword

const customStyle = {
    label: {
        fontSize : "1.2rem",
        color : "black",
        marginBottom : "0.3rem",
    },
    formControl:{
        width: "71%"
    },
    bgImg: {
        width: "70%",
        height: "100%",
        background: `url(${loginImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    textField: {
        // width: "100%",
        // borderRadius: "12px",
        // border: "solid 2.6px #e8e8e8",
        // outline: "none !important"
    }
}