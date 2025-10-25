import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface ICategoryItem {
    id: number;
    title: string;
}

export const apiCategory = createApi({
   reducerPath: "apiCategory",
   baseQuery: fetchBaseQuery({
       baseUrl: "https://lohika.itstep.click/api/categories",
   }),
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], void>({
            query: () => ({
                url: 'list',
                method: 'GET'
            })
        })
    }),
});

export const {useGetCategoriesQuery} = apiCategory;