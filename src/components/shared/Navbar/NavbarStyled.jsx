import styled from 'styled-components'
import { RoutesList } from '../NavItems/NavItemsStyled'

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;

	.close{
		right: -100%;
		transition: all ease 0.5s;
	}

	.open{
		right: 0;
		transition: all ease 0.5s;

		${RoutesList}{
			visibility: visible;
		}
	}

	@media screen and (max-width: 800px){
		${RoutesList}{
			visibility: hidden;
		}
	}

`

const Brand = styled.p`
	border: 1px solid white;
	padding: 10px;

	font-family: Crimson Pro;
	font-weight: 200;

	margin: 0;
	display: inline-block;
`

const DrawerToggler = styled.div`
	width: 40px;
	height: 45px;
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	align-items: center;
	padding: 10px 0;
	cursor: pointer;
	z-index: 20;

	div {
		width: 90%;
		height: 3px;
		background-color: white;
	}

	@media (min-width: 800px) {
		display: none;
	}
`

export { NavBar, Brand, DrawerToggler }
