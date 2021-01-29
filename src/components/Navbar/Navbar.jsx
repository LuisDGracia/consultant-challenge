import { Brand, NavBar, RouteItem, RoutesList } from "./NavbarStyled";

export default function Navbar() {
	return (
		<NavBar >
			<Brand >THE INTERIOR</Brand>
			<RoutesList>
				<RouteItem>Home</RouteItem>
				<RouteItem>Colection</RouteItem>
				<RouteItem>About</RouteItem>
				<RouteItem>Contact</RouteItem>
			</RoutesList>
		</NavBar>
	)
}
