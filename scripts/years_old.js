let years_old = {
    year_born: 2009,
    month_born: 11,
}
let years_now = {
    year: new Date().getFullYear(),
    month: new Date().getMonth()
}
let output = {
    years_old: window.document.querySelector('span#years_old')
}
function years(){
    if (years_old.month_born <= years_now.month){
        output.years_old.innerHTML = years_now.year - years_old.year_born 
    } else {
        output.years_old.innerHTML = (years_now.year - years_old.year_born ) - 1
    }
}