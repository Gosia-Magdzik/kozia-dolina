import { Welcome, Wrapper, Text, SlideShow, StyledCarousel, Img, Info, ProductsGallery, Product } from "./styled";
import { Carousel } from "react-bootstrap";
import welcome from "./Images/Witamy.png";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpg";
import slide3 from "./Images/slide3.jpg";
import slide4 from "./Images/slide4.jpg";
import smoked from "./Images/smoked.jpg";
import cheese from "./Images/cheese.jpg";
import milk from "./Images/milk.jpg";

export const Home = () => {
    return (
        <>
            <Welcome src={welcome}/>
            <Wrapper>
                <Text>Kozia Dolina to ciche miejsce pełne rogatych przyjaznych kóz, z których mleka robimy najlepsze sery</Text>
                <SlideShow>
                    <StyledCarousel>
                        <Carousel.Item interval={2000}>
                            <Img
                            className="d-block w-100"
                            src= {slide1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Img
                            className="d-block w-100"
                            src= {slide2}
                            alt="second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Img
                            className="d-block w-100"
                            src= {slide3}
                            alt="third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Img
                            className="d-block w-100"
                            src= {slide4}
                            alt="fourth slide"
                            />
                        </Carousel.Item>
                    </StyledCarousel>
                </SlideShow>
            </Wrapper>
            <hr/>
            <Info>Zapraszamy do skosztowania naszych serów</Info>
            <ProductsGallery>
                <Product src={cheese}/>
                <Product src={smoked}/>
                <Product src={milk}/>
            </ProductsGallery>
        </>
    );
}