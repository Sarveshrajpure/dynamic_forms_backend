import express from "express";
const router = express.Router();
import { dynamicFormsRoute } from "./dynamicForms.routes.js";

router.use("/forms", dynamicFormsRoute);

export { router as routes };
