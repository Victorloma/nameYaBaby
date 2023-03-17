import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase from '../../../config/supabaseClient'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getSavedNames: builder.query({
      queryFn: async (userId) => {
        const response = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single()

        return { data: response.data }
      },
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      queryFn: async (updatedProfile) => {
        const response = await supabase
          .from('profiles')
          .upsert({ ...updatedProfile })
        return { data: response }
      },
      invalidatesTags: ['Profile'],
    }),
  }),
})

export const { useGetSavedNamesQuery, useUpdateProfileMutation } = profileApi
