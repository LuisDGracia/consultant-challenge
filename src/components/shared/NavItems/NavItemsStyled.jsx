import styled from 'styled-components'

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

export { RouteItem, RoutesList }
