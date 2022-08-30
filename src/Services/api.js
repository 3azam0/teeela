import {Config} from '@Config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,

  prepareHeaders: headers => {
    // If we have a token set in state, let's assume that we should be passing it.
    headers.set('accept', 'application/json, text/plain, */*');
    headers.set('magento_store', 'en');
    headers.set('accept-language', 'en');

    headers.set('accept-version', '1.0.0');

    headers.set('api_key', 'U2FsdGVkX1+YZvFPXes6m52oRzjo/VcKtOmR3iTKONs=');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');

    return headers;
  },
});

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }
  console.warn('result', result);
  const newRes = result.data.map(itm => itm.id);
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Templates'],

  endpoints: builder => ({
    fetchTemplates: builder.query({
      query: () => 'templates',
      transformResponse: res => {
        (function newRes() {
          for (var i = 0; i < res.length; i++) {
            if (res[i].category === 'Build Your Own Design') {
              var a = res.splice(i, 1); // removes the item
              res.unshift(a[0]);
              break; // adds it back to the beginning
            }
          }
        })();
        return Object.values(
          res.reduce((acc, item) => {
            if (!acc[item.category])
              acc[item.category] = {
                category: item.category,
                products: [],
              };
            acc[item.category].products.push(item);

            return acc;
          }, []),
        );
      },
      providesTags: ['Templates'],
    }),
  }),
});

export const {useFetchTemplatesQuery} = api;
