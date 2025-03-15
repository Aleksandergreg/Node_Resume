import fs from 'fs';
import path from 'path';

export function readPage(filePath) {
  return fs.readFileSync(filePath).toString();
}

const header = readPage(path.resolve("./public/components/header/header.html"));
const footer = readPage(path.resolve("./public/components/footer/footer.html"));

/**
 * Wraps the given `pageContent` between a header and footer, 
 * and replaces custom placeholders if needed.
 *
 * @param {string} pageContent - The main body content for the page.
 * @param {object} options - Additional replacements for placeholders.
 * @returns {string}
 */

export function constructPage(pageContent, options = {}) {
  let fullPage = header
    .replace("$NAV_TITLE$", options.title || "My Site")
    .replace("$CSS_LINKS$", options.cssLinks || "");

  fullPage += pageContent;

  fullPage += footer;

  return fullPage;
}
