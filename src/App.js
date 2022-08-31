import './App.css';
import React from 'react';
import { useState } from 'react';
import html2canvas from 'html2canvas';
function App() {
  // Linea 1 variable, setLinea1 va a modificar variable
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">fire</option>
        <option value="futurama">futurama</option>
        <option value="history">history</option>
        <option value="matrix">matrix</option>
      </select><br />
      
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br />
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <img src={"/img/"+ imagen +".jpg"} alt='' />
        <span>{linea2}</span><br />
      </div>
    </div>
  );
}

export default App;
