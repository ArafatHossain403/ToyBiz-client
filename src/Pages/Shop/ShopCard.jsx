import { Link } from "react-router-dom";

const ShopCard = ({ toy }) => {
  const { id, picture_url, name, price, rating } = toy;
  return (
    <div>  
      <div className="card w-96 glass">
        <figure>
          <img className="h-25"
            src={picture_url}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-blue-600">{price}</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/toy/${id}`}><button className="btn btn-primary">View Details</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
