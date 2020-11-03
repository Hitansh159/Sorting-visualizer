var i = 0, arr, num;

function set_paramenters(n, a){
  num = n; 
  arr = a;
  i=0;
}

function set_bar_to(ele, color, time){
  setTimeout(()=> {
    window.requestAnimationFrame(()=>{ele.style.background = color;})
  },time);
}

function swap_height(min_index){
  a = document.getElementById("arr" + i);
  b = document.getElementById("arr"+ min_index);
  temp = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp;
}

function Selection_sort(){
      
  // var array_container = document.getElementById("array");
  var a = document.getElementById("arr" + i);
  set_bar_to(a, "red", 0);

  var min_index = i;
  for (var j = i + 1; j < num; j++) {
    b = document.getElementById("arr" + j);
    set_bar_to(b, "green", 0);
    if (arr[j] < arr[min_index])
      min_index = j;

    set_bar_to(b, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);  
  }
  // changing elements of array
  temp = arr[i];
  arr[i] = arr[min_index];
  arr[min_index] = temp;

  set_bar_to(a, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);

  swap_height(min_index);

  if(++i<num){  
    setTimeout(()=>
      {
        window.requestAnimationFrame(Selection_sort); 
      },500);
  }
  else{
    i=0;
    menu = document.getElementById("menu");
    menu.style.display="inline-block";
  }
}