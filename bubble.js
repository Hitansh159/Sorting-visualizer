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

function swap_height(x, y){
  a = document.getElementById("arr" + x);
  b = document.getElementById("arr"+ y);
  temp = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp;
}

function bubble_sort(){
  var a = document.getElementById("arr" + i);
  set_bar_to(a, "red", 0);

  for (var j =0; j < num-1; j++) {
    b = document.getElementById("arr" + j);
    set_bar_to(b, "green", 0);
    if (arr[j] > arr[j+1]){
      // changing elements of array
      set_bar_to(b, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);  
      temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      swap_height(j, j+1);
    }
    set_bar_to(b, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);  
  }
 
  set_bar_to(a, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);


  if(++i<num){  
    setTimeout(()=>
      {
        console.log(i);
        window.requestAnimationFrame(bubble_sort); 
      },279);
  }
  else{
    i=0;
    menu = document.getElementById("menu");
    menu.style.display="inline-block";
  }

}
