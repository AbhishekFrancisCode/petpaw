import apiService from "./apiService";

const lservice = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getLeadersData: builder.query({
      query: (args: any) => {
        const { id, payload }: any = args;
        return {
          url: `users/update-user/${id}`,
          method: "POST",
          body: { search: payload }
        };
      }
    })
  })
});

export const { useGetLeadersDataQuery } = lservice;
