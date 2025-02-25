import SimpleImageSlider from "react-simple-image-slider";
const BannerImageSlider = () => {

    const images = [
        { url: "https://i.ibb.co/nsC7HvGH/canoe-7101195-1280.jpg" },
        { url: "https://i.ibb.co/KzSLxB37/people-4817872-1280.jpg" },
        { url: "https://i.ibb.co/tP2w46YN/wildlife-1536582-1280.jpg" },
        { url: "https://i.ibb.co/21NyWvww/mountain-4335818-1280.jpg" },
      ];

    return (
        <>
      <div className="hidden lg:block">
      <SimpleImageSlider
        width={600}
        height={380}
        images={images}
        showNavs={true}
        navSize={25}
        autoPlay
      />
      </div>

      <div className="hidden md:block lg:hidden">
      <SimpleImageSlider
        width={700}
        height={380}
        images={images}
        showNavs={true}
        navSize={25}
        autoPlay
      />
      </div>

      <div className="block md:hidden">
      <SimpleImageSlider
        width={400}
        height={270}
        images={images}
        showNavs={true}
        navSize={25}
        autoPlay
      />
      </div>
    </>
    );
};

export default BannerImageSlider;