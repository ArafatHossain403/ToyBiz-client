

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
              <button className="btn btn-primary">View Details</button>
            </tr>
            
        </div>
    );
};

export default AllToysRow;