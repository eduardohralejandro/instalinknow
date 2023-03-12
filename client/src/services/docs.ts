import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { DocsList } from './types'

// Define a service using a base URL and expected endpoints
export const docsApi = createApi({
  reducerPath: 'docsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getLinks: builder.query<DocsList, void>({
      query: () => '/api/links',
    }),
    addLink: builder.mutation({
      query: (link) => ({
        url: '/api/links',
        method: 'POST',
        body: link,
      }),
    }),
  }),
})

export const { useGetLinksQuery, useAddLinkMutation } = docsApi
