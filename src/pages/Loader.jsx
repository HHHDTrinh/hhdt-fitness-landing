import { InfinitySpin } from 'react-loader-spinner';
import { useMobile } from '../hooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
const Loader = () => {
    const mobile = useMobile();

    return (
        <>
            <Navbar isMobile={mobile} />
            <div className="flex items-center justify-center flex-col bg-wheat h-[89vh] border-t-4 border-[#ff7275]">
                <InfinitySpin color="#ff7275" />
                <p className="text-24 text-center md:text-32">
                    I still have no idea to do this component :)
                </p>
            </div>
        </>
    );
};
export default Loader;
