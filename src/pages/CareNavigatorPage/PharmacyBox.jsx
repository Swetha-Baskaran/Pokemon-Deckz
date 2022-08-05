import React from 'react'
import styled from '@emotion/styled'
import { Button } from "@mui/material";

const NameDiv = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const customStyles = {
  pharmacyBoxCont : {
    padding: "0 1rem 1rem 1rem",
    background: "#e7e7e7",
    marginBottom: "1rem"
  },
  RecomendedBtn: {
		color: "white",
    background: "#38d0d0",
    borderRadius: "50px",
    border: "none",
	},
  detailsText: {
    fontSize: "1.3rem"
  }
}

const PharmacyBox = () => {
  return (
    <div style={customStyles.pharmacyBoxCont}>
        <NameDiv>
            <h2>Pharmacy A</h2>
            <Button
				     	variant='outlined'
				     	size='large'
				     	style={customStyles.RecomendedBtn}>
				     	Recommended
				    </Button>
        </NameDiv>
        <div style={customStyles.detailsText}>
            Address :
        </div>
        <div style={customStyles.detailsText}>
            Phone :
        </div>
    </div>
  )
}

export default PharmacyBox

