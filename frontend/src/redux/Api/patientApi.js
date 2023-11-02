import api from "./api";

const patientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    patientSingUp: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: "/patient/add",
        };
      },
    }),
    doctorSingUp: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: "/admin/add",
        };
      },
    }),
    uploader: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: "/admin/upload",
        };
      },
    }),
    getReprts: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: `/patient/${data.type}`,
        };
      },
    }),
    getDoctors: builder.query({
      query: () => {
        return '/admin/doctors';
      }
    }),
    getAppointment: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: `/admin/apoint`,
        };
      }
    }),
    getList: builder.query({
      query: (data) => {
        return 'admin/list';
      }
    }),
    getPatientList: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: `/admin/patientlist`,
        };
      }
    }),
    setAppointment: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: `/admin/setapoint`,
        };
      }
    }),
    
  }),
  overrideExisting: true,
});

export const {
  usePatientSingUpMutation,
  useUploaderMutation,
  useGetReprtsMutation,
  useDoctorSingUpMutation,
  useGetDoctorsQuery,
  useGetAppointmentMutation,
  useGetListQuery,
  useSetAppointmentMutation,
  useGetPatientListMutation,
} = patientApi;
