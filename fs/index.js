const fs =require ('fs');
console.log ('READ START');
// Asynchronous   way to read file
fs.readFile('input.text', function(err,data) {
    if(err){
        console.log('Error:', err);
        return err;
    }
    console.log('Data:',data.toString());
    console.log('READ end');
  return data;
});

console.log(' OTHER STUFF ');

// synchronous   way to read file
var data = fs.readFileSync('input.text')
console.log('Data :', data.toString());
console.log('READ end');
console.log(' OTHER STUFF ');
 
Read > open + read
const buf= new Buffer(1024);
fs.open('input.text','r+', function(err, fd) {
    if(err){
        console.log('Error in opening fie:',err);
    }
console.log("File open Successful :" ,err);
fs.read(fd, buf,0,buf.length,0,function (er,bytes){   //buffer=space and storage where file placed after read, 0=offset when i write in from which we write
if(er){
    console.log('error in reading file! ');
}
console.log('Data:', bytes);
console.log('Data:', buf.slice(0,bytes).toString());
fs.close(fd, function(err){
    if(err){
        console.log('Error in closing file');
    }else{
        console.log('sucess in closing file');
    }
})

})           
  });

// write to file 
fs.writeFile('input.text','Hayat Jahangir Khan',function(err){
    if(err){
        console.log('Error in writing file!');
    }else{
        console.log('Success in writing file!');
    }
});

// append to file append = edit file 
fs.appendFile("input.text","--jaaniya",'utf8',function(err){
    if(err){
                console.log('Error in Appending file!');
            }else{
                console.log('Success in Appending file!');
            }
        
});

//Deleting file
fs.unlink('input.text',function(err){
    if(err){
        console.log('Error in deleting file');
    }else{
        console.log('sucess in deleting file');
    }
});

