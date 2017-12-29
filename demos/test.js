function child() {
    console.log("child pid--->", process.pid);
    process.on("message", (msg) => {
        console.log("child--->", msg);
        if (msg === 9) {
            process.disconnect();
        }
    });
    let i = 0;
    while(i < 10) {
        process.send(i);
        i++;
    }
}

child();