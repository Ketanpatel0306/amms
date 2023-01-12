require("dotenv").config();
const express = require("express");
const next = require("next");
const { object } = require("yup/lib/locale");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/home", (req, res) => {
    app.render(req, res, "/home");
  });

  server.get("/acl", (req, res) => {
    app.render(req, res, "/acl");
  });

  server.get("/admin-profile/edit", (req, res) => {
    app.render(req, res, "/admin-profile/edit");
  });

  server.get("/customer/list", (req, res) => {
    app.render(req, res, "/customer/list");
  });

  server.get("/customer/Add", (req, res) => {
    app.render(req, res, "/customer/Add");
  });

  server.get("/customer/view", (req, res) => {
    app.render(req, res, "/customer/view");
  });

  server.get("/employee/edit/:id", (req, res) => {
    const id = req.params.id;
    const queryParams = Object.assign({ id: id }, req.params, req.query);
    app.render(req, res, "/employee/edit", queryParams);
  });

  server.get("/employee/view/:id", (req, res) => {
    const id = req.params.id;
    const queryParams = Object.assign({ id: id }, req.params, req.query);
    app.render(req, res, "/employee/view", queryParams);
  });

  server.get("/account/company/edit/:id", (req, res) => {
    const id = req.params.id;
    const queryParams = Object.assign({ id: id }, req.params, req.query);
    app.render(req, res, "/employee/edit", queryParams);
  });

  server.get("/account/company/view/:id", (req, res) => {
    const id = req.params.id;
    const queryParams = Object.assign({ id: id }, req.params, req.query);
    app.render(req, res, "/employee/view", queryParams);
  });

  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
