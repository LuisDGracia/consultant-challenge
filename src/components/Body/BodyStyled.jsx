import styled from 'styled-components'

const BodyContainer = styled.section`
	margin-top: 40px;

	position: relative;

	display: flex;
	justify-content: space-between;

	@media screen and ( max-width: 800px ){
		flex-direction: column;
	}
`

const LandingImage = styled.img`
	width: 50%;
	
	@media screen and ( max-width: 800px ){
		width: 100%;
	}
`

export { BodyContainer, LandingImage }
