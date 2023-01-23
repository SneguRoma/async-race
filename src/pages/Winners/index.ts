import { pageWinners, winnersCount } from "../../API";
import { Page } from "../../core/temlates/page";
import { buttonsBlockTwo, tableOfWin } from "../Garage/constants";

const buttonsPaginations = buttonsBlockTwo('prevWin', 'nextWin');
const message  =  document.getElementsByClassName('winner-message');

export class Winners extends Page {
  static TextObj = {
    headerTitle: 'Winners   ',
    secHeader: `Page  ` 
  }

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement { 
    message[0].textContent = '';   
    winnersCount.then(r => this.container.append(this.createTitle('h2',Winners.TextObj.headerTitle + r.count)));
    winnersCount.then(r => this.container.append(this.createTitle('h3',Winners.TextObj.secHeader + pageWinners)));
    winnersCount.then((cars) =>this.container.insertAdjacentHTML("beforeend", tableOfWin(cars.items))) 
    this.container.insertAdjacentHTML("beforeend", buttonsPaginations);
    
    

    
    
      //const title = this.createTitle('h2',Garage.TextObj.headerTitle);
      //cars.then(r => this.container.append(this.createTitle('h2',Garage.TextObj.headerTitle + r.count)));
      //cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + page )));
      //cars.then(r => this.container.append(this.createTitle('h3',Garage.TextObj.secHeader + r.count)));
      /* const subTitle = this.createTitle('h3',Garage.TextObj.secHeader + this.page); */
      //this.container.append(title);
      //this.container.insertAdjacentHTML("beforeend", createCarBlock);
      //this.container.insertAdjacentHTML("beforeend", modifyCar);
      //this.container.insertAdjacentHTML("beforeend", buttonsRace);
      
      /* this.container.append(subTitle); */
      //cars.then(r => r.items.map((item)=> this.container.insertAdjacentHTML("beforeend", lineContainer(item.color, item.name, item.id))));
      //this.container.insertAdjacentHTML("beforeend", buttonsPaginations);
      /* const buttonCreate = document.getElementById('create');
      console.log(buttonCreate) */
    
    




    return this.container;
  }
}