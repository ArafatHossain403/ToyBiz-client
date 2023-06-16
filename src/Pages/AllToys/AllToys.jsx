import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllToys = () => {
  // const {
  //   id
  //  } = toyDetails;
  const [search, setSearch] = useState("");
  console.log(search);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>ToyBiz | All Toys</title>
      </Helmet>
      <h1 className="text-3xl text-blue-600 font-bold text-center my-5">
        All Toys
      </h1>
      <div className="overflow-x-auto">
        <form onChange={(e) => setSearch(e.target.value)}>
          <div className="w-1/2 mx-auto my-8">
          <input
            type="text"
            placeholder="Search with toy name "
            className="input input-bordered input-success w-full max-w-xs"
          />
          </div>
        </form>

        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={toy.picture_url} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.name}</div>
                        {/* <div className="text-sm opacity-50">
                        {classes.instructor}
                      </div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {toy.seller_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {toy.seller_email}
                    </span>
                  </td>
                  <td>{toy.sub_category}</td>
                  <td>{toy.price}</td>
                  <td className="text-center">{toy.available_quantity}</td>

                  <td>
                    <Link to={`/allToy/${toy._id}`}>
                      <button className="btn btn-primary btn-xs">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
