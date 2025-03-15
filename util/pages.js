import { readPage, constructPage } from "./templatingEngine.js";
import path from 'path';

const frontpage = readPage(path.resolve('./public/pages/frontpage/frontpage.html'));
export const frontpagePage = constructPage(frontpage);

const git = readPage(path.resolve('./public/pages/git/git.html'));
export const gitPage = constructPage(git);

const nodejs = readPage(path.resolve('./public/pages/nodejs/nodejs.html'));
export const nodejsPage = constructPage(nodejs);

const express = readPage(path.resolve('./public/pages/express/express.html'));
export const expressPage = constructPage(express);

const restapi = readPage(path.resolve('./public/pages/restapi/restapi.html'));
export const restapiPage = constructPage(restapi);