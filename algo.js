var algo, array, arr_size;

function set_height(arr, num){
  // setting heights of all elements
  let array_container = document.getElementById("array");
  array_container.innerHTML = "";
  for (var i = 0; i < num; i++) {
    array_container.innerHTML += "<div class=\"arrayElement\" id=\"arr" + i + "\" style=\"height:" + arr[i] * 10 + "px;width:" + parseInt(screen.width / (2 * num)) + "px;\" >1</div>"
  }
}

function set_array(num, choice) {
  console.log(num, choice);
  num *=2;
  if (num == 0)
    num = 5;
  
  // genrating Element with random height
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = Math.floor(Math.random() * 45) + 1;
  }
  
  set_height(arr, num);
  
  arr_size = num;
  array = arr;
  algo = choice;
}

function sort() {
  menu = document.getElementById("menu");
  menu.style.display="none";
  var info = ["Time complexity = O(n^2)", "Time complexity = O(n*ln(n))", "Time complexity = O(n)"];
  var data = document.getElementById("data");
  data.innerHTML = "";
  
  //sorting
  switch (algo) {
    case "Selection sort": 
      set_paramenters(arr_size, array); 
      window.requestAnimationFrame(Selection_sort);
      data.innerHTML = info[0];
      break;
    case "Bubble sort":
      set_paramenters(arr_size, array); 
      window.requestAnimationFrame(bubble_sort);
      data.innerHTML = info[0];
      break;  
    case "Insertion sort":
      set_paramenters(arr_size, array); 
      window.requestAnimationFrame(insertion_sort);
      data.innerHTML = info[0];
      break;
    case "Merge sort":
      set_paramenters(arr_size, array);
      window.requestAnimationFrame(()=>{visual_merge_sort();});
      data.innerHTML = info[1];
      break;
    case "Count sort":
      set_paramenters(arr_size, array);
      window.requestAnimationFrame(count_sort);
      data.innerHTML = info[2];
      break;
    default:
      break;
  }
}
      
    
