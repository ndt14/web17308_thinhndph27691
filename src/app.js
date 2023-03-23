import express from "express";
import routerUser from "./routes/user.js"

const app = express();
const port = 8000;
app.use(express.json());
app.use("/api", routerUser);

app.listen(port, () => {
    console.log(` ứng dụng đang chạy trong cổng : ${port}`);
})