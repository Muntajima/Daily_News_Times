import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto PT-Sans my-24'>
            <Navbar/>
            <Outlet/>
            <Footer/>
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;