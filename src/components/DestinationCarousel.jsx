import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const destinations = [
  { image: "https://i.ibb.co.com/21NyWvww/mountain-4335818-1280.jpg", name: "Nepal", hotels: "2,464 Hotels Available" },
  { image: "https://i.ibb.co.com/Y4hs8shC/lighthouse-4744502-1280.jpg", name: "Australia", hotels: "36 Hotels Available" },
  { image: "https://i.ibb.co.com/TMKdKVpF/waterfall-384663-1280.jpg", name: "Brazil", hotels: "1,319 Hotels Available" },
  {image: 'https://i.ibb.co.com/tP2w46YN/wildlife-1536582-1280.jpg', name: 'Tanzania'},
  {image: 'https://i.ibb.co.com/YB3htpkT/ground-camping-8260968-1280.jpg', name: 'USA'},
  {image: 'https://i.ibb.co.com/SDp0Gn0N/canoe-2179196-1280.jpg', name: 'Peru'},
  {image: 'https://i.ibb.co.com/zW0bgBGw/desert-4428269-1280.jpg', name: 'Morocco'},
];

const DestinationCarousel = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center py-10 my-20">
      <h2 className="text-2xl md:text-4xl font-bold">Most Popular Destinations</h2>
      <p className="text-gray-500 text-center mb-10 mt-6 w-full md:w-7/12">
      Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations in Asia, Europe, America, Australia and more with ShareTrip.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000, // Auto-scroll every 2 seconds
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-5xl"
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index} destination={destination} className="relative w-64 h-96">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-[400px] h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold">{destination.name}</h3>
              <p>{destination.hotels}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationCarousel;
