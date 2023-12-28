

var radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);

radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);

radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);

radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);

radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);

radio = document.createElement("input");
radio.setAttribute('type' , 'radio');
document.body.appendChild(radio);




var radioButtons = document.querySelectorAll("input[type='radio']");
for(var i = 0; i < radioButtons.length; i++){

    radioButtons [i].addEventListener("change" , (ev)=> {
        //1. У стрелочной функции нету this.
        //2.Событие к которому привязана функция передается ей в качестве первого параметра
        if(ev.target.checked){
            //У произошедшего события есть поле target ,которое хранит обьект вызвавший событие//
            ev.target.style.display ="none";
        }
    });
    
}

