import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, FormControl, FormHelperText, Typography } from "@mui/material";
import classes from "./style.module.scss";

export default function ModalOne() {
	return (
		<div className={classes["modal-hold"]}>
			<Box
				component='form'
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete='off'
				className={classes["modal-container"]}>
				<Typography
					variant='h3'
					component='h3'
					className={classes["modal-title"]}>
					Add a new user
				</Typography>
				<div className={classes["avatar-hold"]}>
					<div className={classes["avatar-box"]}>
						<Avatar
							style={{ background: "#d9d9d9" }}
							sx={{ width: 140, height: 140 }}>
							{" "}
						</Avatar>
					</div>
					<div className={classes["modal-row-img"]}>
						<FormControl style={{ width: "50%", marginRight: "1.5rem" }}>
							<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
								Name
							</FormHelperText>
							<TextField
								id='outlined-size-small'
								size='small'
								placeholder='Tiphaine'
								style={customStyle.textField}
							/>
						</FormControl>
						<FormControl style={{ width: "50%", marginRight: "1.5rem" }}>
							<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
								Last name
							</FormHelperText>
							<TextField
								id='outlined-size-small'
								size='small'
								placeholder='Bruel'
								style={customStyle.textField}
							/>
						</FormControl>
					</div>
				</div>
				<div className={classes["modal-row"]}>
					<FormControl style={customStyle.formControl}>
						<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
							Email address
						</FormHelperText>
						<TextField
							id='outlined-size-small'
							size='small'
							placeholder='bruel.tiphaine@gmail.com'
							style={customStyle.textField}
						/>
					</FormControl>
					<FormControl style={customStyle.formControl}>
						<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
							Phone number
						</FormHelperText>
						<TextField
							id='outlined-size-small'
							size='small'
							placeholder='+2635348976'
							style={customStyle.textField}
						/>
					</FormControl>
				</div>
				<div className={classes["modal-row"]}>
					<FormControl style={customStyle.formControl}>
						<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
							Occupation
						</FormHelperText>
						<TextField
							id='outlined-size-small'
							size='small'
							placeholder='Nurse'
							style={customStyle.textField}
						/>
					</FormControl>
					<FormControl style={customStyle.formControl}>
						<FormHelperText id='filled-weight-helper-text' style={customStyle.label}>
							Group
						</FormHelperText>
						<TextField
							id='outlined-size-small'
							size='small'
							placeholder='GLPO'
							style={customStyle.textField}
						/>
					</FormControl>
				</div>
				<div className={classes["go-btn-hold"]}>
					<button className={classes["go-btn"]}>Create</button>
				</div>
			</Box>
		</div>
	);
}

const customStyle = {
    label: {
        fontSize : "0.9rem",
        marginBottom : "0.3rem",
    },
	formControl : { width: "48.8%" },
	textField : { width: "100%" }
}