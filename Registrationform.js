var myform = document.querySelector("#form");
console.log(myform)

// let box =document.querySelector("container")
// console.log(box)

const arr=[]

myform.addEventListener('submit',saveData)
function saveData(e){
   e.preventDefault()
  var name = document.querySelector("#Name").value
  console.log(name)

  var Email = document.querySelector("#Email").value
  console.log(Email)

  var contact = document.querySelector("#contact").value
  console.log(contact)

  var Aadhar =document.querySelector("#Aadhar").value
  console.log(Aadhar)

  var Address =document.querySelector("#Address").value
  console.log(Address)

  var permanentaddress =document.querySelector("#peraddress").value
  console.log(peraddress)

//   var Gender =document.querySelector("#Gender").value
//   console.log(Gender)


  const data = {
   PName : name,
   Pemail : Email,
   pcontact : contact,
   pAadharid : Aadhar,
   pAddress : Address,
   pperaddress : peraddress,
   //pGender : Gender
  }
  console.log(data)
  arr.push(data)
  console.log(arr)
  Display(arr) 
}

function Display(arr){
   document.querySelector("tbody").innerHTML=" "
   arr.forEach(function(data){
       let tr=document.createElement("tr");

       let name =document.createElement("td");
       name.innerText=data.PName;

       let email =document.createElement("td");
       email.innerText=data.Pemail;

       let contact =document.createElement("td");
       contact.innerText = data.pcontact;

       let Aadhar =document.createElement("td");
       Aadhar.innerText = data.pAadharid

       let Address =document.createElement("td");
       Address.innerText = data.pAddress;

       let peraddress =document.createElement("td");
       peraddress.innerText = data.pperaddress;

      //  let Gender =document.createElement("td");
      //  Gender.innerText = data.pGender;

       tr.append(name,email,contact,Aadhar,Address,peraddress);
       document.querySelector("tbody").append(tr);

      //  box.appendChild('tbody')
      //  .append('tr')
   });

    
}l