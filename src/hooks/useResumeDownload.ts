import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function useResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadResume = async () => {
    if (!resumeRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = resumeRef.current;
      
      // Temporary style adjustments for capture
      const originalStyle = element.style.cssText;
      element.style.position = "static";
      element.style.top = "0";
      element.style.left = "0";
      element.style.zIndex = "1";
      
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff"
      });
      
      // Restore styles
      element.style.cssText = originalStyle;
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Vishal_Khudai_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return { resumeRef, downloadResume, isDownloading };
}
