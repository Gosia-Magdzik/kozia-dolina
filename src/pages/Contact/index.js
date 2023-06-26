import {  TileLayer, Marker, Popup } from "react-leaflet";
import { StyledMapContainer, Wrapper, ContactWrapper, Title, Img, Text, Center } from "./styled";
import fb from "./facebook.svg"

export const Contact = () => {
    return (
        <>
        <Center>
            <ContactWrapper>
                <Title>Kontakt</Title>
                <Text>Ojrzanowo 48A, 89-210</Text>
                <Text><a href="+48793228793"> 793 228 793</a></Text>
                <Text><a href="+48793323193"> 793 323 193</a></Text>
                <Text><a href="mailto:kozia-dolina@o2.pl">kozia-dolina@o2.pl</a></Text>
                <Text>woj. Kujawsko-Pomorskie</Text>
                <p><a href="https://www.facebook.com/KoziaDolinaOjrzanowo/"><Img src={fb}/></a></p>
            </ContactWrapper>
        </Center>
        <Wrapper id="map">
                <StyledMapContainer center={[52.94138176478545, 17.977916353964144]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[52.94138176478545, 17.977916353964144]}>
                        <Popup>
                        KOZIA DOLINA 
                        </Popup>
                    </Marker>
                </StyledMapContainer>
        </Wrapper>
        </>
    );
}