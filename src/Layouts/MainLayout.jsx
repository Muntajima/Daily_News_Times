import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto PT-Sans my-24'>
            <Navbar/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;