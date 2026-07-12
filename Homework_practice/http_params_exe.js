import http from "http";

// 1.
function extractID(url) {
    const parts = url.split("/");
    return parts[2];
}
console.log(extractID("localhost:3000/users/10"));

// 2.
function parseQuery(url) {
    const qs = url.split("?")[1] || "";
    const split = qs.split("&");
    const join = split.join("=").split("=");
    console.log(join);
}
parseQuery("/users?role=admin&page=2");
