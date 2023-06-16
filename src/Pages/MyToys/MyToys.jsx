import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyToys = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToy/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  // const [myToys, setMyToys] = useState([]);
  // const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch("http://localhost:5000/allToy")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const toys = data.filter((toy) => toy.seller_email === user?.email);

  //       setMyToys(toys);
  //       console.log(myToys);
  //     });
  // }, []);

  return (
    <div>
      <Helmet>
        <title>ToyBiz | My Toys</title>
      </Helmet>
      <h2 className="text-center text-3xl text-red-900">My Toys</h2>

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
                return search.toLowerCase() === ""
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
                    <button  className="btn btn-primary btn-xs">
                      Update
                    </button>
                    <button onClick={() => handleDelete(toy)} className="btn btn-error btn-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
