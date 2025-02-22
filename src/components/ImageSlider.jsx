const ImageSlider = () => {
  return (
    <div className="carousel w-full overflow-y-hidden">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/nsC7HvGH/canoe-7101195-1280.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle btn-xs">❮</a>
      <a href="#slide2" className="btn btn-circle btn-xs">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/KzSLxB37/people-4817872-1280.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle btn-xs">❮</a>
      <a href="#slide3" className="btn btn-circle btn-xs">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/tP2w46YN/wildlife-1536582-1280.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle btn-xs">❮</a>
      <a href="#slide4" className="btn btn-circle btn-xs">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/21NyWvww/mountain-4335818-1280.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle btn-xs">❮</a>
      <a href="#slide1" className="btn btn-circle btn-xs">❯</a>
    </div>
  </div>
  
</div>
  );
};

export default ImageSlider;
