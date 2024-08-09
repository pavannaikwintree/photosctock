import { heading } from "../../content/content";

function Hero() {

    return (

        <section className="w-full">
            <div
                className="w-full h-[520px] hero-bg-img text-color[#2b2c34] flex flex-col justify-center items-center overlay"
            >

                <div className="text-white mb-10">
                    <h1 className=" text-center xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold p-2 rounded-sm">
                        {heading.title}
                    </h1>

                    <h3 className="text-center md:text-lg text-xs max-w-sm md:max-w-2xl">
                        {heading.subtitle}
                    </h3>
                </div>
                <div className="w-full flex justify-center">

                    <form className="w-[90%] md:w-[70%]">

                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search images..."
                                className="w-full px-4 h-11 md:h-12 lg:h-14 rounded-l focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="text-[#fffffe] rounded-r px-2 md:px-5 py-0 md:py-1 font-bold bg-[#6246ea]"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section >

    )
}

export default Hero;