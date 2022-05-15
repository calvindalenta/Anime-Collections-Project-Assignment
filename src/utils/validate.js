export const hasSpecialChar = (text) => {
  var format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return format.test(text)
}