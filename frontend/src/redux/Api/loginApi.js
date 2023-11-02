import { setToken, setUser } from "../Slices/Global";
import api from "./api";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: `${data.role}/login`,
        };
      },
      async onQueryStarted(agrs, {queryFulfilled, dispatch}){
        try{
            const {data} = await queryFulfilled;
            if(data){
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', JSON.stringify(data.token));
                dispatch(setUser(data.user));
                dispatch(setToken(data.token));
            }
        }catch(error){
            console.log(error);
        }
      }
    }),
    verfiy: builder.mutation({
        query: (data) => {
            return {
                method: "POST",
                url: '/verify',
                body: {
                    token: data,
                },
            }
        }
    })
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useVerfiyMutation } = loginApi;
