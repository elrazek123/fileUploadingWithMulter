import express from 'express';
import cors from 'cors';
import uploadingFiles from './multer.config.js';
import {fileURLToPath} from 'url';
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

const app=express();
app.use(express.json());

app.use(cors());
dotenv.config();
app.post("/uploadingFiles",uploadingFiles().fields([{name:"photo",maxCount:2},{name:"cv",maxCount:1}]),(req,res,next)=>
{
try
{
    // files:
    // make the folder:
    const filePath=fileURLToPath(import.meta.url);
    const direcotryNow=dirname(filePath);
    //next to the nowest:
    const folderNow=path.join(direcotryNow,"uploads");
    if(!fs.existsSync(folderNow))
    {
        fs.mkdirSync(folderNow);
    }
    // continue to the next:
    if(req.files.photo.length>0)
    {
       // make the folder now:
       const personOne=path.join(folderNow,`/personOne${new Date().getTime()}`);
       fs.mkdirSync(personOne);
       req.files.photo.forEach((ele,index)=>
    {
        const fileOne=path.join(personOne,`fileOneImagae${index}.${ele.originalname.split(".")[1]}`);
        fs.writeFileSync(fileOne,ele.buffer);
    })
    const folderFinal=path.join(personOne,"mycv");
    fs.mkdirSync(folderFinal);
       req.files.cv.forEach((ele,index)=>
    {
        const fileRes=path.join(folderFinal,`myCv0.${ele.originalname.split(".")[1]}`);
        fs.writeFileSync(fileRes,ele.buffer);
        console.log("all is run now");
        console.log("uploaded successfully server now");
    })
    }
    
    return res.json({
        success:true,
        message:'the files is uploaded successfully',
    })
 
}
catch(err)
{
    console.log("there is an error now an error is:",err);
}
})
const port=process.env.PORT || 3000
app.listen(port,()=>
{
    console.log("the server is now run on the port",port);
})