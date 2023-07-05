const fs = require('fs');

fs.writeFile('message.txt', 'Text written with fs.writeFile by OXiDE', (err) => {
    if (err) throw err;

    console.log("The file has been written successfuly!")
})
