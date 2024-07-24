import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import { ImageGrid } from "../components/Imagegrid/ImageGrid";


const HomePage = () => {

    return (
        <>
            <Hero />
            {/* Image Grid */}
            <div className="h-[86px] p-0 banner-promo-bg flex flex-col justify-center">
                <div className="flex justify-center items-center gap-3">
                    <p className="text-gray-700 font-semibold">Unlock a World of Premium Images</p>
                    <button className="text-[#fffffe] rounded px-2 md:px-5 md:py-1 font-bold bg-black">Sign Up Now</button>
                </div>
            </div>

            <Categories />

            <div className="mx-auto my-3 px-1">
                <ImageGrid />
            </div>
        </>
    )

}


export default HomePage;