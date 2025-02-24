const ImageSlider = () => {
  return (
    <div className="carousel w-full h-[400px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item w-full h-full relative">
        <img
          src="https://i.ibb.co/nsC7HvGH/canoe-7101195-1280.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center p-5">
          <a href="#slide4" className="btn btn-circle btn-xs">❮</a>
          <a href="#slide2" className="btn btn-circle btn-xs">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item w-full h-full relative">
        <img
          src="https://i.ibb.co/KzSLxB37/people-4817872-1280.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center p-5">
          <a href="#slide1" className="btn btn-circle btn-xs">❮</a>
          <a href="#slide3" className="btn btn-circle btn-xs">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item w-full h-full relative">
        <img
          src="https://i.ibb.co/tP2w46YN/wildlife-1536582-1280.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center p-5">
          <a href="#slide2" className="btn btn-circle btn-xs">❮</a>
          <a href="#slide4" className="btn btn-circle btn-xs">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item w-full h-full relative">
        <img
          src="https://i.ibb.co/21NyWvww/mountain-4335818-1280.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center p-5">
          <a href="#slide3" className="btn btn-circle btn-xs">❮</a>
          <a href="#slide1" className="btn btn-circle btn-xs">❯</a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
