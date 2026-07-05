// 1.
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));

async function getUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json()
        console.log(data);
    }
    catch (err) {
        console.log(`Error: ${err}`)
    }
}

getUser(5)


// 2.
async function done() {
    return console.log("Done")
};

await done()

// 3.
async function square(number) {
    return console.log(number ** 2)
};

await square(5)

// 4.
async function doubleCallApi() {
    try {
        const api1 = await fetch("https://jsonplaceholder.typicode.com/todos/20")
        const api2 = await fetch("https://jsonplaceholder.typicode.com/todos/10")
        const data = [await api1.json(), await api2.json()]
        console.log(data);
    }
    catch (err) {
        console.log(err)
    };
};

doubleCallApi()


async function fetchThreeApisParallel() {
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";

    try {
        const promises = [
            fetch(url1).then(res => res.json()),
            fetch(url2).then(res => res.json()),
            fetch(url3).then(res => res.json())
        ];
        const [data1, data2, data3] = await Promise.all(promises);
        console.log([data1, data2, data3])
    }
    catch (err) {
        console.log(`Error: ${err}`)
    };
};

fetchThreeApisParallel()