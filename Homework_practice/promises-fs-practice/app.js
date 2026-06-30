const { count } = require("console");
const fs = require("fs");
const { writeFile } = require("fs/promises");
const { join } = require("path");

// 1.
function writeFileAsPromise(filePath, content) {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, content, "utf-8", (err) => {
            if (err) rej(err);
            res(content);
        });
    });
}

writeFileAsPromise("./data/message.txt", "This is my first promise!")
    .then(console.log)
    .catch(console.error);

// 2.
function readFileAsPromise(filePath) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            res(data);
        });
    });
}

readFileAsPromise("data/message.txt").then(console.log).catch(console.error);

// 3.
function readFileAndCount(filePath) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            res(data.length);
        });
    });
}

readFileAndCount("data/message.txt").then(console.log).catch(console.error);

// 4.
function appendFileAsPromise(filePath, content) {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, content, "utf-8", (err) => {
            if (err) rej(err);
            res(content);
        });
    });
}

appendFileAsPromise("data/step1.txt", "This is append step 1")
    .then(() => {
        console.log("Step 1 done");
        return writeFileAsPromise("data/step2.txt", "This is append step 2");
    })
    .then(() => console.log("Step 2 done"))
    .catch(console.error);

// 5.
readFileAsPromise("data/step1.txt")
    .then((data1) => {
        let content1 = data1;
        return readFileAsPromise("data/step2.txt");
    })
    .then((data2) => {
        let content2 = data2;
        return readFileAsPromise("data/step3.txt");
    })
    .then((data3) => {
        let content3 = data3;
        console.log("--- Reading results in chronological order ---");
        console.log("file 1:", content1);
        console.log("file 2:", content2);
        console.log("file 3:", content3);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

// 6.
let content1 = "";
let content2 = "";

writeFileAsPromise("data/report-title.txt", "Daily Report")
    .then(() =>
        writeFileAsPromise("data/report-body.txt", "Everything is working"),
    )
    .then(() => readFileAsPromise("data/report-title.txt"))
    .then((data1) => {
        content1 = data1;
        return readFileAsPromise("data/report-body.txt");
    })
    .then((data2) => {
        content2 = data2;
        let newData = `${content1}\n${content2}`;
        return writeFileAsPromise("data/final-report.txt", newData);
    })
    .then(() => console.log("success"))
    .catch(console.error);
