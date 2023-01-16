import { Page } from "../../core/temlates/page";
import { inputBlock } from "./constants";


const createCar = inputBlock('create');
const modifyCar = inputBlock('update');

export class Garage extends Page {
  static TextObj = {
    headerTitle: 'Garage'
  }

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createTitle(Garage.TextObj.headerTitle);
    this.container.append(title);
    this.container.insertAdjacentHTML("beforeend", createCar);
    this.container.insertAdjacentHTML("beforeend", modifyCar);
    return this.container;
  }
}