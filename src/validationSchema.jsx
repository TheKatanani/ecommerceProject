import { boolean, object, ref, string } from 'yup';
import { passwordRegexStrong, phoneNumberRegex } from './Regex';

export const validationSchemaSignIn = object().shape({
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  isChecked:
    boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
});
export const validationSchemaRegister = object().shape({
  name:
    string()
      .min(6, "Name should be more than 6 characters long")
      .max(20)
      .required("Name is required"),
  Surname:
    string()
      .min(6, "Surname should be more than 6 characters long")
      .max(20)
      .required("Name is required"),
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password:
    string()
      .min(8, "Password must be at least 8 characters long")
      .matches(passwordRegexStrong, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character")
      .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
  phoneNumber:
    string()
      .matches(phoneNumberRegex, "Invalid phone number the valid phone'00-000-00-00'")
      .required("Phone number is required"),
  isChecked:
    boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
});

