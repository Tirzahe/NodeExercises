/*
EXERCISE 6:

        Write a small function called "grade" that takes a parameter called "score" and returns the grade that corresponds to that "score".

        Grading Table:
            0-59: 'F'
            60-69: 'D'
            70-79: 'C'
            80-89: 'B'
            90-100: 'A'
        
        For example:

        grade(3) should return 'F'
        grade(89) should return 'B'
        grade(90) should return 'A'
*/

function grade(score){
    if (score >= 0 && score <= 59){ 
        return 'F';
    }
    if (score >= 60 && score <= 69){ 
        return 'D';
    }
    if (score >= 70 && score <= 79){ 
        return 'C';
    }
    if (score >= 80 && score <= 89){ 
        return 'B';
    }
    if (score >= 90 && score <= 100){ 
        return 'A';
    }
}