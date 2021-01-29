import Designer from '../Designer/Designer'
import MainText from '../MainText/MainText'
import { BodyContainer, LandingImage } from './BodyStyled'

export default function Body() {
	return (
		<BodyContainer >
			<MainText />
			<LandingImage src="/assets/images/photo1.png" />
			<Designer />
		</BodyContainer>
	)
}
