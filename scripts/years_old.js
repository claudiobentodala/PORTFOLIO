let years_old = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    year_born: 2009,
    month_born: 3,
    output: window.document.querySelector('span#years_old')
}
function years(){
    if (years_old.month_born <= years_old.month) {
        years_old.output.innerHTML = years_old.year - years_old.year_born 
    } else {
        years_old.output.innerHTML = -1 * (1 - (years_old.year - years_old.year_born )) 
    }
}