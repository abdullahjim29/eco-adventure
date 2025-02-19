import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-10 space-y-6 text-center md:text-center lg:text-left">
        <div className="space-y-5">
          <h1 className="w-full lg:w-10/12 text-3xl md:text-5xl lg:text-6xl font-semibold leading-12 md:leading-16 lg:leading-20 md:mx-auto lg:mx-0">
            Adventure Sustain Explore Nature Travel{" "}
            <span className="text-green-900">Green</span>
          </h1>
          <p className="w-full md:w-10/12 lg:w-10/12 md:mx-auto lg:mx-0">
            Explore thrilling eco-adventures, from mountain treks to ocean
            dives. Travel responsibly, book easily, and experience nature
            sustainably!
          </p>
          <div className="space-x-5 space-y-2 md:space-y-0">
            <button className="btn bg-[#583CEA] text-white px-8 text-lg rounded-lg py-6 hover:bg-white hover:border border-[#583CEA] hover:text-[#583CEA]">
              Explore More
            </button>

            <Link
              target="_blank"
              to="https://youtu.be/Gni1C1n-lLI?si=alyZI_xuYx1neysl"
            >
              <button className="btn border px-10 text-lg rounded-lg py-6 border-[#583CEA] text-[#583CEA] hover:bg-[#583CEA] hover:text-white">
                Watch Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <ImageSlider/>
        </div>
      </div>

      {/* image slider */}
      
    </div>
  );
};

export default Banner;
