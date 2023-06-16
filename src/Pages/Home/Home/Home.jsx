
import Policy from '../../Shared/Extra/Policy';
import Shop from '../../Shop/Shop';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Policy></Policy>
            <Shop></Shop>
            <div>
                <h1  className='text-center font-bold text-4xl my-24 text-blue-600'>Gallery</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-flow-col-4 gap-6 mx-5'>
                <img src="https://cdn.marvel.com/content/1x/m80_toyv_0001_spider-man.jpg" alt="" />
                <img src="https://s.yimg.com/ny/api/res/1.2/APKR_eJYulTcJjz2QcZlPw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-02/fed6dc10-ac92-11ed-bff7-78e474a02b1a" alt="" />
                <img src="https://www.lifesavvy.com/p/uploads/2022/08/5a3f7b09.jpg?width=720&height=450&fit=crop&trim=2,2,2,2&fit=crop" alt="" />
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/FG/EH/JU/14717899/avengers-4-toy-set-5in1-1000x1000.jpeg" alt="" />
                </div>
            </div>
            <div>
            <h1  className='text-center font-bold text-4xl my-24 text-blue-600 '>Our Sponsers</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-flow-col-4 gap-6  w-3/4 mx-auto'>
                <img src="https://www.pngitem.com/pimgs/m/4-49516_red-bull-png-red-bull-sponsor-png-transparent.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdOxCroezuMLwECISPoOapZ1EYP8q45FJgEZvpWyATQcmuznRfsZ_gG_gaVUgAUtL9pU&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBAwDI-brfJ0alCQwQhFzEJ9fI6BSds09ygPC8uD6WQbElgCFA8zpDTtDAlCsR-TQYg4&usqp=CAU" alt="" />
                <img src="https://wp-cdn.milocloud.com/aids-life-cycle-wp/wp-content/uploads/20200529094309/FedEx-Logo-2.png" alt="" />
                </div>
                


            </div>
            
        </div>
    );
};

export default Home;