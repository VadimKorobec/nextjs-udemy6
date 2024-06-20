"use server";

export async function signUp(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 5 || password.trim().length > 10) {
    errors.password =
      "Password must be at least 5 characters long but less than 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }
}
