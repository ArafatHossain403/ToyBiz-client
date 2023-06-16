
const Banner = () => {
  return (
    <div >
      <div className="carousel w-full mb-20">
        <div id="slide1" className="carousel-item relative w-full max-h-96">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/24/07/03/red-4573541_1280.jpg"
            className="w-full "
          />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full max-h-96">
          <img
            src="https://cdn.pixabay.com/photo/2019/08/25/06/43/captain-america-4428842_1280.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full max-h-96">
          <img
            src="https://cdn.pixabay.com/photo/2019/01/13/09/57/toy-3930018_1280.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full max-h-96">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/17/12/22/minion-hulk-4772859_1280.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
