import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ShopCard = ({ toy }) => {
  const { _id, picture_url, name, price, rating } = toy;

  useEffect(()=> {
    Aos.init();
  }, []);

  
  return (
    <div data-aos="fade-down" >  
      <div className="card w-96 glass">
        <figure>
          <img className="h-[200px]"
            src={picture_url}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-blue-600">{price}</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/allToy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
