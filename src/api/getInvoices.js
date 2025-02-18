import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//
//*********NEED TO MAKE PORT DYNAMIC/ or loaded from config file *****/
//*********change depending on network http://10.17.5.12:3000 *****/
export const getInvoicesApi = createApi({
  reducerPath: "getInvoicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.17.5.12:3000" }),
  // refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: (expurl) => `${expurl}`,
      providesTags: ["invoices"],
    }),
    getInvoiceById: builder.query({
      query: (id) => `api/getinvoice/${id}`,
      invalidatesTags: ["invoices"],
    }),
  }),
});

export const { useGetInvoicesQuery, useGetInvoiceByIdQuery } = getInvoicesApi;
