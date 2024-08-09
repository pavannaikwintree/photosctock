import { ImageRender } from "./ImageRender"
import { imagesData } from "../../content/content"

export const ImageGrid = () => {

    return (
      <div className="mx-auto px-1 h-[3000px] relative overflow-y-auto scrollbar-hide scrollbar-show-on-hover scrollbar-thumb-hover">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 pb-4">
          {imagesData.map((img, index) => {
            return <ImageRender image={img} key={index} />;
          })}
        </div>
      </div>
    );
}