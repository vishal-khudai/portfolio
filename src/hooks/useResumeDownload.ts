export function useResumeDownload() {
  const downloadResume = () => {
    const link = document.createElement("a");
    // Use the filename requested by the user
    const filename = "Vishal Khudai.PDF";
    // Base path from vite.config.ts is /portfolio/
    link.href = `/portfolio/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadResume, isDownloading: false };
}
