function search() {
   const towns = document.getElementById('towns').children;
   const searchTerm = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let count = 0;

   for (let i = 0; i < towns.length; i++) {
      if(towns[i].textContent.includes(searchTerm)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';

         count++;
      } else {
         towns[i].style.fontWeight = '';
         towns[i].style.textDecoration = '';
      }
   }

   result.textContent = `${count} matches found`;
}
