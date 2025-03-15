import { Router } from 'express';
import path from 'path';
import { readPage, constructPage } from '../util/templatingEngine.js';

const router = Router();

router.get("/", (req, res) => {
    const frontPage = readPage(path.resolve("./public/pages/frontpage/frontpage.html"));
    const page = constructPage(frontPage, { title: "Frontpage"});
    res.send(page);
});

router.get("/express", (req, res) => {
    const expressPage = readPage(path.resolve("./public/pages/express/express.html"));
    const page = constructPage(expressPage, { title: "Express Info" });
    res.send(page);
  });

  export default router;