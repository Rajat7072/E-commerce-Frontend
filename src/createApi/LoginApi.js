// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Define a service using a base URL and expected endpoints
// export const LoginApi = createApi({
//   reducerPath: "LoginApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
//   endpoints: (builder) => ({
//     getLoginDetail: builder.mutation({
//       query: (patch) => ({
//         url: "/api/user/login",
//         // When performing a mutation, you typically use a method of
//         // PATCH/PUT/POST/DELETE for REST endpoints
//         method: "POST",
//         // fetchBaseQuery automatically adds `content-type: application/json` to
//         // the Headers and calls `JSON.stringify(patch)`
//         body: patch,
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetLoginDetailMutation } = LoginApi;
import { toast } from "react-toastify";
import { callAuthToken } from "./authVerifyUserDetail";
export const loginfetch = async ({ email, password }) => {
  const response = await fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json_data = await response.json();

  if (json_data?.token) {
    localStorage.setItem("authtoken", json_data.token);
    callAuthToken(json_data.token, email, password);
    return true;
  } else {
    toast.info("Please enter valid Credentials", {
      position: "bottom-left",
    });
    return false;

    //window.location.href = "/";
  }
};
