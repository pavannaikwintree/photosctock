import { premium } from "../../assets/index"

export const ImageRender = ({ image }) => {

    return (
        <div className="grid gap-1 place-items-center cursor-pointer relative">
            <div className= {`absolute top-4 left-2 ${image.isPremium ? "visible" : "invisible" } z-10`}>
                <img src={premium} alt="premium-icon" width={"30px"} height={"30px"} />
            </div>
            <img className="h-72 w-full object-cover rounded-lg" src={image.url} alt="image" />
        </div>
    )
}