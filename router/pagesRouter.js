import { Router } from "express";
import path from "path";
import { readPage, constructPage } from "../util/templatingEngine.js";
import { getNavigationButton } from "../util/navigationService.js";

const router = Router();

const buildPages = [
  { route: "/", file: "frontpage/frontpage.html", title: "Frontpage", link: "frontpage.css" },
  { 
    route: "/git", 
    file: "git/git.html",
    title: "Git Documentation", 
    favicon: "/assets/images/git.png" 
  },
  {
    route: "/nodejs",
    file: "nodejs/nodejs.html",
    title: "Node.js Documentation",
    favicon: "/assets/images/node.png"
  },
  {
    route: "/express",
    file: "express/express.html",
    title: "Express Documentation",
    favicon: "/assets/images/express.png"
  },
  {
    route: "/restapi",
    file: "restapi/restapi.html",
    title: "Rest API Documentation",
    favicon: "/assets/images/restapi.png"
  },
  {
    route: "/javascript",
    file: "javascript/javascript.html",
    title: "JavaScript Documentation",
    favicon: "/assets/images/javascript.png"
  }
];

buildPages.forEach((buildPage, index) => {
  const contentPage = readPage(
    path.resolve(`./public/pages/${buildPage.file}`)
  );

  let nextUrl = "";
  let prevUrl = "";
  if (index < buildPages.length - 1) {
    nextUrl = buildPages[index + 1].route;
  }

  if (index > 0) {
    prevUrl = buildPages[index - 1].route;
  }

  const navigation = getNavigationButton({ prevUrl, nextUrl });
  buildPage.rendered = constructPage(contentPage, {
    title: buildPage.title,
    cssLinks: buildPage.link,
    navigation,
    favicon: buildPage.favicon
  });
});

buildPages.forEach(({ route, rendered }) => {
  router.get(route, (req, res) => {
    res.send(rendered);
  });
});

export default router;
