import { useSpring, animated } from 'react-spring';
import { FaUser } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';

import CheckPointImage from '../../assets/images/checkpoint.svg';

const Content = () => {
    const customer = useSpring({
        customerValue: 500,
        from: { customerValue: 0 },
    });

    const exercises = useSpring({
        exercisesValue: 1300,
        from: { exercisesValue: 0 },
    });

    return (
        <section className="md:flex md:flex-row">
            <div
                className="text-bold ml-[70px] mr-[54px] flex items-center flex-col
            bg-gradient-to-b from-black/10 to-black/60 shadow-md rounded-[24px]
            md:w-[20%]
            "
            >
                <div className="mt-16 flex gap-8 items-start">
                    <FaUser size="22px" className="mt-[16px]" />
                    <div className="text-26">
                        <animated.div>
                            {customer.customerValue.to((val) =>
                                Math.floor(val),
                            )}
                        </animated.div>
                        <p className="text-13 md:text-16 font-semibold text-center mb-[36px]">
                            Customers
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-start mb-16 gap-8">
                        <GiGymBag size="22px" className="mt-[16px]" />
                        <div className="text-26">
                            <animated.div>
                                {exercises.exercisesValue.to((val) =>
                                    Math.floor(val),
                                )}
                            </animated.div>
                            <p className="text-13 md:text-16 font-semibold text-center">
                                Exercises
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[30px] font-semibold md:w-[30%] md:mt-10 md:text-16 md:ml-[30%]">
                <div className="check-content">
                    <img src={CheckPointImage} alt="check" />
                    <p
                        className="text-justify"
                        style={{
                            textShadow: '2px 2px 2px #000',
                        }}
                    >
                        Variety of exercises (body part, muscles, equipment,
                        ...)
                    </p>
                </div>
                <div className="check-content">
                    <img src={CheckPointImage} alt="check" />
                    <p
                        className="text-justify"
                        style={{
                            textShadow: '2px 2px 2px #000',
                        }}
                    >
                        Easy to follow and use
                    </p>
                </div>
                <div className="check-content">
                    <img src={CheckPointImage} alt="check" />
                    <p
                        className="text-justify"
                        style={{
                            textShadow: '2px 2px 2px #000',
                        }}
                    >
                        Exercises with individual exercise data and animated
                        illustrations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Content;
