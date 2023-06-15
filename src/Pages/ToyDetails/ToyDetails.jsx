import { Helmet } from "react-helmet-async";


const ToyDetails = ({toyDetails}) => {
  
  const {
    picture_url,
    name,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    description,
  } = toyDetails;
  console.log(toyDetails)

  return (
    <div className="my-10">
      <Helmet>
            <title>ToyBiz | ToyDetails</title>
        
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture_url}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> <span>Toy Name:</span>{name}</h2>
          <p><span className="text-bold text-red-700">Seller Name: </span>{seller_name}</p>
          <p><span className="text-bold text-red-700">Seller Email: </span> {seller_email}</p>
          <p><span className="text-bold text-red-700">Caterory: </span>{sub_category}</p>
          <p><span className="text-bold text-red-700">Price: </span>{price}</p>
          <p><span className="text-bold text-red-700">Rating: </span>{rating}</p>
          <p><span className="text-bold text-red-700">Available: </span>{available_quantity}</p>
          <p><span className="text-bold text-red-700">Details: </span>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
