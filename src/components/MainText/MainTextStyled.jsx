import styled from 'styled-components'

const TextContainer = styled.div`
	width: 30%;

	display: flex;
	flex-direction: column;

	@media screen and ( max-width: 800px ){
		width: 100%;
		margin-bottom: 20px;
	}
`

const Tittle = styled.h1`
	font-family: Lora;
	font-weight: 400;
`

const Body = styled.p`
	font-family: Montserrat;
	font-weight: 300;
	font-size: 1.5em;
`

const Read = styled.button`
	width: fit-content;

	background: none;
	border: none;
	color: white;

	font-family: Montserrat;
	font-weight: 600;

	&:hover{
		cursor: pointer;
	}
`

export { TextContainer, Tittle, Body, Read }
