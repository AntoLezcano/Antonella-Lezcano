import { body } from "express-validator";

export const createOrderValidation = [
    // Validacion tipo post "post"createOrderCtrl
    body("coffee")
        .isString().withMessage("Invalid coffee")
        .notEmpty().withMessage("Missing coffee"),
]