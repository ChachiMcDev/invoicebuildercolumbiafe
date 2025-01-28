import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    invoices: [],
    loading: false,
    error: null
};

const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    // extraReducers: (builder) => {
    //     builder.addCase(fetchInvoices.pending, (state) => {
    //         state.loading = true;
    //     });
    //     builder.addCase(fetchInvoices.fulfilled, (state, action) => {
    //         state.loading = false;
    //         action.payload.forEach((invoice) => {
    //             state.push(invoice);
    //         });
    //         return state;
    //     });
    //     builder.addCase(fetchInvoices.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     });
    // }
});

export { invoiceSlice as default };