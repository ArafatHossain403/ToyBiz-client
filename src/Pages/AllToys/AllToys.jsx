import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toybiz-server.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-blue-600 font-bold text-center my-5">All Toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th> Id</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th> Details</th>
            </tr>
          </thead>
          <tbody>
            
            {
                toys.map(toy => 
                    <AllToysRow key={toy.id} toy={toy}></AllToysRow>
                  )

            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
