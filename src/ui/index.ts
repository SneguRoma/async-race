import { createCar, updateCars } from "../API";

const getRandom = (max:number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const names = ['opel', 'opelek', 'opelishche', 'opelushecka', 'opelundra', 'opelulechka', 'opeleshenka', 'opelenochka', 'opeluha', 'opelusechka']
const models = ['astra', 'cadett', 'vectra', 'zafira', 'adam', 'Mokka', 'wiski', 'rom', 'wine', 'beer'];
const colors = "0123456789abcdef";

export const generateHundreedCars = async () => {
  for (let i = 0; i < 100; i++){
    let name = names[getRandom(0,9)] + '  ' + models[getRandom(0,9)];    
    let color = '#'+ colors[getRandom(0,15)]+ colors[getRandom(0,15)]+ colors[getRandom(0,15)]+ colors[getRandom(0,15)]+ colors[getRandom(0,15)]+ colors[getRandom(0,15)];    
    await createCar({"name": name, "color": color});
  }
  
}