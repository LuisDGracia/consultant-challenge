import NavItems from "../NavItems/NavItems"
import { SideDrawerContainer } from './SideDrawerStyled'

export default function SideDrawer({ show }) {

	return (
		<SideDrawerContainer className={ show } >
			<NavItems />
		</SideDrawerContainer>
	)
}


