import fs from "fs";
import path from "path";

const makeDirectory = (filePath: string): void => {
  // Check if the file already exists
  if (!fs.existsSync(filePath)) {
    const directoryPath = path.dirname(filePath);

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
  }

  return;
};

export default makeDirectory;
