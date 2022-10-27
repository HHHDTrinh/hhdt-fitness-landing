import { useMobile } from '../hooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Slogan from '../components/Slogan/Slogan';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

import FoodBanner from '../assets/images/banner.jpg';

const Home = () => {
    // const [windowSize, setWindowSize] = useState({
    //     width: undefined,
    //     height: undefined,
    // });
    // const [isMobile, setMobile] = useState(false);

    // useEffect(() => {
    //     const handleSize = () => {
    //         setWindowSize({
    //             width: window.innerWidth,
    //             heigth: window.innerHeight,
    //         });
    //     };
    //     window.addEventListener('resize', handleSize);
    //     handleSize();
    //     return () => window.removeEventListener('resize', handleSize);
    // }, []);

    // useEffect(() => {
    //     if (windowSize.width < 500) {
    //         setMobile(true);
    //     } else {
    //         setMobile(false);
    //     }
    // }, [windowSize]);

    const mobile = useMobile();

    console.log(mobile);

    return (
        <div
            className="overflow-y-auto overflow-x-hidden bg-cover bg-no-repeat font-sora text-wheat"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
                    ,url(${FoodBanner})`,
            }}
        >
            <Navbar isMobile={mobile} />
            <Slogan />
            <Content />
            <Footer />
        </div>
    );
};

export default Home;
