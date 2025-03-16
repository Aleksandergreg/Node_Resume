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

  let navigationButton = "";

  if(options.prevUrl || options.nextUrl) {
    navigationButton = `
    <div class="flex justify-between p-4">
      ${options.prevUrl 
        ? `<a href="${options.prevUrl}" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            Previous
          </a>`
        : `<div></div>`}
      ${options.nextUrl 
        ? `<a href="${options.nextUrl}" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Next
          </a>`
        : ``}
    </div>
    `;
  }

  fullPage += footer.replace("$NEXT_BUTTON$", navigationButton);

  return fullPage;
}
