import { Link } from "react-router-dom";


const AllToysRow = ({toy}) => {
    const {
        id,
       
        name,
        seller_name,
        
        sub_category,
        price,
       
        available_quantity,
        
      } = toy;

    return (
        <div>
            <tr>
              <th>{id}</th>
              <td>{seller_name}</td>
              <td>{name}</td>
              <td>{sub_category}</td>
              <td>{price}</td>
              <td>{available_quantity}</td>
              <td><button className="btn btn-primary"><Link> View Details</Link></button></td>
              
            </tr>
            
            
        </div>
    );
};

export default AllToysRow;