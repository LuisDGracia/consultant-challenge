import styled from 'styled-components'

const DesignerContainer = styled.div`
	width: 30%;
	padding: 20px;

	background-color: hsl(270, 4%, 9%);

	position: absolute;
	bottom: -30px;
	right: 40px;

	display: flex;
	flex-wrap: wrap;
`

const DesignerFoto = styled.img`
	width: 40px;
	border-radius: 50%;
`

const Container = styled.div`
	margin-left: 10px;
	width: calc( 100% - 50px );
`

const DesignerName = styled.p`
	margin: 0;
	font-size: 14px;
	font-family: Montserrat;
	font-weight: 500;
`

const DesignerJob = styled(DesignerName)`
	font-size: 12px;
	opacity: 0.5;
`

const DesignerAbout = styled(DesignerName)`
	width: 50%;
	margin-top: 10px;
	font-family: Lora;
	font-weight: 700;
`

export { DesignerContainer, DesignerName, DesignerJob, DesignerFoto, DesignerAbout, Container }
