let score = [];
score = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89]
function getAverage(score){
    var total = 0;
    for (var i = 0; i<score.length;i++){
        total += score[i];
    }
    return total / score.length;
}
function getGrade(score){
    switch(true){
        case (score < 60):
                return "F";
            break;
        case (score < 70):
            return "D";
            break;
        case (score < 80):
            return "C";
            break;
        case (score < 90):
            return "B";
            break;
        case (score < 100):
            return "A";
            break;
        case (score == 100):
            return "A+";
            break;
    }
}
function hasPassingGrade(score){
    if (getGrade(score) == "F"){
        return false;
    } else{
        return true;
    }
}
var student = 1;
function studentMsg(score){
    console.log("Class average: "+getAverage(score)+". Your grade: "+getGrade(score[student])+".")
    if (hasPassingGrade(student)==true){
        console.log("You passed the course");
    }else{
        console.log("You failed the course")
    }
}
studentMsg(score);