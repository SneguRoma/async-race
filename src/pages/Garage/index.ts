import { Page } from "../../core/temlates/page";
import { inputBlock, buttonsBlock, lineContainer, buttonsBlockTwo } from "./constants";
import { cars, page } from "../../API";

const createCarBlock = inputBlock('create', false);
const modifyCar = inputBlock('update',true);
const buttonsRace = buttonsBlock('race', 'reset','generate-cars');
const buttonsPaginations = buttonsBlockTwo('prev', 'next');
const message  =  document.getElementsByClassName('winner-message');


export class Garage extends Page {
  static TextObj = {
    headerTitle: 'Garage   ',
    secHeader: `Page  ` 
  }

  constructor(id: string) {
    super(id);    
  }  

  render(): HTMLElement {
    message[0].textContent = '';        
    cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.headerTitle + r.count)));
    cars.then(r => this.container.append(this.createTitle('h4',Garage.TextObj.secHeader + page )));    
    this.container.insertAdjacentHTML("beforeend", createCarBlock);
    this.container.insertAdjacentHTML("beforeend", modifyCar);
    this.container.insertAdjacentHTML("beforeend", buttonsRace);    
    cars.then(r => r.items.map((item)=> this.container.insertAdjacentHTML("beforeend", lineContainer(item.color, item.name, item.id))));
    this.container.insertAdjacentHTML("beforeend", buttonsPaginations); 
      
    return this.container;
  }
}