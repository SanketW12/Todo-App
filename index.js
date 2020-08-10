window.addEventListener("load", () => {
  var i=1;
  var x = 1;
  const btnadd = document.querySelector("#add");
  const input = document.querySelector("#input");
  const btndone = document.querySelector("#done");
  btndone.style.display = "none";




  do{

  if (localStorage.getItem("t" + x) == undefined) {
    i=0;
  } else {
    var element = create();
  element.innerHTML=localStorage.getItem("t" + x) +'<i class="check"></i>'+'<img class="delete" src="resource/delete.svg" alt="">' ;
  element.name="t"+x;
    x = x + 1;
    }
}while(i!=0);

document.querySelector("#tlist").addEventListener("click",deletecheck);
function deletecheck(e){
  if(e.target.classList[0]=="delete"){
      const parent=e.target.parentElement;
    localStorage.removeItem(parent.name);
    parent.remove();
  }
}

  input.addEventListener("focus", add);

  function add() {
    btnadd.style.display = "none";
    btndone.style.display = "block";
    input.style.borderBottom = "2px solid #305973"
  }

  btndone.addEventListener("click", write);

  function write() {
    if (input.value.trim() == "") {
      alert("write something to add");
    } else {

      btnadd.style.display = "block";
      btndone.style.display = "none";
      input.style.borderBottom = "1px solid #305973";
      var element = create();
      localStorage.setItem("t" + x, input.value);
      element.innerHTML = localStorage.getItem("t" + x) +'<i class="check"></i>'+'<img class="delete" src="resource/delete.svg" alt="">';
      element.name="t"+x;
      x=x+1;
      input.value = "";

    }
  }

  function create() {
    const task = document.createElement("li");
    document.querySelector("#tlist").appendChild(task);
    task.classList.add("tasks");
   return task;
  }



  btnadd.addEventListener("click", active);
   function active() {
    input.focus();
  }

  document.querySelector(".refresh").addEventListener("click",()=>{
  localStorage.clear();
  location.reload();
  });

  input.addEventListener("keyup",(e)=>{
        input.style.borderBottom = "2px solid #305973";
    if(e.keyCode===13 && input.value!=""){
      write();
    }
  });



});
