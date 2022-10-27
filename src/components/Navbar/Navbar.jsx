import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import GymImage from '../../assets/images/gym.png';

const Navbar = ({ isMobile }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="nav-bar">
            <nav className="flex items-center justify-between p-8">
                <Link
                    to="/"
                    className="flex items-center no-underline cursor-pointer"
                >
                    <div className="text-20 font-bold mr-3">FITNESS</div>
                    <img src={GymImage} />
                </Link>
                <ul className="text-16 font-semibold md:flex md:gap-10">
                    {openMenu && isMobile ? (
                        <MdOutlineClose
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : !openMenu && isMobile ? (
                        <HiOutlineMenu
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : (
                        <>
                            <li className="navbar-large">
                                <Link
                                    to="/loader"
                                    style={{
                                        cursor: 'not-allowed',
                                    }}
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="navbar-large">
                                <Link
                                    to="/loader"
                                    style={{
                                        cursor: 'not-allowed',
                                    }}
                                >
                                    Menu
                                </Link>
                            </li>
                            <li className="navbar-large">
                                <Link
                                    to="/loader"
                                    style={{
                                        cursor: 'not-allowed',
                                    }}
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li className="navbar-large ml-28">
                                <Link
                                    to="/loader"
                                    style={{
                                        cursor: 'not-allowed',
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </>
                    )}
                    {openMenu && (
                        // <div className="bg-white p-8 text-center text-black text-13 absolute right-8 z-10">
                        //     <li className="cursor-pointer">Features</li>
                        //     <li className="cursor-pointer">Menu</li>
                        //     <li className="cursor-pointer">Our Story</li>
                        //     <li className="cursor-pointer">Contact</li>
                        // </div>
                        <></>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
