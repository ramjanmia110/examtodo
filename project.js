let inputName =document.getElementById("name");
let captionName =document.getElementById("caption");
let postButton =document.getElementById("post");
let updateButton =document.getElementById("update");
let displayBox =document.getElementById("displayBox");
let captionBox =document.getElementById("caption_box");
let captionHeading =document.getElementById("captionHeading");
let numberBox =document.getElementById("number_box");

let ArrayBox =[];
let indexBox ;

postButton.addEventListener("click",()=>{
   
})

postButton.addEventListener('click',()=>{

    if(Number(captionName.value)){
        numberBox.innerHTML =`
        <div id="caption_box">
                <h3 id="captionHeading">${captionName.value}</h3>
                <div class="caption_btn">
                    <button id="Play">Play</button>
                    <button id="cap_delete">Delete</button>
                </div>
               </div>
          </div>
        `
    }
    ArrayBox.push({
        name: inputName.value,
        caption :captionName.value,
    })
  
   
    inputName.value="";
    displayBox.innerHTML="";
    captionName.value ="";
    display()
})

updateButton.addEventListener('click',()=>{
    ArrayBox[indexBox].name =inputName.value;
    ArrayBox[indexBox].caption =captionName.value;

    inputName.value ="";
    captionName.value ="";
    displayBox.innerHTML ="";

    updateButton.style.display ="none";
    postButton.style.display ="inline-block";
    display()
    
    
})

function display(){
    ArrayBox.map((item)=>{
        displayBox.innerHTML +=`
         <div class="output_box">
                    <h2>${item.name}</h2>
                    <p>${item.caption}</p>
                    <div class="button_box">
                        <button id="deleteBtn" class="delete">delete</button>
                        <button id="Editbtn">Edit </button>
                    </div>
                </div>
        `
    })


    let deleteButton =document.querySelectorAll(".delete");
    
    let arrayDeleteButton =Array.from(deleteButton);
    
    arrayDeleteButton.map((item,index)=>{
        

        item.addEventListener('click',()=>{
         
           ArrayBox.splice(index,1);
            display();
            displayBox.innerHTML ="";
        })
    })


    let editButton =document.querySelectorAll("#Editbtn");
    let arrayEditButton =Array.from(editButton);

    arrayEditButton.map((item,index)=>{
        item.addEventListener('click',()=>{
            inputName.value=ArrayBox[index].name;
            captionName.value =ArrayBox[index].caption;
            updateButton.style.display ="inline-block";
            postButton.style.display ="none";

            indexBox=index;

            
        })
    })
}