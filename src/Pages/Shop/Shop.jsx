import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-blue-500 text-bold my-5">
        Shop By Category
      </h1>
      <div className=" text-center mx-auto my-10 ">
        <button className="btn btn-primary">Avenger</button>
        <button className="btn btn-secondary">Star Wars</button>
        <button className="btn btn-accent">Transformer</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col-3 gap-6">
        {toys.map((toy) => (
          <ShopCard key={toy.id} toy={toy}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
