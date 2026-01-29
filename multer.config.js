import multer from 'multer';
function uploadingFiles()
{
    const uploader=multer({storage:multer.memoryStorage()});
    return uploader;
}


export default uploadingFiles;