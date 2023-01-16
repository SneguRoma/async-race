export const inputBlock = (doWhat: string) => `
<div>
  <input type="text" class="input-text ${doWhat}-input">
  <button class="enter-color ${doWhat}-color">choose color</button>
  <button class="create-button ${doWhat}-button">create</button>  
</div>
`