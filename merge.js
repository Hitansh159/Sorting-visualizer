var index = 0, arr, num;

function set_paramenters(n, a){
  num = n; 
  arr = a;
  i=0;
}


function change_height(x, hei, time){
  setTimeout(()=>{
  var bar = document.getElementById("arr"+ x);
  bar.style.height = hei*10+"px"; 
  }, time);
}

function visual_merge_sort(){

  temp =  merge_sort(array,0,num);
  console.log(temp);
  menu = document.getElementById("menu");
  menu.style.display="inline-block";
}

function merge(left, right, l, m){
  sortedList=[];
  var k=0,j=0,i=0;

  for(;k < left.length && j < right.length;i++){
    if(left[k] < right[j]){
      sortedList[i] = left[k];
      change_height(l+i, left[k], 500);
      k++;
    }
    else{
      sortedList[i] = right[j];
      change_height(l+i, right[j], 500);
      j++;
    }
  }
  console.log(sortedList);
  for(;k < left.length;k++,i++){
    sortedList[i] = left[k];
    change_height(l+i, left[k], 500);
  }
  for(;j < right.length; j++,i++){
    sortedList[i] =right[j];
    change_height(l+i, right[j], 500);
  }
  return sortedList;
}

function merge_sort(alist,l,r){

  if(alist.length<2)
    return alist;

  else{
    var m = parseInt((alist.length)/2);
    var left = merge_sort(alist.slice(0,m),l,m-1);
    var right = merge_sort(alist.slice(m),m,r-1);
    return merge(left,right,l,m);
       
  }

}
