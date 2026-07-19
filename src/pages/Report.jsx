import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import ScoreOverview from "../report/ScoreOverview";
import AISummary from "../report/AISummary";
import CategorySkills from "../report/CategorySkills";
import StrengthsWeaknesses from "../report/StrengthsWeaknesses";
import ProjectAnalysis from "../report/ProjectAnalysis";
import ExperienceEducation from "../report/ExperienceEducation";
import Recommendations from "../report/Recommendations";
import FinalVerdict from "../report/FinalVerdict";
import ReportHeader from "../report/ReportHeader";
import KeywordAnalysis from "../report/KeywordAnalysis";
import { useRef } from "react";

export default function Report({ report, onAnalyzeAgain }) {
  const reportRef = useRef(null);
  if (!report) return null;

  async function handleDownload() {
    const element = reportRef.current;
    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#1a0a2e",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a3");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    pdf.save("resume-analysis-report.pdf");
  }
  return (
    <main
      
      className="min-h-screen bg-gradient-to-br from-black via-[#290d46] to-[#320b70] px-4 py-6 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <ReportHeader
          onAnalyzeAgain={onAnalyzeAgain}
          handleDownload={handleDownload}
        />

        <div ref={reportRef}>
           <ScoreOverview
          overallScore={report.overallScore}
          atsScore={report.atsScore}
          matchLevel={report.matchLevel}
          interviewProbability={report.interviewProbability}
        />

        <AISummary summary={report.summary} />

        <CategorySkills
          categoryScores={report.categoryScores}
          matchedSkills={report.matchedSkills}
          missingSkills={report.missingSkills}
        />

        <StrengthsWeaknesses
          strengths={report.strengths}
          weaknesses={report.weaknesses}
          extraHighlights={report.resumeHighlights}
        />

        <KeywordAnalysis keywordAnalysis={report.keywordAnalysis} />

        <ProjectAnalysis projectAnalysis={report.projectAnalysis} />

        <ExperienceEducation
          experienceAnalysis={report.experienceAnalysis}
          educationAnalysis={report.educationAnalysis}
          formattingAnalysis={report.formattingAnalysis}
        />

        <Recommendations
          recommendations={report.recommendations}
          atsKeywordsToAdd={report.atsKeywordsToAdd}
          missingResumeSections={report.missingResumeSections}
        />

        <FinalVerdict finalVerdict={report.finalVerdict} />
        </div>

       
      </div>
    </main>
  );
}
