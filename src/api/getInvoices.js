import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//
//*********NEED TO MAKE PORT DYNAMIC/ or loaded from config file *****/
export const getInvoicesApi = createApi({
    reducerPath: 'getInvoicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getInvoices: builder.query({
            query: (expurl) => `${expurl}`,
            providesTags: ['invoices']
        })
    })
});

export const { useGetInvoicesQuery } = getInvoicesApi;