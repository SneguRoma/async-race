import { Page } from "../../core/temlates/page";
import { inputBlock, buttonsBlock, lineContainer } from "./constants";
import { getCars } from "../../API";


const createCar = inputBlock('create');
const modifyCar = inputBlock('update');
const buttonsRace = buttonsBlock('race', 'reset','generate-cars');
const roadLine = lineContainer('#000000');
const cars = getCars(1);

export class Garage extends Page {
  static TextObj = {
    headerTitle: 'Garage',
    secHeader: `Page ${'add number of page'}` 
  }

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createTitle('h2',Garage.TextObj.headerTitle);
    const subTitle = this.createTitle('h3',Garage.TextObj.secHeader);
    this.container.append(title);
    this.container.insertAdjacentHTML("beforeend", createCar);
    this.container.insertAdjacentHTML("beforeend", modifyCar);
    this.container.insertAdjacentHTML("beforeend", buttonsRace);
    this.container.append(subTitle);
    cars.then(r => r.items.map((item)=> this.container.insertAdjacentHTML("beforeend", lineContainer(item.color))));
    
    return this.container;
  }
}/* console.log(item.color) */