import axios from "axios";
export const shippingAddressApi = async ({
  AdminName,
  name,
  address_one,
  address_two,
  city,
  state,
  zipcode,
  phone,
}) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/shippingAddress",
      {
        AdminName,
        name,
        address_one,
        address_two,
        city,
        state,
        zipcode,
        phone,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("shipping Address Api");
    const json_data = await response.data;
    console.log(json_data);
  } catch (error) {
    console.log(error);
    console.log("some Internal Axios-Api error occured");
  }
};
