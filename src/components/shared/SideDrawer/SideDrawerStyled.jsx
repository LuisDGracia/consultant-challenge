import styled from 'styled-components'
import { RoutesList } from "../NavItems/NavItemsStyled"

const SideDrawerContainer = styled.div`
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	right: 0;
	top: 0;
	z-index: 10;
	background-color: #181719;
	padding: 32px 16px;

	${RoutesList}{
		width: 100%;
		height: 100%;

		flex-direction: column;
		justify-content: space-evenly;
	}

`

export { SideDrawerContainer }
