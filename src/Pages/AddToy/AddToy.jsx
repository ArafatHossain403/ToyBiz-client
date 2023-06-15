import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const picUrl = form.picUrl.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;

    const addToy = {
      picture_url: picUrl,
      name: toyName,
      seller_name: sellerName,
      seller_email: email,
      sub_category: subCategory,
      price: price,
      rating: rating,
      available_quantity: quantity,
      description: detail,
    };

    console.log(addToy);

    fetch("http://localhost:5000/allToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>ToyBiz | AddToy</title>
      </Helmet>
      <h1 className="text-3xl text-center text-teal-600 font-bold my-9">
        Add Your Toy
      </h1>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture of the Toy URL</span>
            </label>
            <input
              type="text"
              name="picUrl"
              placeholder="toy pic URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="toy name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="seller name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text"> Seller Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              placeholder="sub category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> $ Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="detail"
              placeholder="description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-accent" type="submit" value="Add Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
