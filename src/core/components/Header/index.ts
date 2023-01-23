import { Component } from "../../temlates/component";
import { PageIds } from "../../../pages/App";

interface IButton {  
    id: PageIds;
    buttonText: string;
}


const buttons: IButton[]  = [
  {
    id: PageIds.GaragePage,
    buttonText: 'Garage'
  },
  {
    id: PageIds.WinnersPage,
    buttonText: 'Winners'
  }
];

const nameOfApp = document.createElement('h1');
nameOfApp.textContent = 'Async Race';

export class Header extends Component{
  constructor(tag: string, className: string) {
    super(tag, className);
  }

  renderPage(){
    const pageButtons = document.createElement('div');
    const winner = document.createElement('div');
    winner.classList.add('winner-message')
    buttons.forEach(element => {
      const buttoHtml= document.createElement('button');
      const buttonLink = document.createElement('a');
      buttonLink.href = `#${element.id}`;       
      buttonLink.textContent = element.buttonText;    
      buttoHtml.append(buttonLink);      
      pageButtons.append(buttoHtml); 
    });
    this.container.append(nameOfApp);
    this.container.append(pageButtons);
    this.container.append(winner);
  }

  render() {
    this.renderPage();
   return  this.container;
  }
}