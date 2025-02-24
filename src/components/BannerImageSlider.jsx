import SimpleImageSlider from "react-simple-image-slider";
const BannerImageSlider = () => {

    const images = [
        { url: "https://i.ibb.co/nsC7HvGH/canoe-7101195-1280.jpg" },
        { url: "https://i.ibb.co/KzSLxB37/people-4817872-1280.jpg" },
        { url: "https://i.ibb.co/tP2w46YN/wildlife-1536582-1280.jpg" },
        { url: "https://i.ibb.co/21NyWvww/mountain-4335818-1280.jpg" },
      ];

    return (
        <div>
      <SimpleImageSlider
        width={600}
        height={360}
        images={images}
        showNavs={true}
        navSize={25}
        autoPlay
      />
    </div>
    );
};

export default BannerImageSlider;