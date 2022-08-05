import React from "react";
import GoogleApiWrapper from "./Map";
import PharmacyBox from "./PharmacyBox";
import styled from "@emotion/styled";

const HighlightedText = styled.span(() => ({
    textDecoration: "underline",
}));
const H1 = styled.h1(() => ({
    padding: "3.5rem",
    backgroundColor: "#e7e7e7",
	textAlign: "center",
}));
const PharmacyDiv = styled.div(() => ({
    display: "flex",
    justifyContent: "space-between",
})); 
const Container = styled.div(() => ({
     margin: "3rem 4rem",
}));

const Pharmacy = () => {
	return (
		<Container>
			<H1>
				You need a <HighlightedText>Pharmacy</HighlightedText> in{" "}
				<HighlightedText>Detroit, Michigan</HighlightedText>
			</H1>
			<PharmacyDiv>
				<GoogleApiWrapper />
				<div style={customStyles.pharmacyDivHold}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
						return <PharmacyBox />;
					})}
				</div>
			</PharmacyDiv>
		</Container>
	);
};

export default Pharmacy;

const customStyles = {
	pharmacyDivHold : {
	  height: "27rem",
	  overflowY: "auto",
	//   flexGrow: "0.9",
	  width: "70%",
	},
  }