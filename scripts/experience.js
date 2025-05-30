let experience = {
    start: 2024,
    now: new Date().getFullYear()
}

function text_number(number) {
    if (number == 1) {
        return"one";
    } else  if(number_ == 2){
        return"two";
    } else  if(number_ == 3){
        return"three";
    }else  if(number_ == 4){
        return"four";
    }else  if(number_ == 5){
        return"two";
    }else  if(number_ == 6){
        return"six";
    }else  if(number_ == 7){
        return"seven";
    }else  if(number_ == 8){
        return"eigth";
    }else  if(number_ == 9){
        return"nine";
    }else  if(number_ == 10){
        return"ten";
    }else  if(number_ == 11){
        return"eleven";
    }else  if(number_ == 12){
        return"twelve";
    }else  if(number_ == 13){
        return"thrteen";
    }
}

window.document.querySelector('span#experience').innerHTML = text_number(experience.now - experience.start);