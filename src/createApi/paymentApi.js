import axios from "axios";
export const paymentApi = async ({ cartItem, userId }) => {
  console.log(cartItem, userId);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/stripe/create-checkout-session",
      { cartItem: cartItem, userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json_data = await response.data.url;
    return json_data;
  } catch (error) {
    console.log("Api url error occured");
  }

  // .then((response) => {
  //   console.log(response.data);
  //   if (response.data.url) {
  //     console.log(response.data.url);
  //     window.location.href = response.data.url;
  //   }
  // })
  // .catch((err) => console.log("NO url present"));
  //const json_data = await response.json();
  //console.log(response);
  //localStorage.setItem("userDetail", JSON.stringify(response.data.name));
};
