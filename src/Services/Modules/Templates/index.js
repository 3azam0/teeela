import { api } from '@Services/api';
import fetchTemplates from './FetchTemplates';

export const templatesApi = api.injectEndpoints({
    endpoints: builder => ({
        fetchTemplates: fetchTemplates(builder),


    }),


    overrideExisting: true,

});

export const { useFetchTemplatesQuery } = templatesApi;
