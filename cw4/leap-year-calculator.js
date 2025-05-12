let year = 2024;
function isLeapYear(yr){
    if (yr%4==0){
        if(yr%100==0){
            if (yr%400==0){
                return "";
            } else{
                return "not";
            }
        } else {
            return "";
        }
    } else{
        return "not";
    }
}
console.log(year+" is "+isLeapYear(year)+" a leap year");