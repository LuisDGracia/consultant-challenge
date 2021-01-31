import { useState } from 'react';
import SideDrawer from "../SideDrawer/SideDrawer";
import NavItems from '../NavItems/NavItems';
import { Brand, NavBar, DrawerToggler } from "./NavbarStyled";

export default function Navbar() {

	const [ toggle, setToggle ] = useState( false )

	const displaySideDrawer = () => {
		setToggle( !toggle )
	}

	return (
		<NavBar >
			<Brand >THE INTERIOR</Brand>
			<SideDrawer show={ toggle ? 'open' : 'close' } />
			<NavItems />
			<DrawerToggler onClick={ () => displaySideDrawer() } >
				<div></div>
				<div></div>
				<div></div>
			</DrawerToggler>
		</NavBar>
	)
}
