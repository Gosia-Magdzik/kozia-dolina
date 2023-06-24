import styled from "styled-components";
import { MapContainer } from 'react-leaflet/MapContainer'

export const StyledMapContainer = styled(MapContainer)`
    height: 600px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    position: relative;
    margin: 5px;
`;

export const Wrapper = styled.div`
    overflow: hidden;
    //height: 500px;
    width: 100%;
    padding: 1rem;
`;

export const ContactWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid;
    text-align: center;
    background-color: #ebffebe0;
    padding: 15px;
    margin: 15px;
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Img = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 20px;

    &:hover {
        scale: 1.1;
    }
`;

export const Text = styled.p`
    font-size: 30px;
`;