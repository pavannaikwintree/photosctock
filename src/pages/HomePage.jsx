import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import { ImageGrid } from "../components/Imagegrid/ImageGrid";
import { Link } from "react-router-dom";


const HomePage = () => {

    return (
        <>
            <Hero />
            <div className=" h-[100px] w-screen bg-[#FAF6E7] p-0 banner-promo-bg flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-4xl justify-center items-center gap-3 z-10">
                    <p className="text-gray-700 font-semibold">Unlock a World of Premium Images</p>
                    <Link to={'/account/register'}>
                        <button className="text-[#fffffe] rounded px-2 md:px-5 md:py-1 font-bold bg-black">Sign Up Now</button>
                    </Link>
                </div>
            </div>
            <Categories />
            <ImageGrid />

        </>
    )

}


export default HomePage;