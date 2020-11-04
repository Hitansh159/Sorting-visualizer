var i = 0, arr, num;

function set_paramenters(n, a){
  num = n; 
  arr = a;
  i=0;
}

function count_sort(){
  var countArray=[]
  for(var i=0;i<50;i++){
    countArray[i]=0;
  }
  for(var i=0;i<num;i++){
    countArray[arr[i]]++;
  }
  var k=0;
  for(var i=0;i<50;i++){
      for(;countArray[i]>0;k++,countArray[i]--){
        arr[k] =  i;
        var ele = document.getElementById("arr"+k);
        ele.style.height = i*10+"px";
    }
  }

  i=0;
  menu = document.getElementById("menu");
  menu.style.display="inline-block";
}
