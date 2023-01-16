import './index.css'
import {App} from './pages/App';

const urlBase = 'http://127.0.0.1:3000';
const garage = `${urlBase}/garage`;

const cars = async (page:number, limit = 7) =>{
  const resp = await fetch(`${garage}?_page${page}&_limit${limit}`);
  

  return {
    items: await resp.json(),
    count: resp.headers.get('X-Total-Count')
  };
}

let fcars = cars(1,2).then(r => console.log (r.items));
console.log('cars',fcars.then)


console.log('huiii!!!!!')

interface ICar{
      "name": string,
      "color": string,
      "id": number
  }

const app = new App();
  app.run();