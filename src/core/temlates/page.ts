interface IPage {  
    headerTitle: string;  
}

export abstract class Page {
  protected container: HTMLElement;
  static TextObj: IPage ;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createTitle(text: string) {
    const title = document.createElement('h2');
    title.innerText = text;
    return title;
  }

  render() {
    return this.container;
  }
}