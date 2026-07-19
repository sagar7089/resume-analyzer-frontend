import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcDocument } from "react-icons/fc";
function Dropzone({setResumeFile}) {
 const [rejectMsg,setRejectMsg] = useState(null)
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop : useCallback((files)=>{
      setResumeFile(files[0]) 
    },[setResumeFile])
  ,
  multiple:false,
   accept: {
    "application/pdf": [".pdf"],
  },
  onDropRejected : (rejectError)=>{
    setRejectMsg(rejectError)
  }
});
  return (
    <div
      className="
    h-60 w-80
    md:w-[80%] flex items-center justify-center border rounded mt-2 bg-white/10 backdrop-blur-lg  border-purple-400/40  transition-all duration-300 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/30"
    >
      <div
        {...getRootProps()}
        className="border h-[80%] w-[80%] border-dashed border-purple-400/40 text-center flex flex-col items-center justify-center rounded  "
      >
        <input {...getInputProps()} />
        <FcDocument className="text-4xl " />
        {isDragActive ? (
          <p className=" text-purple-200">Drop Your files here</p>
        ) : (
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-white">Upload Your Resume</p>
            <p className="text-purple-200 text-sm">
              PDF files only. Get instant analysis
            </p>
            <span className="
          w-[80%] md:w-full
            cursor-pointer bg-[#290d46] hover:bg-violet-500 text-white font-semibold p-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/40">
              Drag 'n' Drop files or Click to Choose Files
            </span>
            {
              rejectMsg && <p className="text-sm text-red-500 ">*Only PDF files are supported</p>
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropzone;
