let x=0;
let array=Array();
function add_element_to_array() {
  array[x]=document.getElementById("txtValue").value;
  alert("Element: "+ array[x] + "Add at index " + x);
  x++;
  document.getElementById("textvalue").value="";
}
function  display_array() {
  let e="<hr/>";
  for (i=0;i<array.length;i++){
    e +="element" + i + "="+array[i]+"<br/>";
  }
  document.getElementById("result").innerHTML=e;
}
