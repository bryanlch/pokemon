import { useEffect } from "react";
import { useUserInfoStore, useArrayStore } from "../stores/store";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Card from "../components/card/Card";

const getDataArray = (apiUrl) => {
     return fetch(apiUrl)
          .then(response => {
               if (!response.ok) {
                    throw new Error(`Error de red: ${response.status}`);
               }
               return response.json();
          })
          .then(data => {
               return data
          })
          .catch(error => {
               console.error('Hubo un error:', error);
          });
}

export default function ListPage() {
     const userInfoStore = useUserInfoStore();
     const [items, setItems] = useState([]);

     useEffect(() => {
          const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12';
          getDataArray(apiUrl)
               .then((data) => {
                    const array = data?.results.map((item, index) => {
                         return {
                              id: index + 1,
                              name: item.name
                         }
                    })
                    setItems(array);
               })
               .catch((error) => {
                    console.error('Hubo un error:', error);
               });
     }, []);

     return (
          <>
               <section className="w-full lg:h-screen flex justify-center md:items-center">
                    <div className="container bg-white shadow rounded-md p-8 mx-auto">
                         <div className="my-6 px-4 font-semibold ">
                              <h2 className="text-2xl text-blue-600 ">
                                   Bienvenido {userInfoStore?.userInfo?.name}
                              </h2>
                         </div>
                         <div className=" rounded-md my-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                   {items?.map((item) => (
                                        <Link to={`/detail/${item.name}`} key={item.id} className="p-2 flex items-center justify-center rounded-md">
                                             <Card title={item.name} />
                                        </Link>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}