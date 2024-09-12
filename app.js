

var span1 = document.querySelector("#sec1");
var span2 = document.querySelector("#sec2");
var spanMin1 = document.querySelector("#min1");
var spanMin2 = document.querySelector("#min2");
var spanHours1 = document.querySelector("#hours1");
var spanHours2 = document.querySelector("#hours2");
var sec = 0;
var sec2 = 0;
var min = 0;
var min2 = 0;
var hours = 0;
var hours2 = 0;
var s  ;
var clearSpan1 =      span1.innerHTML
var clearSpan2 =      span2.innerHTML
var clearSpanMin1 =   spanMin1.innerHTML
var clearSpanMin2 =   spanMin2.innerHTML
var clearSpanHours1 = spanHours1.innerHTML
var clearSpanHours2 = spanHours2.innerHTML





function startTimer(){

    s = setInterval(function(){
     sec += 1;
     span1.innerHTML = sec


     if(span1.innerHTML == 10){
         span1.innerHTML = 0; 
         sec = 0; 
         sec2 += 1;
         span2.innerHTML = sec2;
            if(span2.innerHTML == 6){
                span2.innerHTML = 0;
                sec2 = 0; min += 1;
                spanMin1.innerHTML = min;

                if(spanMin1.innerHTML == 10){
                    spanMin1.innerHTML = 0; 
                    min = 0; 
                    min2 += 1;
                    spanMin2.innerHTML = min2;
                    if(spanMin2.innerHTML == 6){
                        spanMin2.innerHTML = 0;
                        min2 = 0; hours += 1;
                        spanHours1.innerHTML = hours;
                    }
                }
           
            }
                           
        }
    }, 1000)
}

function stopTimer(){
clearInterval(s);
}

 function clearAll(){
    sec = 0;
    span1.innerHTML = clearSpan1;
    span2.innerHTML = clearSpan2;
    spanMin1.innerHTML = clearSpanMin1;
    spanMin2.innerHTML = clearSpanMin2;
    spanHours1.innerHTML = clearSpanHours1;
    spanHours2.innerHTML = clearSpanHours2;
    

}






