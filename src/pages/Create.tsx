import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es"

dayjs.locale("es");

const Tab2: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(dayjs("2023-12-19T12:00:00").toDate());
  const [people, setPeople] = useState<Person[]>([]);
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2023-12-18T12:00:00").toDate(),
      end: dayjs("2023-12-18T13:00:00").toDate(),
      data: {
        x: 10,
        title: "Evento 1",
      },
    },
    {
      start: dayjs("2023-12-23T12:00:00").toDate(),
      end: dayjs("2023-12-24T12:00:00").toDate(),
      data: {
        title: "Evento 2",
        x: 20,
      },
    },
  ];
  
  {/*return (
    <IonPage>
      <IonContent fullscreen>
        <div className="description">
          <p>Generate outfits for ... <br />
            Choose the occasion that best fits your day. </p>
        </div>
        <div className="generate">
          <div className="card-outfit">
              <img src={cloud_icon} alt="" />

              <p>Casual</p>
          </div>
        </div>
        
      </IonContent>
    </IonPage>
  );*/}

  const handleNavigate = (newDate: Date) => {
    console.log("New date:", newDate);
    setCurrentDate(newDate);
    // Aquí puedes hacer lo que necesites con la nueva fecha,
    // como actualizar el estado para mostrar eventos del nuevo período.
  };

  const components = {
    //event: (props) => {
      event: (props: { event: { data: {  x: number, title: string; }; } }) => {
      const { data } = props.event;
      console.log(data);

      if (data && data.x !== undefined && data.x > 15) {
        return (
          <div style={{ background: "red" }}>
            <CiCalendarDate />
            {props.event.data.title}
          </div>
        );
      } else {
        return (
          <div style={{ background: "green" }}>
            <CiCalendarDate />
            {props.event.data.title}
          </div>
        );
      }
    },
  };

  return (
    <div
      style={{
        height: "95vh",
        width: "70vw",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        // view={"month"}
        //date={dayjs("2023-12-19T12:00:00").toDate()}
        date={currentDate}
        toolbar={true}
        defaultView="month"
        onNavigate={handleNavigate}
        //min={dayjs("2023-12-23T08:00:00").toDate()}
       // max={dayjs("2023-12-23T18:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        components={components}
      />
    </div>
  );
};

export default Tab2;
