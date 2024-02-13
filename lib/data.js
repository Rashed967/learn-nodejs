// dependencies
const fs = require('fs')
const path = require('path')

// scaffolding app
const lib = {}

// base dir of data folder
lib.baseDir = path.join(__dirname,'../.data/')


// write data to file
lib.create = (dir, file, data, callback)=>{
    // open the file
    // modes = w, wx
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'wx', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            // conver data
            const stringData = JSON.stringify(data)
            // write data to the file
            fs.writeFile(fileDescriptor, stringData, (err)=>{
                if(!err){
                    // close the file
                    fs.close(fileDescriptor, (err)=>{
                        if(!err){
                            callback("successfully closing done")
                        }else{
                            callback("error file closing")
                        }
                    })
                }
            })
        }
        else{
            callback(err,"Error opening file",)
        }
    })
}


// read data 
lib.read = (dir, file, callback)=>{
    // read file data
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf-8',(err, data)=>{
        callback(err, data)
    })
}



// update data 
lib.update =  (dir, file, data, callback) =>{
    // open the file
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            // empty file data
            fs.ftruncate(fileDescriptor, (err)=>{
                if(!err){
                    // data convert 
                    const stringData = JSON.stringify(data)
                    // write data to the file
                    fs.writeFile(fileDescriptor, stringData, (err)=>{
                        if(!err){
                            //close the file
                            fs.close(fileDescriptor, (err) =>{
                                if(!err){
                                    callback("file closed successfully")
                                }else{
                                    callback("file closing error")
                                }
                            })
                        }else{
                            callback("file writing error")
                        }
                    })
                }
            })
        }else{
            callback(err,"file openning error")
        }
    })
}

// delete file 
lib.delete = (dir, file, callback)=>{
    // delte the file
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', (err) =>{
        if(!err){
            callback("deleted successfully")
        }else{
            
            callback("cannot deleted")
        }
    })
}


// export module 
module.exports = lib