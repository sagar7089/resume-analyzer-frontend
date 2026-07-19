import React, { useEffect, useState } from "react";
import Dropzone from "../components/Dropzone";
import { FcDocument } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import AnalyzingLoader from "../components/AnalyzingLoader"
import Report from "./Report";
import * as pdfjsLib from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;


function Home() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [resumeText, setResumeText] = useState(null);
  const[error,setError] = useState("")
  const[loading,setLoading] = useState(false)
  const[report,setReport] = useState(null)


  async function analyzeResume(jobDesc,resumeText){
    setLoading(true)
    setError("")
    setReport(null)
    try {
      console.log({jobDesc,resumeText});
      
      let res = await fetch(`${import.meta.env.VITE_API_URL}/api/analyze`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDesc, resumeText })
      })

      const data = await res.json()
       if (data.success === false) {
        setError(data.error.message);
      } else {
        setReport(data);
        
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong while analyzing. Please try again.");
    }finally{
      setLoading(false)
    } 
  }

 function onAnalyzeAgain() {
  setReport(null);
  setResumeFile(null);
  setResumeText(null);
  setJobDesc("");
  setError("");
}

  useEffect(() => {
    if (resumeFile) {
      extractTextFromPDF(resumeFile)
        .then((text) => setResumeText(text))
        .catch((err) => console.log(err));
    }
  }, [resumeFile]);

  async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }
    return fullText;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!jobDesc.trim()){
      setError("Job Description cannot be empty")
      return;
    }else{
      analyzeResume(jobDesc,resumeText)
    }
  }

 return (
  report ? (
   <Report report={report} onAnalyzeAgain={onAnalyzeAgain} />
  ) :loading ? 
  <>
  <AnalyzingLoader/>
  </> 
  : (
    <main className="text-center flex items-center justify-center w-full h-screen bg-gradient-to-br from-black via-[#290d46] to-[#320b70]">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-white text-6xl font-bold">AI Resume Analyzer</h1>
        <p className="text-sm text-purple-200">
          Upload your PDF resume and get instant AI feedback
        </p>
        {resumeFile ? (
          <div className=" mt-2 p-2 h-20 rounded w-70 flex flex-col items-center justify-center text-white border border-amber-50 relative">
            <RxCross1
              onClick={() => setResumeFile(null)}
              className="absolute top-3 right-3 p-1 rounded-full bg-white/10 hover:bg-red-500 transition"
            />
            <FcDocument className="text-4xl " />
            <p>{resumeFile.name}</p>{" "}
            <span>{`${(resumeFile.size / 1024).toFixed(2)} kb`}</span>
          </div>
        ) : (
          <Dropzone setResumeFile={setResumeFile} />
        )}
        {resumeFile && (
          <form
            className="flex flex-col text-start mt-2 gap-2"
            onSubmit={handleSubmit}
          >
            <label htmlFor="jobDesc" className=" text-white">
              Job Description
            </label>
            <textarea
              onChange={(e) => setJobDesc(e.target.value)}
              value={jobDesc}
              id="jobDesc"
              className="text-white h-40 w-80 p-4 text-left rounded-xl bg-white/10 border border-white/20 resize-none outline-none"
              placeholder="Enter Job Description"
            />
            {error && <p className="text-sm text-red-500 m-1">*{error}</p>}
            <button className="cursor-pointer bg-[#290d46] hover:bg-violet-500 text-white font-semibold p-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/40">
              Analyze
            </button>
            {loading && <p>Analyzing....</p>}
          </form>
        )}
      </div>
    </main>
  )
);
}

export default Home;
