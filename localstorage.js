let form=document.querySelector("#hiiform")
console.log(form)

let arr=[]
form.addEventListener("submit",myFunc)
function myFunc(event){
event.preventDefault()

let Name=document.querySelector("#Name").value
console.log(Name)

let age=document.querySelector("#Age").value
console.log(age)

let email=document.querySelector("#Email").value
console.log(email)

let password=document.querySelector("#password").value
console.log(password)

let image=document.querySelector("#image").value
console.log(image)

let data={
    DName :Name,
    DAge :age,
    DEmail :email,
    DPassword :password,
    DImage :image
}


arr.push(data);
console.log(arr);

localStorage.setItem('saveData',arr)
localStorage.setItem('data',JSON.stringify(arr))

}

