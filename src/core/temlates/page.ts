interface IPage {  
    headerTitle: string
    secHeader?: string  
}

export abstract class Page {
  protected container: HTMLElement;
  static TextObj: IPage ;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createTitle(tag: string, text: string) {
    const title = document.createElement(tag);
    title.innerText = text;
    return title;
  }

  render() {
    return this.container;
  }
}