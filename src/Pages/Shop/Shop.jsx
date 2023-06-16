import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Shop = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  // const categories = ['Avenger', 'Star Wars', 'Transformer'];
  // const { category } = useParams();
  // const [tabIndex, setTabIndex] = useState(0);
  const avenger = toys.filter((item) => item.sub_category === "Avenger");
  const starWars = toys.filter((item) => item.sub_category === "Star Wars");
  const transformer = toys.filter(
    (item) => item.sub_category === "Transformer"
  );

  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold my-24 text-2xl">
        Shop By Category
      </h1>
      
      
        <Tabs>
         <div className="w-1/2 mx-auto">
         <TabList>
            <Tab>Avenger</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformer</Tab>
          </TabList>
         </div>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-flow-col-3 gap-6 mx-10">
            {avenger.map((toy) => (
              <ShopCard key={toy.id} toy={toy}></ShopCard>
            ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-flow-col-3 gap-6 mx-10">
            {starWars.map((toy) => (
              <ShopCard key={toy.id} toy={toy}></ShopCard>
            ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-flow-col-3 gap-6 mx-10">
            {transformer.map((toy) => (
              <ShopCard key={toy.id} toy={toy}></ShopCard>
            ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    
  );
};

export default Shop;
