// SoftUni Reception
// Every day, thousands of students pass by the reception at SoftUni with different questions to ask. The employees have to help everyone by providing all the information and answering all of the questions.
// Three employees are working in the reception all day. Each of them can handle a different number of students per hour. Your task is to calculate how much time it will take to answer all the questions of a given number of students.
// First, you will receive 3 lines with integers, representing the number of students that each employee can help per hour. On the following line, you will receive students count as a single integer. 
// Every fourth hour, all employees have a break, so they don't work for an hour. It is the only break for the employees, because they don't need rest, nor have a personal life. Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."
// Input / Constraints
// On the first three lines -  each employee efficiency -  integer in the range [1 - 100].
// On the fourth line - students count – integer in the range [0 – 10000].
// Input will always be valid and in the range specified.
// Output
// Print a single line: "Time needed: {time}h."
// Allowed working time/memory: 100ms / 16MB.

function reception(input) {

    let emp1 = +input.shift();
    let emp2 = +input.shift();
    let emp3 = +input.shift();
    let people = +input.shift();
    let answerPerHour = emp1 + emp2 + emp3;
    let hours = 0;

    while (people > 0) {
        people -= answerPerHour;
        hours++;
        if (hours % 4 == 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}
reception(['5', '6', '4', '20'])
reception(['1', '2', '3', '45'])
reception(['3', '2', '5', '40'])