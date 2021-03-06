"use strict";
let myJson;


document.addEventListener("DOMContentLoaded",getData);
async function getData() {  
//load the svg
const jsonData = await fetch("https://kea-alt-del.dk/customersupport/");
 myJson = await jsonData.json();
console.log(myJson);
let number =10;
showData(myJson, number);
document.querySelector("#loadmore").addEventListener("click", ()=>{
    showData(myJson, 10)
    })
 }
 
function showData(data, number){
    let list = document.querySelector("#list");
    let template = document.querySelector("#template").content;
    
    data.forEach((request,i)=>{
        console.log(i);
        let clone = template.cloneNode(true);
        let message = clone.querySelector("#message"); 
        let name = clone.querySelector("#name span");
        let date = clone.querySelector("#date span"); 
        let time = clone.querySelector("#time span");  
        let place = clone.querySelector("#place span");
        let fullMessage = clone.querySelector("#fullmessage");
        let button = clone.querySelector("#readmore");
        let buttonsolved = clone.querySelector("#remove");
        let importance = clone.querySelector("#importance span");

     
           

        message.textContent = request.message; 
        place.textContent = request.place;
        name.textContent = request.first + " ";
        if (request.middle !== undefined) {
            name.textContent += request.middle + " "; 
        }
        name.textContent += request.last;
        date.textContent = request.time.year + "/" + request.time.month + "/" + request.time.day;
        time.textContent = request.time.hour + ":" + request.time.minute + ":" + request.time.second;
        fullMessage.textContent = request.full;
        importance.textContent = request.importance;
        if (request.importance < 30){
            clone.getElementById("container").style.background = "rgba(33,94,28,0.5)";
         };
         if (request.importance >= 30){
            clone.getElementById("container").style.background = "rgba(255,255,0,0.5)";
         };
         if (request.importance >= 60){
            clone.getElementById("container").style.background = "rgba(255,0,0,0.5)";
         };
        if (i<= number){
            list.appendChild(clone);
        } ;
         
        buttonsolved.addEventListener("click", function(e){
            console.log(e.target.parentElement.parentElement.parentElement.remove());
            
        })
       
        list.appendChild(clone);
        console.log(request);


      
       
    });
   
};

