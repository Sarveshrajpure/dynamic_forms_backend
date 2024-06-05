import express from "express";
const router = express.Router();
import { dynamic_forms_controller } from "../controllers/dynamic_forms.controller.js";

router.get("/dynamicformsdata", dynamic_forms_controller.getDynamicFormData);

export { router as dynamicFormsRoute };
