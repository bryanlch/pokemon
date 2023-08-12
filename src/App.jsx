import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/Welcome';
import ListPage from './pages/List';
import ItemDetail from './pages/Item';
import { useArrayStore } from './stores/store';

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

function App() {
  const arrayStore = useArrayStore();

  useEffect(() => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15';
    getDataArray(apiUrl)
      .then((data) => {
        console.log("🚀 ~ file: App.jsx:33 ~ .then ~ data?.results:", data?.results)
        arrayStore.addArrayItems(data?.results)
      })
      .catch((error) => {
        console.error('Hubo un error:', error);
      });
  }, []);

  document.body.addEventListener("pointermove", (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/list' element={<ListPage />} />
          <Route path='/detail/:name' element={<ItemDetail />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
