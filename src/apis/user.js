export function authenticateUser(requestBody) {
  if (requestBody.otp === "1234") {
    return Promise.resolve({
      success: true,
      user: {
        name: "Dean Morgan",
        phone: "+917678678678",
        email: "dean.morgan@gmail.com"
      }
    })
  } else {
    return Promise.resolve({
      success: false,
      error: {
        code: 401,
        message: "Wrong OTP. Please try again."
      }
    })
  }
}


export function getCurrentUser() {
  return Promise.resolve({
    success: true,
    user: {
      name: "Dean Morgan",
      phone: "+917678678678",
      email: "dean.morgan@gmail.com"
    }
  });
}