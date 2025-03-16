import { Router } from 'express';
import path from 'path';
import { readPage, constructPage } from '../util/templatingEngine.js';

const router = Router();


const buildPages = [
    { route: '/', file: 'frontpage/frontpage.html' }
];

buildPages.forEach((buildPage) => {
    const contentPage = readPage(path.resolve(`./public/pages/${buildPage.file}`));
    buildPage.rendered = constructPage(contentPage);
});

buildPages.forEach(({ route, rendered }) => {
    router.get(route, (req, res) => {
        res.send(rendered);
    });
});

export default router;