import { useState, useEffect } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const images = ["/1od3dole.png", "/2od3dole.png", "/3od3dole.png"];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAutoPlay = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-main">
        <button className="arrow-button carousel-buttons" onClick={handleLeft}>
          <MdArrowBack size={24} />
        </button>
        <img src={images[currentIndex]} alt="carousel" />
        <button className="arrow-button carousel-buttons" onClick={handleRight}>
          <MdArrowForward size={24} />
        </button>
      </div>
      <div className="carousel-autoplay">
        <button onClick={handleAutoPlay}>
          {isRunning ? "Stop" : "Start"} Auto
        </button>
      </div>
    </div>
  );
};

const PopustiSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="popusti">
      <div className="da-obojim-u-crno">
        <h2>Popusti za sve!</h2>
      </div>
      {!isMobile ? (
        <div className="popusti-slike">
          <img src="/1od3dole.png" alt="skolarci" />
          <img src="/2od3dole.png" alt="penzioneri" />
          <img src="/3od3dole.png" alt="studenti" />
        </div>
      ) : (
        <ImageCarousel />
      )}
    </div>
  );
};

export default PopustiSection;
