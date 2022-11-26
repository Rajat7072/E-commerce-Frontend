import { toast } from "react-toastify";

export const signupPush = async ({ name, email, password }) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/user/signup/signupuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const json_data = await response.json();

    if (json_data?.token) {
      toast.info("Details saved successfully", {
        position: "bottom-left",
      });
      window.location.href = "/api/ProductRouter/products";
    } else {
      toast.warn("Please register again Server Down", {
        position: "bottom-left",
      });
      window.location.href = "/signup";
    }
  } catch (error) {
    toast.info("Server not responding please try after some time", {
      position: "bottom-left",
    });
  }
};
