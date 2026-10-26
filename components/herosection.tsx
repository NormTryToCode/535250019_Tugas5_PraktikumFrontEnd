"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = () => {
  const slides: Slide[] = [
    {
      title: "Azusagawa Sakuta",
      subtitle: "Main character from Rascal series",
      imageUrl: "/images/banner_01.jpg",
    },
    {
      title: "Okabe Rintarou",
      subtitle: "Main character from Steins;Gate",
      imageUrl: "/images/banner_02.jpg",
    },
    {
      title: "Rimuru Tempest",
      subtitle: "Main character from That Time I Got Reincarnated As a Slime",
      imageUrl: "/images/banner_03.jpg",
    }
  ]

  return (
    <Carousel fade interval={4000} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
            }}>
          </div>
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">{slide.title}</h1>
            <p className="lead">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
      )}
    </Carousel>
  )
}

export default HeroSection;

