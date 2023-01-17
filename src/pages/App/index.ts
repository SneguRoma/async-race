import { Garage } from "../Garage";
import { Page } from "../../core/temlates/page";
import { Winners } from "../Winners";
import { Header } from "../../core/components/Header";
import { getCars } from "../../API";

export const enum PageIds {
  GaragePage = 'garage',
  WinnersPage = 'winners'
}

export class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private initialPage: Garage;
  private header: Header;

  constructor() {    
    this.initialPage = new Garage('garage');
    this.header = new Header('header', 'header');
  }

  static renderPage(id: string) {
    const currentPageHtml = document.querySelector(`#${App.defaultPageId}`);
    if(currentPageHtml) {
      currentPageHtml.remove();
    }
    /* App.container.innerHTML = ''; */
    let page: Page | null = null; 

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
    App.renderPage('garage');
    this.routeChange();
    let rr
    let fcars = getCars(1,2).then(r => {console.log (r.items[1]);return r;});
    
    
    fcars.then(r => console.log(r.items))

  }
}