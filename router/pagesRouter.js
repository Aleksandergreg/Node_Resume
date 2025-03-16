import { Router } from 'express';
import path from 'path';
import { readPage, constructPage } from '../util/templatingEngine.js';

const router = Router();


const buildPages = [
    { route: '/', file: 'frontpage/frontpage.html', title: 'Frontpage' },
    { route: '/git', file: 'git/git.html' },
    { route : '/nodejs', file: 'nodejs/nodejs.html' },
    { route: '/express', file: 'express/express.html' },
    { route: '/restapi', file: 'restapi/restapi.html' },
    { route: '/javascript', file: 'javascript/javascript.html' }
];

buildPages.forEach((buildPage) => {
    const contentPage = readPage(path.resolve(`./public/pages/${buildPage.file}`));
    buildPage.rendered = constructPage(contentPage, { title: buildPage.title });
});

buildPages.forEach(({ route, rendered }) => {
    router.get(route, (req, res) => {
        res.send(rendered);
    });
});

export default router;