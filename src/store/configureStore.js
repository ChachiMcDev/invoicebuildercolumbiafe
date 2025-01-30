import { configureStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit';
// import expensesSlice from '../slicereducers/expensesSlice';
// import filtersSlice from '../slicereducers/filterSlice';
// import authSlice from '../slicereducers/authSlice';
import { thunk } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query'
import { getInvoicesApi } from '../api/getInvoices';
import filtersSlice from '../slicereducers/filterSlice';


// import { expenseUserApi } from '../api/expenseUserApi';
// const middlewareEnhancer = applyMiddleware(thunk);
// const composedEnhancers = compose(middlewareEnhancer)

export default () => {

    const rootReducer = combineReducers({
        [getInvoicesApi.reducerPath]: getInvoicesApi.reducer,
        filters: filtersSlice.reducer,
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat([thunk,
                getInvoicesApi.middleware
            ]),
    });

    // const store = configureStore({
    //     reducer: rootReducer,
    //     middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    //         .concat([thunk,
    //             getAllExpensesApi.middleware,
    //             expenseUserApi.middleware
    //         ]),
    // });

    setupListeners(store.dispatch)

    return store;

};

