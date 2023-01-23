import { Page } from "../../core/temlates/page";
import { inputBlock, buttonsBlock, lineContainer, buttonsBlockTwo } from "./constants";
import { getCars, createCar } from "../../API";
import { cars, page } from "../../API";
import { animationCar } from "../App/functions";

const createCarBlock = inputBlock('create', false);
const modifyCar = inputBlock('update',true);
const buttonsRace = buttonsBlock('race', 'reset','generate-cars');
const buttonsPaginations = buttonsBlockTwo('prev', 'next');
//const cars = getCars(1);
const inputCreate = document.getElementsByClassName('create-text');
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
    //const title = this.createTitle('h2',Garage.TextObj.headerTitle);
    cars.then(r => this.container.append(this.createTitle('h2',Garage.TextObj.headerTitle + r.count)));
    cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + page )));
    //cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + r.count)));
    /* const subTitle = this.createTitle('h3',Garage.TextObj.secHeader + this.page); */
    //this.container.append(title);
    this.container.insertAdjacentHTML("beforeend", createCarBlock);
    this.container.insertAdjacentHTML("beforeend", modifyCar);
    this.container.insertAdjacentHTML("beforeend", buttonsRace);
    
    /* this.container.append(subTitle); */
    cars.then(r => r.items.map((item)=> this.container.insertAdjacentHTML("beforeend", lineContainer(item.color, item.name, item.id))));
    this.container.insertAdjacentHTML("beforeend", buttonsPaginations);
    /* const buttonCreate = document.getElementById('create');
    console.log(buttonCreate) */
    //cars.then(() => animationCar())
    //var el = document.getElementById("2-car");
    //console.log('el', el)     
    return this.container;
  }
}/* console.log(item.color) */