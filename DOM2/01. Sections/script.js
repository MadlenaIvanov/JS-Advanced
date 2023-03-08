function create(words) {
   const findDivContent = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {

      const divElement = document.createElement('div');
      const pElement = document.createElement('p');

      pElement.style.display = 'none';
      const appendPElement = divElement.appendChild(pElement);
      appendPElement.textContent = words[i];
      
      divElement.addEventListener('click', () => {
         pElement.style.display = 'inline';
      })

      findDivContent.appendChild(divElement);
   }
}