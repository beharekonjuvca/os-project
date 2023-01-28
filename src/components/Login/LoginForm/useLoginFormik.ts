import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .oneOf(["Admin123"], "Not quite the right password!")
    .required("Don't forget to put the password first!"),
});

interface LoginFields {
  password: string;
}

interface FormikProps {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = ({ onSubmit }: FormikProps) => {
  return useFormik({
    initialValues: {
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
