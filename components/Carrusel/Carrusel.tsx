'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import car1 from "../../public/car1.png"
import car2 from "../../public/car2.png"
import car3 from "../../public/car3.png"
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'
import { useState } from "react";

export default function ControlledCarousel() {
    const [index, setIndex] = useState<number>(0);
  
    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage img={car1}/>
        <Carousel.Caption>
        <p>Programa</p>
        <h2>MULTIMEDIAL, EDUCATIVO<br/> Y SOCIAL</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <ExampleCarouselImage img={car2} />
        <Carousel.Caption>
        <p>Radio en vivo</p>
        <h2>FM 97.9 Mhz<br/>Los Jueves de 20 a 21 hs</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={car3}/>
        <Carousel.Caption>
        <p>Impulsando la</p>
        <h2>REFLEXIÓN</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
