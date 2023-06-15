import { Link } from "react-router-dom";


const AllToysRow = ({toy}) => {
    const {
        _id,
       
        name,
        seller_name,
        
        sub_category,
        price,
       
        available_quantity,
        
      } = toy;

    return (
        <div>
            <tr>
              <th>{_id}</th>
              <td>{seller_name}</td>
              <td>{name}</td>
              <td>{sub_category}</td>
              <td>{price}</td>
              <td>{available_quantity}</td>
              <td><Link to={`/allToy/${_id}`}><button className="btn btn-primary">View Details</button></Link></td>
              
            </tr>
            
            
        </div>
    );
};

export default AllToysRow;