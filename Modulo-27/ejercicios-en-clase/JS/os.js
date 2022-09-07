const os = required('os');
//console.log(os);
console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})
