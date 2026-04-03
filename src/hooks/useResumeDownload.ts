export function useResumeDownload() {
  const downloadResume = () => {
    const link = document.createElement("a");
    // Use the base path from vite.config.ts
    link.href = "/portfolio/Vishal_Khudai_Resume.pdf";
    link.download = "Vishal_Khudai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadResume, isDownloading: false };
}
