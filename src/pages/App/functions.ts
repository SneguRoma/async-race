import { getCar, updateCars } from "../../API";
import { PageIds } from ".";
import { createCar,updateCar } from "../../API";
import { App } from ".";
import { ICar } from "../../API/interfases";

const body: HTMLElement = document.body;
let formData:FormData;
let updateFormData:FormData;
let selectedCar: ICar;


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
      }).then(() => updateCars())
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
      }).then(() => updateCars())
        .then(() => {App.renderPage(PageIds.GaragePage, true);})      
      }
    }    
  });
}; 

export const selectRemove = () => {  
  //console.log('createInput',formData)
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
    }     
  });
};   







  /* selectedCar = await getCar(event.target.id).then(() => updateCars())
    .then(() => {App.renderPage(PageIds.GaragePage, true);})      
  } */


  //const buttonCreate = document.getElementById('create');
  //if (buttonCreate){
  //  buttonCreate.addEventListener('click', async() =>{ await createCar({
   // name: 'string',
  //  color: '#0213000'  
//  }).then(() => {
//    updateCars().then(() => {
    //  document.querySelector(`#${App.defaultPageId}`)?.remove()


    //  page = new Garage(PageIds.GaragePage);
   //   const pageHtml = page.render();
  //  pageHtml.id = App.defaultPageId;
   // App.container.append(pageHtml); 
    
    //page?.render();
    
  //    App.renderPage(PageIds.GaragePage, true);
    //this.run()
 //   })
//});
//  }) 
 // }