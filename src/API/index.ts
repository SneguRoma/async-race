import { ICar, ICarWithOutId } from "./interfases";

const urlBase = 'http://127.0.0.1:3000';
const garage = `${urlBase}/garage`;
const engine = `${urlBase}/engine`;
const winners = `${urlBase}/winners`;

export const getCars:(page: number, limit?: number) => Promise<{
  items: ICar[];
  count: string | null;
}> = async (page:number, limit = 7) =>{
  const resp = await fetch(`${garage}?_page=${page}&_limit=${limit}`); 
  //console.log('resp', resp.headers.get('X-Total-Count'))
  return {
    items: await resp.json(),
    count: resp.headers.get('X-Total-Count')
  };
}

export const createCar = async (car: ICarWithOutId) => {
  const resp = await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}

export const updateCar = async (car: ICar) => {
  const resp = await fetch(`${garage}/${car.id}`, {
    method: 'PUT',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}

export const getCar = async (id:number) => {
  const resp = await fetch(`${garage}/${id}`);
  return await resp.json(); 
}

export const delCar = async (id:number) => {
  const resp = await fetch(`${garage}/${id}`,{method: 'DELETE' });
  return await resp.json(); 
}
export let cars = getCars(1);

export async function updateCars() {
  cars =  getCars(1, 100);
}
//let fcars = getCars(1).then(r => console.log (r));


