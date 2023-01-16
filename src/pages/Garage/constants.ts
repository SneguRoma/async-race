export const inputBlock = (doWhat: string) => `
<div>
  <input type="text" class="input-text ${doWhat}-input">
  <button class="button ${doWhat}-color">choose color</button>
  <button class="button ${doWhat}-button">${doWhat}</button>  
</div>
`;

export const buttonsBlock = (doWhatFirst: string, doWhatSec: string, doWhatThree: string) => `
<div>  
  <button class="button ${doWhatFirst}-button">${doWhatFirst}</button>
  <button class="button ${doWhatSec}-button">${doWhatSec}</button>
  <button class="button ${doWhatThree}-button">${doWhatThree}</button>    
</div>
`;