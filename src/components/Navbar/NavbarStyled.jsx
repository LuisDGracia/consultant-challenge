import styled from 'styled-components'

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
`

const Brand = styled.p`
	border: 1px solid white;
	padding: 10px;

	font-family: Crimson Pro;
	font-weight: 200;

	margin: 0;
	display: inline-block;
`

const RoutesList = styled.ul`
	width: 40%;
	
	margin: 0;
	padding: 0;

	list-style: none;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

const RouteItem = styled.li`

	font-family: Montserrat;
	font-weight: 500;

	&:active{
		font-weight: 700;
	}

	&:hover{
		cursor: pointer;
	}
`

export { NavBar, Brand, RoutesList, RouteItem }
