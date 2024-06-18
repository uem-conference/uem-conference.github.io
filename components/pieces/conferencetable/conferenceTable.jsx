import adComSysSchedule from "../../../data/adComSysSchedule";

import styles from "./ConferenceSchedule.module.css";

const ConferenceSchedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <h1 className="h1">{adComSysSchedule.title}</h1>
      {adComSysSchedule.schedule.map((day, index) => (
        <div key={index}>
          <h2 className={styles.dateHeader}>{day.date}</h2>
          <table className={styles.scheduleTable}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
                <th>PID</th>
              </tr>
            </thead>
            <tbody>
              {day.events.map((event, eventIndex) => (
                <tr key={eventIndex}>
                  <td data-label="Time">{event.time}</td>
                  <td data-label="Event">{event.event}</td>
                  <td data-label="PID">
                    {event.pid ? event.pid.join(", ") : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ConferenceSchedule;
