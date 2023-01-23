import { cars, delCar, delWinner, drive, getCar, saveWinner, startEng, stopEng, updateCars } from "../../API";
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
let globalState:{
  id: number,
  time: number}[] = [];
const message  =  document.getElementsByClassName('winner-message');
let order = 'ASC';

let sort = 'wins';

export const createUpdate = () => {  
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
        delWinner((+event.target.id)/1000);
        updateWinners(0,'wins', 'ASC');        
      }

      if (event.target.classList.contains("car-start-button")) {
        const id = parseInt(event.target.id);
        const startButt = document.getElementById(`${id}-start`);
        const stopButt = document.getElementById(`${id}-stop`);        
        if (startButt instanceof HTMLButtonElement && startButt) {
          startButt.disabled = true;
        }
        if (stopButt instanceof HTMLButtonElement && stopButt) {          
          stopButt.disabled = false;
        }
        startedCar = await startEng(id);        
        await drive(id).then(r => {          
         if (r.succsess === false ) {
          cancelAnimationFrame(globalState[id].id);          
         } 
        });       
      } 
      
      if (event.target.classList.contains("race-button")) {
        globalState = [];
        message[0].textContent = ' ';
        const carsForRace = await cars;        
        carsForRace.items.forEach(async (r) => {
          startedCar = await startEng(r.id);
          const carName= await getCar(r.id);        
          globalState[r.id] = animationCar(r.id,startedCar.velocity,startedCar.distance, carName.name);
          await drive(r.id).then(item => {          
            if (item.succsess === false ) {
             cancelAnimationFrame(globalState[r.id].id) 
            } 
           });           
        });         
      }

      if (event.target.classList.contains("car-stop-button")) { 
        const id = parseInt(event.target.id);
        const startButt = document.getElementById(`${id}-start`);
        const stopButt = document.getElementById(`${id}-stop`);
        if (startButt instanceof HTMLButtonElement && startButt) {          
          startButt.disabled = false;
        }
        if (stopButt instanceof HTMLButtonElement && stopButt) {          
          stopButt.disabled = true;
        } 
        stoppedCar = await stopEng(id);        
        cancelAnimationFrame(globalState[id].id);
        const el = document.getElementById(`${id}-car`);
        if(el) el.style.left = '15px'         
      }

      if (event.target.classList.contains("reset-button")) { 
        const carsForRace = await cars;
        console.log('carsForRace',carsForRace.items)
        carsForRace.items.forEach(async (r) => {
          stoppedCar = await stopEng(r.id);
          cancelAnimationFrame(globalState[r.id].id);
          const el = document.getElementById(`${r.id}-car`);
          if(el) el.style.left = '15px'
        });
        message[0].textContent = '';       
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
        updateWinners(1,sort, order);
        App.renderPage(PageIds.WinnersPage, true);}     
      }
    if(event.target instanceof Element){     
      if (event.target.classList.contains('prevWin-button')) {         
        updateWinners(-1,sort, order);
        App.renderPage(PageIds.WinnersPage, true);}     
      }      
      
    if(event.target instanceof Element){     
      if (event.target.classList.contains('generate-cars-button')) { 
        await generateHundreedCars();       
        await updateCars(0);
        App.renderPage(PageIds.GaragePage, true);}     
      }
        
    if(event.target instanceof Element){     
      if (event.target.classList.contains('wins')) {
        order = (order === 'ASC') ? 'DESC': 'ASC';
        sort = 'wins';
        await updateWinners(0,sort, order);
        App.renderPage(PageIds.WinnersPage, true);}     
      }

    if(event.target instanceof Element){     
      if (event.target.classList.contains('time')) {
        order = (order === 'ASC') ? 'DESC': 'ASC';
        sort = 'time';
        await updateWinners(0,'time', order);
        App.renderPage(PageIds.WinnersPage, true);}     
      } 
    });      
  }
  
  export const animationCar = (id:number,velo: number, dist: number, carName?: string) => {    
    const state: {id: number, time: number}= {id: 0, time: 0};
    let stepLeft = 15;
    const el = document.getElementById(`${id}-car`);
    state.time = dist / velo;  
    function move() {        
        let currDist = document.body.clientWidth-70;
        let timeForDist = dist / velo;
        let pixForSec = currDist / timeForDist;
        //console.log('timeForDist',timeForDist, 'currDist', currDist, 'pixForSec', pixForSec )
        stepLeft += pixForSec*30;
        if(el) el.style.left = stepLeft + "px";
        if (stepLeft < currDist)          
        state.id = window.requestAnimationFrame(move);
        if(stepLeft >= currDist && message[0].textContent === ' ' && carName){
          message[0].textContent = `${carName} went first with ${(timeForDist/1000).toFixed(2)} sec`;
          let time = +(timeForDist/1000).toFixed(2)
          saveWinner({id, time}).then(()=> updateWinners(0,'wins', 'ASC'));          
        }        
    }
    state.id = window.requestAnimationFrame(move); 
    
    return state;
   } 
  
