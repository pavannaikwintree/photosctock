import { useState } from "react";
import { dropArrow } from "../../assets/index";

function Questions({item}) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (

        <>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setShowAnswer(prev => !prev)} >
                    <span className="flex text-lg font-semibold text-black"> {item.question}</span>
                    <img src={dropArrow} alt="drop-icon" className={`w-5 h-5 text-gray-400 ${showAnswer ? "rotate-180" : null}`} />
                </button>

                <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${showAnswer ? "visible" : "hidden"}`}>
                    <p>{item.answer}</p>
                </div>
            </div>
        </>
    )

}


export default Questions;