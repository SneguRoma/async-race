export abstract class Component {
  protected container: HTMLElement;  

  constructor(tag: string, className: string) {
    this.container = document.createElement(tag);
    this.container.className = className;
  }

  render(): HTMLElement {
    return this.container;
  }
}