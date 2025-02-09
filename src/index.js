

import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

import "./index.css";
import { WEBSITE_NAME , WEBSITE_TITLE , HEADER_IMAGES ,WEB_DESCRIPTIONS ,WEB_BUTTON2 , WEB_BUTTON1,CONTAIN_IMAGE} from "./config";


function ConFigs() {
    return (
        <div>
            <p className="text-4xl font-bold text-center mt-2">{WEBSITE_NAME}</p>
            <p className="text-center mt-2 "><span className="text-3xl font-bold">{WEBSITE_TITLE} </span>
                <span className="text-3xl font-bold text-[rgb(255,0,170)]"></span></p>

            <div className="flex justify-center items-center mt-4">
                <input type="text" placeholder="Sreach Cake"
                    className="w-300 border border-gray-400 rounded-md w-[550px] p-1 text-lg pl-2" ></input>
            </div>

            <div className="flex justify-evenly">
                <div>
                    <img src={HEADER_IMAGES}
                        className="mt-4 pl-10 flex justify-center h-[230px] w-[1600px] "></img>
                </div>
                <div className=" pl-10 text-16sm mt-4">
                    <p><span className="font-bold text-xl leading-loose">A sweet shop</span>{WEB_DESCRIPTIONS} </p>

                    <div className="flex  justify-center pr-10 mt-8">
                        <button className="bg-[rgb(255,128,213)] text-lg pl-4 pr-4 pt-2 pb-2 rounded-md mr-10" >{WEB_BUTTON1}</button>
                        <button className="bg-[rgb(255,128,213)] text-lg pl-4 pr-4 pt-2 pb-2 rounded-md mr-10 ">{WEB_BUTTON2}</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly mr-2" >
                <div>
                    <img src={CONTAIN_IMAGE}
                        className="mt-6 pr-1  flex justify-center w-[700px] h-[400px]" />
                </div>
                
                <div>
                    <p className="mt-6">
                     <span className="font-bold text-lg">Traditional Sweet Shop : </span>These shops sell classic sweets like toffees, fudge, hard candies,<br></br> and chocolates, often in glass jars.<br></br><br></br>
                     <span className="font-bold text-lg">Modern Confectionery Stores :</span>They offer a mix of traditional sweets and contemporary candies,<br></br> including imported chocolates and gourmet treats.<br></br><br></br>
                     <span className="font-bold text-lg">Specialty Sweet Shop :</span> Some focus on specific types of sweets, such as organic, sugar-free,<br></br> or handmade chocolates.<br></br><br></br>
                     <span className="font-bold text-lg">Bakery & Sweet Shops : </span>– Common in many cultures, these stores sell both baked goods like cakes <br></br>and pastries alongside sweets.<br></br><br></br>
                     <span className="font-bold text-lg">Ethnic Sweet Shops :</span> Many cultures have their own versions, such as Mithai shops in India, which sell <br></br>traditional sweets like laddoos, barfis, and jalebis.<br></br>
                    </p>
                </div>
                
            </div>
           
            <p className="text-center text-xl mt-4">Contact us : 92481102570</p>
            <p className="text-center font-bold text-2xl mt-2">T H A N K - Y O U U ..!!!🤩</p>
        </div>
    );
}

root.render(
    <>
    <ConFigs/>
    </>

)