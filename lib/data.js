// dependencies
// step 1
const fs = require('fs')
const path = require('path')

// step 2
const lib = {}


// step 3
// base dir of data folder
lib.baseDir = path.join(__dirname,'../.data/')

// stpe 4.1
// write data to file
lib.create = (dir, file, data, callback) =>{
    // open file
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'wx', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
            // contver data to json string
            const stringData = JSON.stringify(data)
            // write data to file
            fs.writeFile(fileDescriptor, stringData, (err)=>{
                if(!err){
                    // close file 
                    fs.close(fileDescriptor, (err)=>{
                        if(!err){
                            console.log('file closing done')
                        }else{
                            console.log("error on closing file")
                        }
                    })
                }
            })
        }else{
            console.log("cannot open file")
        }
    })
}


// read data 
lib.read = (dir, file, callback) =>{
    // read file 
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf-8', (err, data) =>{
        callback(err, data)
    })
}


// update data 
lib.update = (dir, file, data, callback) =>{
    // open file
    fs.open(lib.baseDir+dir+"/"+file+'.json', 'r+', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
         
            // empty file 
            fs.ftruncate(fileDescriptor, (err)=>{
                if(!err){
             // convet data 
            const stringData =  JSON.stringify(data)
                    // update data 
                    fs.writeFile(fileDescriptor, stringData, 'utf-8', (err)=>{
                        if(!err){
                            // close file 
                            fs.close(fileDescriptor, (err)=>{
                                if(!err){
                                    callback("successfully file closed")
                                }else{
                                    callback("file closing failed")
                                }
                            })
                        }else{
                            callback("writing failed")
                        }
                    })
                }
            })
        }else{
            callback("cannot open the file")
        }
    })
}


// delete file 
lib.delete = (dir, file, callback) =>{
    // delete file 
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', (err)=>{
    if(!err){
        callback("successfully deleted file")
    }else{
        callback("error deleting file")
    }
    })
}

module.exports = lib;
