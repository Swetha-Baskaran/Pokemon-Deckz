import React from "react";
import styled from "@emotion/styled";
import ModusLogo from "../../assets/Modus_logo_2021.png";
import { Button } from "@mui/material";

const NavbarDiv = styled.div(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "1rem 2rem",
	position: "fixed",
	top: "0px",
	width: "95%",
}));

const Img = styled.img(() => ({
	width: "14rem",
	height: "auto",
}));

const Navbar = () => {
	return (
		<NavbarDiv>
			<Img src={ModusLogo} alt='' />
			<div>
				<Button size='large' style={{ color: "black" }}>
					Log Out
				</Button>
				<Button
					variant='outlined'
					size='large'
					style={customStyles.myAccount}>
					My Account
				</Button>
			</div>
		</NavbarDiv>
	);
};

export default Navbar;

const customStyles = {
	myAccount: {
	   color: "black",
       border: "solid 3px #fff",
       background: "#cbf3f3",
       borderRadius: "50px",
       boxShadow: "4px 4px 40px 2px rgba(103, 106, 107, 0.15)",
	   marginLeft: "2rem"
	},
};
