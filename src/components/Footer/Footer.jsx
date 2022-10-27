import GymImage from '../../assets/images/gym.png';

const Footer = () => {
    return (
        <div className="flex items-center gap-3 justify-center mt-0.5 md:mt-[6.8rem] bg-[wheat] w-full border-t-2 border-[#ff7275]">
            <img src={GymImage} alt="gym-icon" />
            <p className="text-14 text-[#ff7275] text-center md:text-right md:text-20">
                Made with React & Tailwind CSS by HHDT
            </p>
        </div>
    );
};

export default Footer;
