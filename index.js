let max_sum = -99999999;

function sum(start , end) {
  for (i = start; i < end; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

for (i = 0; i <= 4; i++) {
   for (j = i; j < 4; j++) {
     if (sum(i , j) > max_sum) {
       max_sum = sum(i , j);
     }
   }
}

document.write(max , sum);
