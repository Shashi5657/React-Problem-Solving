import e from "express";
import { ConnectToMongo } from "./libs/mongo.js";
import userRoute from "./routes/userRoute.js";

const app = e();
app.use(e.urlencoded({ extended: true }));
app.use(e.json());
ConnectToMongo();

app.use("/users", userRoute);
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
