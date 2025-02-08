const name = process.argv[2];

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
console.log(`Hours: ${hours}, Minutes: ${minutes}`);

let greeting;
if (hours < 12) {
    greeting = "Good morning";
} else if (hours < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(`${greeting}, ${name}!`);

console.log(hours);