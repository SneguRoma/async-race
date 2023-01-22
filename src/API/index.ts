import { ICar, ICarWithOutId, ISaveWin, IWin, IWinners, IWinWithoutId } from "./interfases";

const urlBase = 'http://127.0.0.1:3000';
const garage = `${urlBase}/garage`;
const engine = `${urlBase}/engine`;
const winners = `${urlBase}/winners`;
const getSort = (sort: string, order: string) => {
  return (sort && order) ? `&_sort=${sort}&_order=${order}`: '';
  }

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

export const getCar: (id:number) => Promise<ICar> = async (id:number) => {
  const resp = await fetch(`${garage}/${id}`);
  return await resp.json(); 
}

export const delCar = async (id:number) => {
  const resp = await fetch(`${garage}/${id}`,{method: 'DELETE' });
  return await resp.json(); 
}



export let page = 1;
export let cars = getCars(page);

export async function updateCars(dir: number) {
  page += dir;
  if(page < 1 ) page = 1;
 cars = getCars(page)
  .then(r =>{if(r.count) page = ((+r.count / 7) <= page -1) ? page-1 : page;})
  .then(() =>getCars(page));
}




export const startEng = async (id: number) => (await fetch(`${engine}?id=${id}&status=started`,{method: 'PATCH'})).json(); 

export const stopEng = async (id: number) => (await fetch(`${engine}?id=${id}&status=stopped`,{method: 'PATCH'})).json();
 
export const drive = async (id: number) => {
  const resp = await fetch(`${engine}?id=${id}&status=drive`,{method: 'PATCH'}).catch()
  console.log('status',resp.status)
  return (resp.status!=200) ? {succsess: false} : {...(await resp.json())}
} 

export const getWinner = async (id:number) => {
  const resp = await fetch(`${winners}/${id}`);
  return await resp.json(); 
}

export const getWinnerStatus = async (id:number) => {
  const resp = await fetch(`${winners}/${id}`);
  return resp.status; 
}

export const delWinner = async (id:number) => {
  const resp = await fetch(`${winners}/${id}`,{method: 'DELETE' });
  return await resp.json(); 
}

export const createWinner = async (winner: IWin) => {
  const resp = await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(winner),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}

export const updateWinner = async (winner: IWin) => {
  const resp = await fetch(`${winners}/${winner.id}`, {
    method: 'PUT',
    body: JSON.stringify(winner),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await resp.json();
}

export const getWinners: (page: number, limit: number, sort: string, order: string ) => Promise<{
  items: IWinners[]
  count: string | null;
}> = async (page:number, limit = 10, sort:string , order: string) =>{
  const resp = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSort}`);
  const items: IWin[] = await resp.json(); 
  //console.log('resp', resp.headers.get('X-Total-Count'))
  return {
    items: await Promise.all(items.map(async item => ({...item, car: await getCar(item.id)}))),
    count: resp.headers.get('X-Total-Count')
  };
}

export const saveWinner = async ({id, time}:ISaveWin) => {
  const respStatus = await getWinnerStatus(id);

  if (respStatus === 404) {
    await createWinner({
      id, 
      wins: 1,
      time
    })
  }
  else{
    const winner = await (getWinner(id));
    await updateWinner({
      id,
      wins: winner.wins + 1,
      time: (time < winner.time) ? time : winner.id
    })
  }
}


export let pageWinners = 1;
export let winnersCount = getWinners(pageWinners, 10, 'wins', 'ASC');

export async function updateWinners(dir: number, sort: string, order: string) {
  pageWinners += dir;
  if(pageWinners < 1 ) pageWinners = 1;
  winnersCount = getWinners(pageWinners, 10, sort, order)
  .then(r =>{if(r.count) pageWinners = ((+r.count / 10) <= pageWinners -1) ? pageWinners-1 : pageWinners;})
  .then(() =>getWinners(pageWinners, 10, sort, order));
}