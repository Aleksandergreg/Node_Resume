import { Router } from 'express';
import path from 'path';
import { readPage, constructPage } from '../util/templatingEngine.js';

const router = Router();

import { frontpagePage, gitPage, nodejsPage, expressPage } from '../util/pages.js';

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/git", (req, res) => {
    res.send(gitPage);
});

router.get("/nodejs", (req, res) => {
    res.send(nodejsPage);
});

router.get("/express", (req, res) => {
    res.send(expressPage);
  });

  export default router;