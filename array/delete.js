let data = [60, 40, 8, 20, 2, 4, 5, 8, 90];

let position = 3;
for (let index = position; index < data.length - 1; index++) {
  // console.log(data[index]);
  data[index] = data[index + 1];
}
data.length = data.length - 1;
console.log(data);

function removeElement() {
  let position =parseInt(document.getElementById("textPosition").value);
  for (let index = position; index < data.length - 1; index++) {
    // console.log(data[index]);
    data[index] = data[index + 1];
  }
  data.length = data.length - 1;
  console.log(data);
}


// Delete with spice method
data.splice(2,1); // index, deleting no of lemenet after that
console.log(data);