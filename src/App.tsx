import { useState } from 'react'
import ImagenLogo from './assets/ImagenLogo.png'
import KorvosCar from './assets/KorvosCar.png'
import Arrow from './assets/Arrow.gif'
import Sold from './assets/Sold.png'
import Bichos from './assets/Bichos.png'
import PubliFondo from './assets/PubliFondo.png'
import Flames from './assets/Flames.gif'
import GiraCoin from './assets/GiraCoin.gif'
import './App.css'

const getLesson = async () => {
  try {
    const res = await fetch('https://lessons-api.vercel.app/');
    const data = await res.json();
    return data.wisdom;
  } catch (error) {
    return "ERROR DE CONEXIÓN";
  }
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function App() {
  const [texto, setTexto] = useState("Click Here To Learn your lesson");

  const numeritos: number[] = [30,30,30,30,100,100,100,100,200,200]
  const manejarRuleta = async () => {
    for (let i = 0; i < 11; i++) {
      const frase = await getLesson();
      setTexto(frase);
      await wait(numeritos.at(i)!);
    }

    const final = await getLesson();
    setTexto(final);
  };

  return (
    <div className='mainContainer'>
      <div className='titulo'>
        <img src={ImagenLogo} className="logo-img" alt="Logo" />
      </div>
      <div className='warning'></div>
      <div className='publiYruleta'>
        <div className='publiIzq'>
          <img src={KorvosCar} className="img-lateral" alt="Car" />
          <img src={Arrow} className="flecha-abajo" alt="Flecha" />
          <img src={Sold} className="img-lateral" alt="Sold" />
        </div>

        <div className='ruleta'>
          <button className='boton-simple' onClick={manejarRuleta}>
            {texto}
          </button>
        </div>

        <div className='publiDcha'>
          <img src={Bichos} className="bichos-peque" alt="Bichos" />
          <p className="credits">* THIS SITE DESIGNED BY THE SOLAR OPPOSITES</p>
        </div>

      </div>

      <div className='publiAbajo'>
        <img src={PubliFondo} className="img-pie" alt="Fondo" />
        <img src={GiraCoin} className="coin" alt="GiraCoin" />
      </div>
      <div
        className="flamesAbajo"
        style={{ backgroundImage: `url(${Flames})` }}>
        &nbsp;
      </div>
    </div>
  )
}

export default App;