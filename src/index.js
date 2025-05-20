import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main", // nếu bạn có layout main.handlebars
    partialsDir: path.join(__dirname, "resources/views/partials"), // thư mục chứa partials
  })
);
app.set("view engine", "handlebars");

// Đặt thư mục views chính, chứa các file view (home.handlebars,...)
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home"); // file resources/views/home.handlebars
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
