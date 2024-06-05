import httpStatus from "http-status";
import { CONSTANTS } from "../constants/Constants.js";

const dynamic_forms_controller = {
  async getDynamicFormData(req, res, next) {
    try {
      res.status(httpStatus.OK).send(CONSTANTS.formData);
    } catch (err) {
      next(err);
    }
  },
};

export { dynamic_forms_controller };
