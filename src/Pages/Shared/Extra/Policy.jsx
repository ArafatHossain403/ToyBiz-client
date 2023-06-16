import { useEffect, useState } from "react";


const Policy = () => {

    const [policy, setPolicy] = useState([]);
  useEffect(() => {
    fetch("policy.json")
      .then((res) => res.json())
      .then((data) => setPolicy(data));
  }, []);
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-flow-col-4 gap-6 mx-4 ">
            {policy.map((item) => (
            //   <ShopCard key={item.id} item={item}></ShopCard>
              <div key={item.id} className="card  card-side bg-base-100 shadow-xl">
  <figure><img src={item.image}/></figure>
  <div className="card-body">
    <h2 className="card-title">{item.header}</h2>
    <p>{item.para}</p>
    
  </div>
</div>
            ))}
            </div>
        </div>
    );
};

export default Policy;