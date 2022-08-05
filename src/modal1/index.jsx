import React from 'react'
import classes from "./style.module.scss"
import { FormControl, Input, InputAdornment, IconButton } from "@mui/material";
import doctorWomen from "../assets/doctor_woman.png"
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const SmallModal = () => {
  return (
    <div className={classes["modal-hold"]}>
        <div className={classes["modal-container"]}>
        <div className={classes["img-hold"]}>
            <div className={classes["rect-shape"]}></div>
            <img src={doctorWomen} className={classes["modal-img"]} alt="" ></img>
        </div>
        <div className={classes["content-hold"]}>
            <div className={classes["cross-icon"]}><ClearIcon className={classes["icon"]} /></div>
            <h1 className={classes["modal-h1"]}>We recommend you to start seeking a physical Medicine and Rehab physician's option</h1>
            <p className={classes["modal-p"]}>The first step when you are unsure what type of specialist you need is to seek adivce from a physiatrist.</p>
            <div className={classes["input-hold"]}>
               <FormControl sx={{ m: 1, width: '35ch' }} className={classes["modal-input"]}>
                 <Input 
                   variant="standard"
                   id="standard-basic"
                   endAdornment={
                     <InputAdornment position="end">
                       <IconButton>
                           <LocationOnIcon className={classes["location-icon"]} />
                       </IconButton>
                     </InputAdornment>
                   }
                   style={{"border" : "none"}}
                   className={classes["modal-input"]}
                   placeholder="Type the address..."
                 />
               </FormControl>
            </div>
            <div className={classes["go-btn-hold"]}>
              <button className={classes["go-btn"]}>
                  Go
              </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SmallModal