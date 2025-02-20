const Name =document.getElementsByTagName('h2');
const email=document.getElementsByClassName('email');
const city=document.getElementsByClassName('city');
const phone= document.getElementsByClassName('phone');

async function getData() {
    let data;
    try {
        const response=await fetch("https://fakestoreapi.com/users?authuser=2");
        data= await response.json();
        console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
    for(i=0;i<data.length;i++){
        Name[i].innerHTML =data[i].name.firstname+" "+data[i].name.lastname;   
        email[i].innerHTML ='Email:'+data[i].email;
        city[i].innerHTML ='City:'+data[i].address.city;
        phone[i].innerHTML='Phone No:'+data[i].phone;
        console.log(data[i])

    }
    
}
getData();


