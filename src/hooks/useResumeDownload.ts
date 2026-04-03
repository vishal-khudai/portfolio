export function useResumeDownload() {
  const downloadResume = () => {
    // Direct download link for the Google Drive file provided by the user
    const driveDownloadUrl = "https://drive.google.com/uc?export=download&id=1QJIh-hRWU6A6aTlogyBje6COFJj-EPRR";
    
    const link = document.createElement("a");
    link.href = driveDownloadUrl;
    // Note: 'download' attribute might not work for cross-origin URLs like Google Drive, 
    // but the 'uc?export=download' parameter handles the download behavior.
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadResume, isDownloading: false };
}
