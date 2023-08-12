import { useUserInfoStore } from "../stores/store";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
     const userInfoStore = useUserInfoStore();
     return (
          <>
               <section className="  w-full h-screen  flex justify-center items-center">
                    <div className="bg-white  grid  h-90 md:w-1/3 shadow-2xl rounded-md p-8 ">
                         <div className="my-4">
                              <h1 className="text-4xl font-semibold text-center ">
                                   Poken Interaction
                              </h1>
                         </div>
                         <div className="grid my-6 md:px-8">
                              <label htmlFor="name" className="text-xl font-medium"> Ingresa un nombre</label>
                              <input type="text" placeholder="Tu nombre"
                                   className="rounded-md py-3 px-3 my-4 font-medium text-xl  hover:bg-slate-200 focus:border-slate-200"
                                   onChange={(e) =>
                                        userInfoStore.setUserInfo(e.target.value)
                                   }
                              />
                              <div className="flex justify-center mt-4">
                                   <Link to={`/list`}>
                                        <button
                                             className=" font-medium shadow-xl px-6 py-3 rounded-md text-xl bg-slate-100 hover:bg-slate-200">
                                             Siguiente
                                        </button>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}