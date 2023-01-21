import { cars, delCar, getCar, startEng, stopEng, updateCars } from "../../API";
import { PageIds } from ".";
import { createCar,updateCar, updateWinners } from "../../API";
import { App } from ".";
import { ICar, ICartartStop } from "../../API/interfases";
import { generateHundreedCars } from "../../ui";

const body: HTMLElement = document.body;
let formData:FormData;
let updateFormData:FormData;
let selectedCar: ICar;
let removedCar: ICar;
let startedCar: ICartartStop
let stoppedCar: ICartartStop
let globalState:{id: number}[] = [];



export const createUpdate = () => {  
  //console.log('createInput',formData)
  body.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    const createInput = document.getElementById('create-form');
    if(createInput instanceof HTMLFormElement) { formData = new FormData(createInput);}
    const name = formData.get('name');
    const color = formData.get('color');    

    if(event.target instanceof Element){      
      if (event.target.classList.contains('create-form')) {        
      await createCar({
        name: (name) ? name?.toString() : '',
        color: (color) ? color?.toString() : '#000000'
      }).then(() => updateCars(0))
        .then(() => {console.log('createInput', color)
          App.renderPage(PageIds.GaragePage, true);})      
      }
    }

    const updateInput = document.getElementById('update-form');
    if(updateInput instanceof HTMLFormElement) { updateFormData = new FormData(updateInput);}
    const updateName = updateFormData.get('name');
    const updateColor = updateFormData.get('color');

    if(event.target instanceof Element){      
      if (event.target.classList.contains('update-form')) {             
      updateCar({
        name: (updateName) ? updateName ?.toString() : '',
        color: (updateColor) ? updateColor?.toString() : '#000000',
        id: selectedCar.id  
      }).then(() => updateCars(0))
        .then(() => {App.renderPage(PageIds.GaragePage, true);})      
      }
    }    
  });
}; 

export const selectRemove = () => {  
  body.addEventListener('click', async (event: Event) => {
    if(event.target instanceof Element){      
      if (event.target.classList.contains('select-car-button')) { 
        selectedCar = await getCar(+event.target.id);               
        const color = document.getElementById("update-color");        
        if (color instanceof HTMLInputElement && color) {
          color.disabled = false;
          color.value = selectedCar.color;
        }

        const name = document.getElementById("update-input");        
        if (name instanceof HTMLInputElement && name) {
          name.disabled = false;
          name.value = selectedCar.name;
        }

        const upDate = document.getElementById("update-button");        
        if (upDate instanceof HTMLButtonElement && upDate) {
          upDate.disabled = false;          
        }        
        console.log(event.target.id, selectedCar) 
      }

      if (event.target.classList.contains("remove-car-button")) {             
        removedCar = await getCar((+event.target.id)/1000);
        await delCar(removedCar.id);
        updateCars(0);
        App.renderPage(PageIds.GaragePage, true);         
      }

      if (event.target.classList.contains("car-start-button")) {             
        startedCar = await startEng((parseInt(event.target.id)));
        console.log('startedCar',startedCar.distance)
        globalState[(parseInt(event.target.id))] = animationCar(parseInt(event.target.id),startedCar.velocity,startedCar.distance);
      }

      if (event.target.classList.contains("car-stop-button")) {             
        stoppedCar = await stopEng((parseInt(event.target.id)));
        console.log('stoppedCar',stoppedCar)
        cancelAnimationFrame(globalState[(parseInt(event.target.id))].id);
      }
    }     
  });
};  

export const pagination = () => {  
  //console.log('createInput',formData)
  body.addEventListener('click', async (event: Event) => {    

    if(event.target instanceof Element){     
      if (event.target.classList.contains('prev-button')) {        
        updateCars(-1);
        App.renderPage(PageIds.GaragePage, true);}     
      }
    if(event.target instanceof Element){     
        if (event.target.classList.contains('next-button')) {        
          updateCars(1);
          App.renderPage(PageIds.GaragePage, true);}     
        }
    
    if(event.target instanceof Element){     
      if (event.target.classList.contains('nextWin-button')) {              
        updateWinners(1,'wins', 'ASC');
        App.renderPage(PageIds.WinnersPage, true);}     
      }
    if(event.target instanceof Element){     
      if (event.target.classList.contains('prevWin-button')) {         
        updateWinners(-1,'wins', 'ASC');
        App.renderPage(PageIds.WinnersPage, true);}     
      }      
      
      if(event.target instanceof Element){     
        if (event.target.classList.contains('generate-cars-button')) { 
          await generateHundreedCars();       
          await updateCars(0);
          App.renderPage(PageIds.GaragePage, true);}     
        }    
    });      
  }
  
  export const animationCar = (id:number,velo: number, dist: number) => {    
    const state: {id: number}= {id: 0};
    var stepLeft = 15;
    var el = document.getElementById(`${id}-car`);                
    function move() {        
        let currDist = document.body.clientWidth-70;
        let timeForDist = dist / velo;
        let pixForSec = currDist / timeForDist;
        console.log('timeForDist',timeForDist, 'currDist', currDist, 'pixForSec', pixForSec )
        stepLeft += pixForSec*30;
        if(el) el.style.left = stepLeft + "px";
        if (stepLeft < currDist)          
        state.id = window.requestAnimationFrame(move);
    }
    state.id = window.requestAnimationFrame(move);
    console.log('state', state)
    return state;
   } 
  
