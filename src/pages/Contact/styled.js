import styled from "styled-components";
import { MapContainer } from 'react-leaflet/MapContainer'

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledMapContainer = styled(MapContainer)`
    border-radius: 10px;
    position: relative;
    height: 600px;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin-bottom: 20px;
        height: 300px;
    }
`;

export const Wrapper = styled.div`
    overflow: hidden;
    padding: 15px;
    margin: 20px;
    height: 95%;

    @media (max-width: 768px) {
        height: 95%;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const ContactWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid;
    text-align: center;
    background-color: #ebffebe0;
    padding: 15px;
    margin: 15px;
    width: 50%;

    @media (max-width: 768px) {
        margin: 5px;
        width: 90%;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #38844F;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Img = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 20px;

    &:hover {
        scale: 1.1;
    }

    @media (max-width: 768px) {
        width: 15px;
        height: 15px;
        margin-top: 8px;
  }
`;

export const Text = styled.p`
    font-size: 30px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
    
`;