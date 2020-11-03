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

function merge_sort(){
  // var a = document.getElementById("arr" + i);
  // set_bar_to(a, "red", 0);

  // b = document.getElementById("arr" + j);
  // set_bar_to(b, "green", 0);
  // set_bar_to(b, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);  

  // set_bar_to(b, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);  
 
  // set_bar_to(a, "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 50);



  if(++i<num){  
    setTimeout(()=>
      {
        console.log(i);
        window.requestAnimationFrame(()=>{
          merge_sort();
        }); 
      },279);
  }
  else{
    i=0;
    menu = document.getElementById("menu");
    menu.style.display="inline-block";
  }

}

function merge(left, right){
  sortedList=[];
  var k=0,j=0;
  for(var i=0;k < left.length && j < right.length;i++){
    if(left[k] < right[j]){
      sortedList[i] = left[k];
      k++;
    }
    else{
      sortedList[i] = right[j];
      j++;
    }
  }
  console.log(sortedList);
  sortedList = sortedList.concat(left.slice(k));
  sortedList =sortedList.concat(right.slice(j));

  return sortedList;
}

function merge_sort(alist){
  console.log(i, alist);
  if(alist.length<2)
    return alist;
  else{
    var m = parseInt((alist.length)/2);
    var left = merge_sort(alist.slice(0,m));
    var right = merge_sort(alist.slice(m));
    return merge(left,right); 
  }
}
