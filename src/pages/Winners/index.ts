import { Page } from "../../core/temlates/page";

export class Winners extends Page {
  static TextObj = {
    headerTitle: 'Winners'
  }

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createTitle('h2',Winners.TextObj.headerTitle);
    this.container.append(title);
    return this.container;
  }
}