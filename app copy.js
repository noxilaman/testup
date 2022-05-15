const {readFile,writeFile} = require('fs')

readFile('./data/datatxt.txt','utf-8',(err,result)=> {
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./data/datatxt2.txt','utf-8',(err,result)=> {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./data/new-file.txt',
        `async data : ${first} - ${second}`,
        (err,result)=> {
            if(err){
                console.log(err);
                return
            }
            console.log(result)
        }
        )
    })
})