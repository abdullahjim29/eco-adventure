import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const destinations = [
  { image: "https://i.ibb.co/6cfcckD7/bangladesh-4690975-1280.jpg", name: "Bangladesh"},
  { image: "https://i.ibb.co/hFjmWwRQ/tcanada.jpg", name: "Canada", },
  { image: "https://i.ibb.co/zW1chsTc/maldives-261506-1280.jpg", name: "Maldives" },
  {image: 'https://i.ibb.co/B5PgLsfn/bankok.jpg', name: 'Bangkok'},
  {image: 'https://i.ibb.co/CpPfgWN2/iceland-4436790-1280.jpg', name: 'Iceland'},
  {image: 'https://i.ibb.co/spfk4Y6y/brazil.jpg', name: 'Brazil'},
  {image: 'https://i.ibb.co/xSwgvNQg/turkey-5201495-1280.jpg', name: 'Turkey'},
  {image: 'https://i.ibb.co/jP6DKQXf/australia-1281935-1280.jpg', name: 'Australia'},
  {image: 'https://i.ibb.co/tppWvZ0B/New-Yourk.jpg', name: 'New York'},
  {image: 'https://i.ibb.co.com/ycVFvNGB/Italy.jpg', name: 'Italy'},
  {image: 'https://i.ibb.co.com/pBxSCBJN/Dubai.jpg', name: 'Dubai'},
  {image: 'https://i.ibb.co.com/d4FVQTWx/Peru.jpg', name: 'Peru'},
  {image: 'https://i.ibb.co.com/gbZ6WW93/Santorini-Greecejpg.jpg', name: 'Greece'},
  {image: 'https://i.ibb.co.com/p6xPKpcQ/japan.jpg', name: 'Japan'},
  {image: 'https://i.ibb.co.com/CK1M1GC2/eiffel-tower-3349075-1280.jpg', name: 'France'},
  {image: 'https://i.ibb.co.com/Df5yGRch/indonesia-1578647-1280.jpg', name: 'Indonesia'},
];

const DestinationCarousel = () => {
  return (
    <div className="hidden md:block">
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
        {destinations.map((destination, idx) => (
          <SwiperSlide key={idx} destination={destination} className="relative w-64 h-96">
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
    </div>
  );
};

export default DestinationCarousel;
