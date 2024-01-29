"use strict";
const runAfter1s = (fn) => {
    setTimeout(fn, 1000);
};
runAfter1s(() => {
    console.log("hello-world");
});
