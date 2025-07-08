// src/validation/contactSchemaValidation.js
import * as Yup from "yup";

const contactSchemaValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default contactSchemaValidation;
