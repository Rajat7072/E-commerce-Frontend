import axios from "axios";
import { toast } from "react-toastify";
export const callAuthToken = async (tokenValue, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/login/auth",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${tokenValue}`,
        },
      }
    );

    // const json_data = await response.data();
    // console.log(response.data);

    localStorage.setItem("userDetail", JSON.stringify(response.data));
  } catch (error) {
    console.log("some error occured");
  }
};
