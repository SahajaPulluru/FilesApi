var express=require("express");
var app=express();
const fs= require('fs');
app.get("/",function(req,res){
    const files =fs.readdir("E:/saj study/",(err,files)=>{
        const fL=[];
        if(err) throw err;
        else{
            for(const file of files){
                let fd;
                if(file.split('.').length >1){
                    fd={
                        fileName:file.split('.')[0],
                        type:'file',
                        extension:file.split('.').splice(-1)
                    };
            
                }
                else
                {
                    fd={
                        folderName:file.split('.')[0],
                        type:'folder'
                    };
                }
                fL.push(fd);
            }
            res.send(`<pre> ${JSON.stringify(fL,undefined,4)}</pre>`);
        }
        
    });
})
app.listen(3000)
