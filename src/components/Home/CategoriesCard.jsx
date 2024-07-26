
function CategoryCard({category}) {

    return (
        <div className="h-[220px] w-[248px] mt-8 relative overflow-hidden rounded-lg group cursor-pointer">
            <img src={category.img} alt="nature-cat" className="object-cover h-full w-full rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 rounded-lg"></div>
            <div className="absolute inset-5 text-white z-20">
                <h3 className="font-semibold text-xl">{category.title}</h3>
                <p className="text-white text-sm font-sm hidden group-hover:block">{category.subtitle}</p>
            </div>
        </div>
    )
}

export default CategoryCard;