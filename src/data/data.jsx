const schoolData = {
  students: [
    {
      id: 1,
      name: "John Doe",
      img: "img/john-doe.jpg", // mock image
      age: 16,
      grade: 10,
      subjects: ["Math", "Science", "English"],
      attendance: [
        { date: "2022-01-03", present: true },
        { date: "2022-01-04", present: false },
        { date: "2022-01-05", present: true },
        { date: "2022-01-06", present: true },
        { date: "2022-01-07", present: true },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "img/john-doe.jpg", // mock image
      age: 15,
      grade: 9,
      subjects: ["Math", "Science", "Social Studies"],
      attendance: [
        { date: "2022-01-03", present: true },
        { date: "2022-01-04", present: true },
        { date: "2022-01-05", present: true },
        { date: "2022-01-06", present: true },
        { date: "2022-01-07", present: false },
      ],
    },
  ],
  teachers: [
    {
      id: 1,
      name: "Mr. Johnson",
      img: "img/john-doe.jpg", // mock image
      age: 35,
      subjects: ["Math", "Science"],
      classes: ["10A", "10B"],
    },
    {
      id: 2,
      name: "Ms. Brown",
      img: "img/john-doe.jpg", // mock image
      age: 28,
      subjects: ["English", "Social Studies"],
      classes: ["9A", "9B"],
    },
  ],
  classes: [
    {
      id: 1,
      name: "10A",
      students: [1, 3, 5],
      img: "img/john-doe.jpg", // mock image
      teacher: 1,
      schedule: [
        { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math" },
        { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "Science" },
        { day: "Wednesday", time: "9:00 AM - 10:00 AM", subject: "Math" },
        { day: "Thursday", time: "9:00 AM - 10:00 AM", subject: "Science" },
        { day: "Friday", time: "9:00 AM - 10:00 AM", subject: "Math" },
      ],
    },
    {
      id: 2,
      name: "10B",
      students: [2, 4, 6],
      img: "img/john-doe.jpg", // mock image
      teacher: 1,
      schedule: [
        { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
        { day: "Tuesday", time: "10:00 AM - 11:00 AM", subject: "Math" },
        { day: "Wednesday", time: "10:00 AM - 11:00 AM", subject: "Science" },
        { day: "Thursday", time: "10:00 AM - 11:00 AM", subject: "Math" },
        { day: "Friday", time: "10:00 AM - 11:00 AM", subject: "Science" },
      ],
    },
    {
      id: 3,
      name: "9A",
      students: [7, 9, 11],
      img: "img/john-doe.jpg", // mock image
      teacher: 2,
      schedule: [
        { day: "Monday", time: "11:00 AM - 12:00 PM", subject: "English" },
        {
          day: "Tuesday",
          time: "11:00 AM - 12:00 PM",
          subject: "Social Studies",
        },
        { day: "Wednesday", time: "11:00 AM - 12:00 PM", subject: "English" },
        {
          day: "Thursday",
          time: "11:00 AM - 12:00 PM",
          subject: "Social Studies",
        },
        { day: "Friday", time: "11:00 AM - 12:00 PM", subject: "English" },
      ],
    },
    {
      id: 4,
      name: "9B",
      students: [8, 10, 12],
      img: "img/john-doe.jpg", // mock image
      teacher: 2,
      schedule: [
        {
          day: "Monday",
          time: "12:00 PM - 1:00 PM",
          subject: "Social Studies",
        },
        { day: "Tuesday", time: "12:00 PM - 1:00 PM", subject: "English" },
        {
          day: "Wednesday",
          time: "12:00 PM - 1:00 PM",
          subject: "Social Studies",
        },
        { day: "Thursday", time: "12:00 PM - 1:00 PM", subject: "English" },
        {
          day: "Friday",
          time: "12:00 PM - 1:00 PM",
          subject: "Social Studies",
        },
      ],
    },
  ],
};

export default schoolData;
