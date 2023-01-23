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
   
    return this.container;
  }
}