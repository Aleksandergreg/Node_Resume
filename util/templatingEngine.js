import fs from 'fs';
import path from 'path';

export function readPage(filePath) {
  return fs.readFileSync(filePath).toString();
}

const header = readPage(path.resolve("./public/components/header/header.html"));
const footer = readPage(path.resolve("./public/components/footer/footer.html"));


export function constructPage(pageContent, options = {}) {
  let fullPage = header
    .replace("$NAV_TITLE$", options.title || "My Site")
    .replace("$CSS_LINKS$", options.cssLinks || "");

  fullPage += pageContent;


  fullPage += footer.replace("$NAVIGATION$", options.navigation || "");

  return fullPage;
}
