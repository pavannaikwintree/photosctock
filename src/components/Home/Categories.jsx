import CategoryCard from "./CategoriesCard";
import { categories } from "../../content/content";

function Categories() {

    return (
        <div className="py-5 md:py-10 px-5 max-w-[90%] mx-auto">
            <h2 className="text-gray-800 font-semibold text-3xl">Explore Categories </h2>

            <div className="flex gap-4 flex-wrap justify-center">
                {categories.map((cat, index)=>{

                return <CategoryCard category={cat} key={index}/>
                })}
            </div>
        </div>
    )

}

export default Categories;