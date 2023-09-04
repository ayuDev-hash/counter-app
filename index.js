

let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
value.style.fontWeight = "bold"



btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const styless = (e.currentTarget.classList);

        if(styless.contains('decrease')){
           count--;
        
        }
        else if(styless.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count < 0)
        {
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#990033";
        }
        value.textContent = count;
    });
    
}) 
