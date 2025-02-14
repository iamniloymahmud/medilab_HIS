import hospitalApi from "./api";

export const doctorApi = hospitalApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctorsAppointments: builder.query({
      query: () => "/doctor/appointments/",
    }),
  }),
});

export const { useGetDoctorsAppointmentsQuery } = doctorApi;
