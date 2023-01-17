import { ICar } from "./interfases";

const urlBase = 'http://127.0.0.1:3000';
const garage = `${urlBase}/garage`;
const engine = `${urlBase}/engine`;
const winners = `${urlBase}/winners`;



export const getCars:(page: number, limit?: number) => Promise<{
  items: ICar[];
  count: string | null;
}> = async (page:number, limit = 7) =>{
  const resp = await fetch(`${garage}?_page${page}&_limit${limit}`); 

  return {
    items: await resp.json(),
    count: resp.headers.get('X-Total-Count')
  };
}

let fcars = getCars(1,2).then(r => console.log (r.items));


