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

  let nextButton = "";

  if(options.nextUrl) {
    nextButton = `
    <div class="flex justify-end p-4">
          <a href="${options.nextUrl}" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Next
          </a>
        </div>
    `;
  }

  fullPage += footer.replace("$NEXT_BUTTON$", nextButton);

  return fullPage;
}
