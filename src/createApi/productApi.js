import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => "/api/ProductRouter/products",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsApi;
