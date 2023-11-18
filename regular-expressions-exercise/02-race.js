// Race
// Write a function that processes information about a race. On the first line, you will be given a list of participants
// separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will
// be some alphanumeric characters. In between them, you could have some extra characters which you should
// ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits
// is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the
// list of racers contains the name of the person. If you receive the same person more than once just add the
// distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
// 1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}

function solve(input) {

    let names = input.shift().split(', ');

    let lettersPattern = /[a-z]/gi;
    let distancePattern = /\d/g;

    let results = {};
    names.forEach(name => results[name] = 0);

    let command = input.shift();

    while (command != 'end of race') {

        let matchName = command.match(lettersPattern).join('');
        let matchDistance = command.match(distancePattern).map(Number).reduce((acc, val) => acc + val);

        for (let property in results) {
            if (property == matchName) {
                results[property] += matchDistance;
            }
        }
        command = input.shift();
    }

    let sortedEntries = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedEntries[0][0]}`);
    console.log(`2nd place: ${sortedEntries[1][0]}`);
    console.log(`3rd place: ${sortedEntries[2][0]}`);
}
// solve(['George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race']
// )

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)