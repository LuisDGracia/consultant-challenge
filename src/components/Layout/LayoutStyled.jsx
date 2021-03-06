import styled from 'styled-components'

const Main = styled.section`
	max-width: 100vw;
	min-height: 100vh;

	padding: 40px 80px;

	background-color: hsl(270, 4%, 9%);
	color: white;

	@media screen and ( max-width: 400px){
		padding: 40px;
	}
`

export { Main };
