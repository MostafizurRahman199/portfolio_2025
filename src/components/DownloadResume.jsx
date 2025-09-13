import React, { useState } from "react";

const DownloadResume = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
  setIsLoading(true);

  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=1TX8gLape-1y5mohqWIxH3zqtyJCfDW66";
  link.download = "Resume.pdf"; // Name of the file
  link.click();

  // Simulate loading state
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
};

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className={`font_body text-2xl px-6 py-3 ${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#ff5c8d]"
        } text-white font-semibold rounded-md shadow-md ${
          isLoading ? "" : "hover:bg-[#c772f0]"
        } transition flex items-center justify-center`}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <p>Downloading</p> <Spinner color="pink" />
          </span>
        ) : (
          "Download Resume"
        )}
      </button>
    </>
  );
};

export default DownloadResume;
