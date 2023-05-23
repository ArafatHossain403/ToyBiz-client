
import Shop from '../../Shop/Shop';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Shop></Shop>
            <div>
                <h1  className='text-center font-bold text-4xl my-10'>Gallery</h1>
                <img src="https://cdn.marvel.com/content/1x/m80_toyv_0001_spider-man.jpg" alt="" />
                <img src="https://s.yimg.com/ny/api/res/1.2/APKR_eJYulTcJjz2QcZlPw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-02/fed6dc10-ac92-11ed-bff7-78e474a02b1a" alt="" />
                <img src="https://www.lifesavvy.com/p/uploads/2022/08/5a3f7b09.jpg?width=720&height=450&fit=crop&trim=2,2,2,2&fit=crop" alt="" />
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/FG/EH/JU/14717899/avengers-4-toy-set-5in1-1000x1000.jpeg" alt="" />
            </div>
            
        </div>
    );
};

export default Home;