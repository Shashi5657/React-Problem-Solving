import e from "express";
import { ConnectToMongo } from "./libs/mongo.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const app = e();
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(e.urlencoded({ extended: true }));
app.use(e.json());
ConnectToMongo();

app.use("/users", userRoute);
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
