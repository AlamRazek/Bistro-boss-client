import { Parallax } from "react-parallax";

const Cover = ({ image, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Savor the Flavor: Indulge in Exquisite Dining Experiences at
              Bistro-Boss. Our culinary delights await you, from tantalizing
              appetizers to delectable main courses and divine desserts. Come
              discover a world of taste and ambiance that will leave your senses
              craving more. Welcome to a journey of culinary excellence!
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
