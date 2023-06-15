
import { useLoaderData} from 'react-router-dom';
import Navigation from '../Pages/Shared/Header/Navigation';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';
import Footer from '../Pages/Shared/Footer/Footer';

const ToyLayout = () => {
    const toyDetails = useLoaderData();


    
    return (
        <div>
             <Navigation></Navigation>
             
             
             <ToyDetails key={toyDetails._id}
             toyDetails={toyDetails}
             >
                
             </ToyDetails>
             <Footer></Footer>
             </div>
             )
};

export default ToyLayout;