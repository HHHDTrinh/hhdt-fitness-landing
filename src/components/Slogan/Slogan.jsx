const Slogan = () => {
    return (
        <section className="text-36 mt-8 mb-10 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p className="">
                    Sweat, Smile <br />
                </p>
                <p className="">
                    {' '}
                    And <span className="text-[#ff7275]">Repeat</span>
                </p>
                <a
                    href="https://hhdt-react-fitness.netlify.app/"
                    className="no-underline"
                >
                    <button
                        className="text-20 px-12 py-[8px] font-bold mt-[12px]
                 bg-[#ff7275] rounded-[12px] hover:bg-[wheat] hover:text-[#ff7275]
                 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]"
                    >
                        Check our website
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Slogan;
