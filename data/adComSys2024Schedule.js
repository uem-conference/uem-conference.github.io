// data/adComSys2024Schedule.js
const adComSys2024Schedule = {
  title:
    "First International Conference on Advanced Computing and Systems - AdComSys 2024",
  schedule: [
    {
      date: "Wednesday, 26.06.2024",
      events: [
        { time: "9:30 AM", event: "Registration" },
        {
          time: "10:00 AM - 10:45 AM",
          event: "Opening Ceremony and Inauguration",
        },
        { time: "11:00 AM - 11:15 AM", event: "High Tea" },
        { time: "11:30 AM - 12:30 PM", event: "Keynote Speech 1" },
        { time: "12:45 PM - 01:45 PM", event: "Keynote Speech 2" },
        { time: "01:45 PM - 02:45 PM", event: "Networking Lunch" },
        {
          time: "03:00 PM - 05:00 PM",
          event: "Technical Session 1 (Offline)",
          pid: [13, 24, 27, 43, 44, 70, 78, 95, 113, 142, 144, 164],
        },
      ],
    },
    {
      date: "Thursday, 27.06.2024",
      events: [
        { time: "10:00 AM - 11:00 AM", event: "Keynote Speech 3" },
        { time: "11:00 AM - 11:15 AM", event: "High Tea" },
        { time: "11:30 AM - 12:30 PM", event: "Keynote Speech 4" },
        { time: "12:45 PM - 01:45 PM", event: "Networking Lunch" },
        {
          time: "02:00 PM – 3:30 PM",
          event: "Technical Session 2 (Online)",
          pid: [4, 56, 60, 74, 75, 89, 137, 177],
        },
        {
          time: "02:00 PM – 3:30 PM",
          event: "Technical Session 3 (Online)",
          pid: [40, 62, 67, 94, 102, 108, 131, 145, 158],
        },
        {
          time: "02:00 PM – 3:30 PM",
          event: "Technical Session 4 (Online)",
          pid: [19, 55, 82, 83, 88, 155, 160, 163, 169],
        },
        { time: "04:00 PM – 05:00 PM", event: "Valedictory Session" },
      ],
    },
  ],
};

export default adComSys2024Schedule;
