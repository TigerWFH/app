const childProcess = require("child_process");

function masterProcess() {
    console.log("master process--->", process.pid);
    let fork = childProcess.fork("./test.js");
    fork.on("message", (msg) => {
        console.log("master--->", msg);
    });
    let i = 0;
    while(i < 10) {
        fork.send(i);
        i++;
    }
}

masterProcess();