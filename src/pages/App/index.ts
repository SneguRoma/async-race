import { Garage } from "../Garage";
import { Page } from "../../core/temlates/page";
import { Winners } from "../Winners";
import { Header } from "../../core/components/Header";
import { getCars,createCar, cars, updateCars, drive } from "../../API";
import { createUpdate, selectRemove, pagination } from "./functions";


export const enum PageIds {
  GaragePage = 'garage',
  WinnersPage = 'winners'
}
let page: Page | null = null;


export class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private initialPage: Garage;
  private header: Header;

  
  constructor() {    
    this.initialPage = new Garage('garage');
    this.header = new Header('header', 'header');
  }

  static renderPage(id: string, rend = false) {    
    const currentPageHtml = document.querySelector(`#${App.defaultPageId}`);
    
    if(currentPageHtml) {
      currentPageHtml.remove();
    }
    /* App.container.innerHTML = ''; */
    if(currentPageHtml && rend === true) {
      currentPageHtml.remove();
    }

    if(id === PageIds.GaragePage) {
      page = new Garage(id);
    } 
    else if (id === PageIds.WinnersPage) {
      page = new Winners(id);
    }

    if (page) {
      const pageHtml = page.render();
      pageHtml.id = App.defaultPageId;
      App.container.append(pageHtml);
    }
    
  }

  private routeChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderPage(hash);
    });
  }

  

  run(){
    App.container.append(this.header.render());    
    const hash = window.location.hash.slice(1);
    App.renderPage(hash);
    this.routeChange();
    createUpdate();
    selectRemove();
    pagination()

    
    //drive(6).then((r)=> console.log(r));
  
   
       

  }
}