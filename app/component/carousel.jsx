const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets/carousel", false, /\.(png|jpe?g|svg)$/)
);

import Image from "next/image";

const carousel = () => {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-item relative w-full flex justify-center bg-black"
          id={`slide${index}`}
        >
          <Image src={image} className="h-screen" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? images.length - 1 : index - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === images.length - 1 ? 0 : index + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default carousel;
