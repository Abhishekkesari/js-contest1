/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(MapPrint);

  function MapPrint(arritem) {
    if (arritem.profession === "developer") {
      console.log(arritem);
    }
  }
}


function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(EachPrint);

  function EachPrint(arritem) {
    if (arritem.profession === "developer") {
      console.log(arritem);
    }
  }
}


function addData() {
  //Write your code here
  let newObject = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObject);
  console.log(arr);
}


function removeAdmin() {
  //Write your code here
  let remove = arr.filter(function (val) {

    if (val.profession !== "admin") {

      return val;
    }
  });
  console.log(remove);
}


function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "Abhishek", age: "23", profession: "web-developer" },
    { id: 6, name: "Abhay", age: "22", profession: "developer" },
    { id: 7, name: "Irfan", age: "28", profession: "Manager" },
  ];

  let concatenateArr = arr.concat(arr2);
  console.log(concatenateArr);
}