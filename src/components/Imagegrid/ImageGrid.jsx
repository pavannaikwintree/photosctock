import { ImageRender } from "./ImageRender"
import { imagesData } from "../../content/content"

export const ImageGrid = () => {
    
    return (
        <div className=" h-[3000px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 overflow-y-scroll">
            {imagesData.map((img, index) => {
                return <ImageRender image={img} key={index}/>
            })}
        </div>
    )
}