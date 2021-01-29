import { DesignerContainer, DesignerFoto, DesignerName, DesignerJob, DesignerAbout, Container } from "./DesignerStyled";

export default function Designer() {
	return (
		<DesignerContainer>
			<DesignerFoto src="/assets/images/photo2.png" />
			<Container>
				<DesignerName>Aliza Webber</DesignerName>
				<DesignerJob>Interior designer</DesignerJob>
			</Container>
			<DesignerAbout>Designed in 2020 by Aliza Webber</DesignerAbout>
		</DesignerContainer>
	)
}
