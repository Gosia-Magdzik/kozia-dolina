import { styled } from "styled-components"
import { Carousel } from "react-bootstrap";

export const Welcome = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 15px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const Text = styled.div`
    font-size: 40px;
    flex-basis: 50%;
    height: auto;
    margin: 30px;
    text-align: center;
    display: flex;
    align-self: center; 

    @media (max-width: 768px) {
        font-size: 18px;
  }
`;

export const SlideShow = styled.div`
    align-items: center;
    flex-basis: 50%;
`;

export const StyledCarousel = styled(Carousel)`
        border-radius: 15px;
        overflow: hidden;

    .carousel-control-prev,
    .carousel-control-next {
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.5);
        top: 50%;
        transform: translateY(-50%);
        height: auto;
        width: auto;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        height: 100%;
        width: 100%;
    }
`;

export const Img = styled.img`
    border-radius: 15px;
    max-height: 500px;
    width: auto;
    max-width: 100%;
    height: auto;
    object-fit: contain;
`;

export const Info = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    //color: #3a9938;
    margin: 15px;

    @media (max-width: 768px) {
        font-size: 30px;
        //word-wrap: break-word;
        align-items: center;
        justify-content: center;
        display: flex;
  }
`;

export const ProductsGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    transition: 0.3s; 
`;

export const Product = styled.img`
    border-radius: 15px;
    margin: 5px;
    max-height: 300px;
    max-width: 100%;
    width: auto;
    height: auto;

        &:hover {
        scale: 1.05;
        filter: brightness(105%);
        };

    @media (max-width: 768px) {
        max-height: 200px;
    }
`;
