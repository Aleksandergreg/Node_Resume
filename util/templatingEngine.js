import fs from 'fs';
import path from 'path';

export function readPage(filePath) {
    return fs.readFileSync(filePath).toString;
}

const header = readPage(path.resolve("./public/components/header/header.html"));
const footer = readPage(path.resolve("./public/components/footer/footer.html"));

export function constructPage(pageContent, options = {}) {
    let fullPage = header
      .replace("$NAV_TITLE$", options.title || "My Site");
      
  
    fullPage += pageContent;
  
    fullPage += footer;
  
    return fullPage;
  }