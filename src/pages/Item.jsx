import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ItemDetail() {
     const { name } = useParams();
     const [pokemonDetails, setPokemonDetails] = useState(null);

     useEffect(() => {
          const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

          fetch(apiUrl)
               .then((response) => {
                    if (!response.ok) {
                         throw new Error(`Error de red: ${response.status}`);
                    }
                    return response.json();
               })
               .then((data) => {
                    setPokemonDetails(data);
               })
               .catch((error) => {
                    console.error('Hubo un error:', error);
               });
     }, [name]);

     if (!pokemonDetails) {
          return <div>Cargando...</div>;
     }

     return (
          <section className="w-full md:h-screen flex justify-center md:items-center">
               <div className="bg-white  grid  h-90 md:w-1/3 shadow-2xl rounded-md p-8 ">
                    <div className='p-6 grid grid-cols-4'>
                         <Link to={`/list`}>
                              <span className='text-2xl  font-bold text-blue-600 hover:bg-slate-100 p-6 rounded-md'>{"<"}</span>
                         </Link>
                         <div className='col-span-3'>
                              <h2 className='text-2xl font-bold text-blue-600'>Detalles de {name}</h2>

                         </div>
                    </div>
                    <div className='grid grid-cols-3 gap-2 mt-6'>
                         <div className='col-span-2'>
                              <div className='w-full'>
                                   <p className='text-xl text-blue-600'>
                                        Habilidades:
                                   </p>
                                   {
                                        pokemonDetails?.abilities.map(item => (
                                             <>
                                                  <div className='m-3 bg-slate-100 p-3 rounded-md'>
                                                       <p className='text-xl text-blue-600'> {item.ability?.name}</p>
                                                  </div>
                                             </>
                                        ))
                                   }
                              </div>
                              <div className='w-full'>
                                   <p className='text-xl text-blue-600'>
                                        Stats:
                                   </p>
                                   {
                                        pokemonDetails?.stats.map(item => (
                                             <>
                                                  <div className='m-3 bg-slate-100 p-3 rounded-md flex justify-between '>
                                                       <p className='text-xl text-blue-600'> {item?.stat?.name}</p>
                                                       <p className='text-xl text-blue-600'> {item?.base_stat}</p>

                                                  </div>
                                             </>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='bg-slate-100 rounded-md p-2 text-xl text-blue-600'>

                              <div className='w-full'>
                                   <p>Peso: {pokemonDetails.weight}</p>
                                   <p>Altura: {pokemonDetails.height}</p>
                              </div>
                              <div className='w-full mt-6'>
                                   <p className='text-xl text-blue-600'>
                                        Tipo:
                                   </p>
                                   <ol>
                                        {
                                             pokemonDetails?.types.map(item => (
                                                  <>
                                                       <li className='bg-slate-100 p-2 rounded-md'>
                                                            <p className='text-xl text-blue-600'>- {item.type?.name}</p>
                                                       </li>
                                                  </>
                                             ))
                                        }
                                   </ol>

                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}