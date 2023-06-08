let input = document.getElementById("myInput");
let list = document.getElementById("myUL");
let search = document.getElementById("search")

search.addEventListener("click", function() {
  let filter = search.value.toUpperCase();
  let li = list.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByClassName("history")[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});


list.addEventListener("click", function(e) {
  if (e.target && e.target.matches("#delbtn")) {
    let li = e.target.closest("li");
    li.remove();
  }
    
});
