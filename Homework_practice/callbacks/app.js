import fs from "fs";
import { constrainedMemory } from "process";

// 1.
const data = "Hello from Node fs!";
fs.writeFile("./data/message.txt", `${data}\n`, (err) => {
    if (err) {
        return console.log(`exe 1: Error: ${err}`);
    }
    console.log("exe 1: File was created successfully");
});

// 2.
console.log("exe 3: start");

fs.readFile("./data/message.txt", "utf-8", (err, data) => {
    if (err) {
        return console.log(`exe 2: Error: ${err}`);
    }
    console.log("exe 2:", data);
});

console.log("exe 3: end");

// 3.
("בגלל שקריאת הקובץ היא פעולה אסינכרונית והדפסת התחלה וסוף הם סינכרוניים לכן הם מתבצעים לפני");

// 4.
fs.readFile("./data/feckFile.txt", "utf-8", (err, data) => {
    if (err) {
        return console.log(`exe 4: Could not read file - ${err}`);
    }
    console.log("exe 4:", data);
});

// 5.
const readTextFile = (filePath, callback) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
};

readTextFile("data/message.txt", function (err, content) {
    if (err) {
        console.log(`exe5: Error: ${err}`);
        return;
    }
    console.log("exe 5:", content);
});

// 6.
const upData = "This line was added later."
fs.appendFile('./data/message.txt', upData + "\n", (err) => {
    if (err) return console.log(`exe 6: Error: ${err}`);
    console.log("exe 6: new line appended to file successfully");
});

// 7.
fs.writeFile('./data/log.txt', "Log started\n", (err) => {
    if (err) return console.log(`exe 7: Error: ${err}`);
    console.log("exe 7: log file created successfully")
    let newLines = "First action completed\nSecond action completed"
    fs.appendFile('./data/log.txt', newLines + "\n", (err) => {
        if (err) return console.log(`exe 7: Error: ${err}`);
        console.log("exe 7: log file added new lines successfully")
    });
        fs.readFile('./data/log.txt', 'utf-8', (err, data) => {
            if (err) return console.log(`exe 7: Error: ${err}`);
            console.log("exe 7:", data)
        });
});

// 8.
fs.mkdir('./data/users', { recursive: true }, (err) => {
    if (err) return console.log(`exe 8: Error: ${err}`);
    console.log("exe 8: Users folder created")
});

// 9.
fs.writeFile('./data/users/user1.txt', "Name: David\nAge: 28\n", (arr) => {
    fs.mkdir('./data/users/user1.txt', { recursive: true}, (err) => {
        if (err) {
            return console.log(`exe 9: Error: ${err}`)
        }
    });
    console.log("exe 9: file created successfully")
});

// 10.
fs.readdir('./data', 'utf-8', (err, data) => {
    if (err) return console.log(`exe 10: Error: ${err}`);
    for (let f of data) console.log(`- ${f}`)
});

// 11.
function writeFiles() {
    fs.writeFile('./data/step1.txt', "Step 1 completed", (err) => {
        if (err) return console.log(err);
        console.log("complete step1")
        fs.writeFile('./data/step2.txt', "Step 2 completed", (err) => {
            if (err) return console.log(err);
            console.log("complete step2")
            fs.writeFile('./data/step3.txt', "Step 3 completed", (err) => {
                if (err) return console.log(err);
                console.log("complete step3")
                console.log("All steps completed")
            });
        });
    });
};

writeFiles()

// 12