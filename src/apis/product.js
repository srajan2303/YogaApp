export function getPackageList() {
  return Promise.resolve({
    success: true,
    packageList: [
      {
        id: 1,
        months: 6,
        oldPrice: 12999,
        currentPrice: 5499
      },
      {
        id: 2,
        months: 3,
        oldPrice: 5999,
        currentPrice: 2999
      },
      {
        id: 3,
        months: 1,
        oldPrice: 1999,
        currentPrice: 1199
      }
    ]
  });
}

export function getPackageSlots() {
  return Promise.resolve({
    success: true,
    packageSlots: [
      {
        date: "2024-02-15",
        timeSlots: [
          {
            id: 1,
            startTime : "06:00 AM",
            endTime : "07:00 AM",
            days : [1,2,3,4,5]
          },
          {
            id: 2,
            startTime : "07:00 AM",
            endTime : "09:00 AM",
            days : [1,3,4]
          },
        ]
      },
      {
        date: "2024-02-16",
        timeSlots: [
          {
            id: 1,
            startTime : "08:00 AM",
            endTime : "09:00 AM",
            days : [1,4,5]
          },
          {
            id: 2,
            startTime : "07:00 PM",
            endTime : "08:00 PM",
            days : [1,2,3,4]
          },
          {
            id: 3,
            startTime : "08:00 PM",
            endTime : "09:00 PM",
            days : [1,2,3,4]
          },
        ]
      },
      {
        date: "2024-02-18",
        timeSlots: [
          {
            id: 1,
            startTime : "08:00 AM",
            endTime : "09:00 AM",
            days : [1,2,4,5]
          },
          {
            id: 2,
            startTime : "09:00 AM",
            endTime : "10:00 AM",
            days : [1,2,3,5]
          },
          {
            id: 3,
            startTime : "08:00 PM",
            endTime : "09:00 PM",
            days : [1,2,3,4]
          },
        ]
      },
      {
        date: "2024-02-19",
        timeSlots: [
          {
            id: 1,
            startTime : "09:00 AM",
            endTime : "10:00 AM",
            days : [1,4,5]
          },
          {
            id: 2,
            startTime : "10:00 AM",
            endTime : "11:00 AM",
            days : [1,4,5]
          },
        ]
      },
      {
        date: "2024-02-20",
        timeSlots: [
          {
            id: 1,
            startTime : "05:00 AM",
            endTime : "06:00 AM",
            days : [1,2,3,4,5]
          },
          {
            id: 2,
            startTime : "06:00 AM",
            endTime : "07:00 AM",
            days : [1,2,3,4,5]
          },
        ]
      },
      {
        date: "2024-02-21",
        timeSlots: [
          {
            id: 1,
            startTime : "07:00 AM",
            endTime : "08:00 AM",
            days : [1,4,5]
          },
          {
            id: 2,
            startTime : "09:00 AM",
            endTime : "10:00 AM",
            days : [1,2,5]
          },
          {
            id: 3,
            startTime : "09:00 PM",
            endTime : "10:00 PM",
            days : [1]
          },
        ]
      },
      {
        date: "2024-02-22",
        timeSlots: [
          {
            id: 1,
            startTime : "06:00 AM",
            endTime : "07:00 AM",
            days : [1]
          },
          {
            id: 2,
            startTime : "08:00 AM",
            endTime : "09:00 AM",
            days : [1,2,3,4]
          },
        ]
      },
      {
        date: "2024-02-25",
        timeSlots: [
          {
            id: 1,
            startTime : "05:00 AM",
            endTime : "06:00 AM",
            days : [1]
          },
          {
            id: 2,
            startTime : "04:00 PM",
            endTime : "05:00 PM",
            days : [1,]
          },
        ]
      }
    ]
  });
}