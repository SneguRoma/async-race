export interface ICar{
  "name": string,
  "color": string,
  "id": number
}

export interface ICarWithOutId{
  "name": string,
  "color": string,  
}
export interface IWin
{
  "id": number,
  "wins": number,
  "time": number
}

export interface IWinWithoutId
{  
  "wins": number,
  "time": number
}

export interface IWinners
  {
    car: ICar;
    id: number;
    wins: number;
    time: number;
}

export interface ISaveWin{
  id: number,
  time: number
}

