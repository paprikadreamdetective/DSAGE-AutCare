import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/en"

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
   /* {/*<div
    style={{
      height: "95vh",
      width: "80vw",
      alignItems: "center",
      margin: "auto"
    }}
    >
      
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        date={currentDate}
        toolbar={true}
        defaultView="month"
        onNavigate={handleNavigate}
        components={components}
        style={{ maxWidth: "50%" }}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
      />
      </div>*///}

    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <IonButton routerLink="/home">Volver al inicio</IonButton>
      </div>
      <div style={{ flex: 15, display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" , margin: "auto"}}>
        <Calendar
          localizer={localizer}
          events={events}
          views={["month", "week", "day"]}
          date={currentDate}
          toolbar={true}
          defaultView="month"
          onNavigate={handleNavigate}
          components={components}
          style={{ maxWidth: "50%" }}
          formats={{
            dayHeaderFormat: (date) => {
              console.log(date);
              return dayjs(date).format("DD/MM/YYYY");
            },
          }}
        />
      </div>
    </div>
  );
};

export default Tab2;
