import express from  "express" ;
import cors from "cors";
import compression from "compression";
import helmet from  "helmet";

const app = express();

app.use(helmet());

app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(compression());

app.get("/", (req, res )=> {
  res.json({
    status: "My API is alive!"
  });
});


app.listen(3000, () => {
    console.log("My API is hot...");
});

