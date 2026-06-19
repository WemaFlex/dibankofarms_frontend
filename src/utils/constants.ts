export const telcoOpLogos = {
  AIRTELTIGO: "/airteltigo.png",
  MTN: "/mtnghlogo.jpg",
  VODAFONEGH: "/tcashlogo.jpg",
};

const one = {
  booking_type: "one_time",
  trip_schedules: [
    {
      trip_day: "monday",
      pick_up_time: "2025-10-04T20:38:24.741312Z",
      pick_up_location: {
        latitude: 0.0,
        longitude: 0.0,
        address: "jkj",
      },
      drop_off_location: {
        latitude: 0.0,
        longitude: 0.0,
        address: "jkjkj",
      },
    },
  ],
};

// the final request body:
const two = {
  booking_type: "one_time",
  trip_schedules: [
    {
      trip_day: "monday",
      pick_up_time: "2025-10-04T21:38:25.870677Z",
      pick_up_location: { latitude: 0.0, longitude: 0.0, address: null },
      drop_off_location: { latitude: 0.0, longitude: 0.0, address: null },
    },
  ],
};

const three = {
  detail: [
    {
      type: "missing",
      loc: ["body", "payment_type"],
      msg: "Field required",
      input: {
        booking_type: "one_time",
        trip_schedules: [
          {
            trip_day: "monday",
            pick_up_time: "2025-10-04T21:38:25.870677Z",
            pick_up_location: {
              latitude: 5.5547,
              longitude: -0.1921,
              address: "12New Mont Oak City Street",
            },
            drop_off_location: {
              latitude: 5.6037,
              longitude: -0.1869,
              address: "21 Oak City Street",
            },
          },
        ],
      },
    },
  ],
};
