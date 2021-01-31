import { Main } from './LayoutStyled'

//Components
import Body from '../Body/Body'
import Navbar from '../shared/Navbar/Navbar'
import Designer from '../Designer/Designer'

export default function Layout() {
	return (
		<Main>
			<Navbar />
			<Body />
		</Main>
	)
}
