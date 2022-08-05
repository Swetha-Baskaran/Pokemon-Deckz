import React from 'react'
import Navbar from '../components/Navbar'
import classes from "./style.module.scss"
import { FormControl, FormHelperText, TextField } from "@mui/material"
import loginImg from "../assets/login_img.png"
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'

const LoginWeb = () => {
  const {matches, matchesAny, matchesAll} = useMediaQueries({
    screen: 'screen',
    width: '(max-width: 1000px)'
  })

  return (
    <div>
        {/* <Navbar /> */}
        <div className={classes["login-container"]}>
            <div className={classes["login-img-hold"]} style={customStyle.bgImg}>
                {/* <img src={loginImg} alt='' className={classes["login-img"]}/> */}
            </div>
            <div className={classes["content-hold"]}>
                <h1 className={classes["login-heading"]}>
                    Welcome to <span className={classes["login-heading-org"]}>Modus</span>
                </h1>
                <p className={classes["login-text"]}>
                    Please log in to your account to access Modus. If you have any issues, please get in touch with our support team.
                </p>
                <div className={classes["input-row"]}>
					<FormControl style={matches.width ? {"width" : "95%"} : customStyle.formControl}>
						<FormHelperText id='email-helper-text' style={matches.width ? customStyleMobile.label: customStyle.label}>
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
				<div className={classes["input-row"]}>
					<FormControl style={matches.width ? {"width" : "95%"} : customStyle.formControl}>
						<FormHelperText id='filled-weight-helper-text' style={matches.width ? customStyleMobile.label: customStyle.label}>
							Enter your password
						</FormHelperText>
						<TextField
                            type="password"
							id='outlined-size-small'
							size='small'
							placeholder='+2635348976'
							style={customStyle.textField}
						/>
					</FormControl>
				</div>
                <div className={classes["go-btn-hold"]}>
                  <button className={classes["go-btn"]}>
                     Log in
                  </button>
                  <div className={classes["reset-btn"]}>Reset your password</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginWeb

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
}

const customStyleMobile = {
    label: {
        fontSize : "1.2rem",
        color : "black",
        marginBottom : "0.3rem",
        textAlign: "center",
    },
    formControl:{
        width: "94.3%%"
    },
}