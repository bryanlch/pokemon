import { useState } from "react";


const iconDefault = "https://cdn.pixabay.com/photo/2016/09/29/12/55/pokemon-1702772_640.png";

const Card = ({ title, icon = iconDefault, description = "", Key }) => {
     const [isHovered, setIsHovered] = useState(false);

     const handleMouseEnter = () => {
          setIsHovered(true);
     };

     const handleMouseLeave = () => {
          setIsHovered(false);
     };


     return (
          <div
               className={`bg-gradient-to-tr from-red-500 via-orange-400 via-20% to-blue-700 rounded-lg p-2 border-inherit
               w-80 md:w-full h-96 md:h-56 
               grid md:grid-cols-2 
               ${isHovered ? 'shadow-lg transform scale-105' : 'shadow-md'}`}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
          >
               <div className="text-center grid content-center h40">
                    <img src={icon} alt="Icon" className="w-40 md:w-32 h-40 md:h-32 mx-auto rounded-md" />
               </div>
               <div className="bg-white p-4 rounded-b-lg md:rounded-lg grid content-between">
                    <div className="grid items-center">
                         <div className="flex items-center">
                              <p className="text-xl font-bold text-blue-600">{title}</p>
                         </div>
                         <div className="flex items-center mt-2">
                              <p className="text-md font-medium text-[#6E77EE] break-words">{description}</p>
                         </div>
                    </div>
                    <div className="grid items-center mt-2 content-center">
                         <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-md">Ver detalle</button>
                    </div>
               </div>

          </div>

     );
}

export default Card;