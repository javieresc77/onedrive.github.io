/*document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página
  const searchTerm = document.getElementById('search-input').value;
  // Aquí iría la lógica para realizar la búsqueda
  console.log('Término de búsqueda:', searchTerm);
});
*/

function myFunction() {
  var input, filter, table, tr, h2, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("h2")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}