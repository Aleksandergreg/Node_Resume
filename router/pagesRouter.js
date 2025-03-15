import { Router } from "express";
import path from "path";
import { readPage, constructPage } from "../util/templatingEngine.js";

const router = Router();


router.get("/express", (req, res) => {
    const expressPage = readPage(path.resolve("./public/pages/express/express.html"));
    const page = constructPage(expressPage, { title: "Express Info" });
    res.send(page);
  });

  export default router;