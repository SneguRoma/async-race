interface IPage {  
    headerTitle: string
    secHeader?: string  
}

export abstract class Page {
  protected container: HTMLElement;
  static TextObj: IPage ;
  protected page?: string | null

  constructor(id: string, page?: string | null) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.page = (page)  ? page : '0';
  }

  protected createTitle(tag: string, text: string) {
    const title = document.createElement(tag);
    title.innerText = text;
    return title;
  }

  remove(){
    this.container = document.createElement('div');
  }

  render() {
    return this.container;
  }
}