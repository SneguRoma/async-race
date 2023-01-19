import { Page } from "../../core/temlates/page";
import { inputBlock, buttonsBlock, lineContainer } from "./constants";
import { getCars, createCar } from "../../API";
import { cars } from "../../API";

const createCarBlock = inputBlock('create', false);
const modifyCar = inputBlock('update',true);
const buttonsRace = buttonsBlock('race', 'reset','generate-cars');
//const cars = getCars(1);
const inputCreate = document.getElementsByClassName('create-text');



export class Garage extends Page {
  static TextObj = {
    headerTitle: 'Garage   ',
    secHeader: `Page  ` 
  }

  constructor(id: string) {
    super(id);    
  }  

  remove(){    
    this.container.remove();
    this.container = document.createElement('div');   
  }


  render(): HTMLElement {
    //const title = this.createTitle('h2',Garage.TextObj.headerTitle);
    cars.then(r => this.container.append(this.createTitle('h2',Garage.TextObj.headerTitle + r.count)));
    cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + r.count)));
    //cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + r.count)));
    /* const subTitle = this.createTitle('h3',Garage.TextObj.secHeader + this.page); */
    //this.container.append(title);
    this.container.insertAdjacentHTML("beforeend", createCarBlock);
    this.container.insertAdjacentHTML("beforeend", modifyCar);
    this.container.insertAdjacentHTML("beforeend", buttonsRace);
    
    /* this.container.append(subTitle); */
    cars.then(r => r.items.map((item)=> this.container.insertAdjacentHTML("beforeend", lineContainer(item.color, item.name, item.id))));
    /* const buttonCreate = document.getElementById('create');
    console.log(buttonCreate) */
    return this.container;
  }
}/* console.log(item.color) */