import React, {useState, useEffect} from 'react';
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

interface Cita {
  id: number;
  clave_vehiculo: string;
  nombre_propietario: string;
  telefono: string;
  marca: string;
  modelo: string;
  ano: number;
  color: string;
  tipo_combustible: string;
  fecha: string;
  hora: string;
  costo: number;
}

const Tab2: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(dayjs("2023-12-19T12:00:00").toDate());
  const [events, setEvents] = useState<any[]>([]);
  //const [people, setPeople] = useState<Person[]>([]);
  //const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const localizer = dayjsLocalizer(dayjs);
  /*
  const event1 = [
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
  ];*/
  
  useEffect(() => {
    fetch('http://192.168.100.136:5000/get-citas')
      .then(response => response.json())
      .then(data => {
        console.log('Datos de citas recibidos:', data);
        setCitas(data);
        const formattedEvents = mapCitasToEvents(data);
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching citas:', error));
      /*then(data => setCitas(data))
      .catch(error => console.error('Error fetching citas:', error));*/
  }, []);
  /*
  const mapCitasToEvents = (citas: Cita[]): any[] => {
    return citas.map(cita => ({
      

      start: dayjs(`${cita.fecha}T${cita.hora}`).toDate(),
      end: dayjs(`${cita.fecha}T$23:00:00`).toDate(),
      title: `Cita - ${cita.clave_vehiculo}`,
    }));
  };*/

  const mapCitasToEvents = (citas: Cita[]): any[] => {
    return citas.map(cita => {
      // Verificar el formato de las fechas y horas antes de la conversión
      console.log('Fecha y hora de la cita:', cita.fecha, cita.hora);
      
      return {
        start: dayjs(`${cita.fecha}T${cita.hora}`).toDate(),
        end: dayjs(`${cita.fecha}T23:00:00`).toDate(), // Supongo que aquí deseas que el evento termine a las 23:00
        title: `Cita - ${cita.clave_vehiculo}`,
      };
    });
  };
  

  const handleNavigate = (newDate: Date) => {
    console.log("New date:", newDate);
    setCurrentDate(newDate);
    
    // Aquí puedes hacer lo que necesites con la nueva fecha,
    // como actualizar el estado para mostrar eventos del nuevo período.
  };

  const handleEventClick = (event: any) => {
    console.log("Evento clickeado:", event);
    // Aquí puedes mostrar la información del evento en el contenedor del botón
    // Puedes usar un estado para almacenar la información del evento y mostrarla en el contenedor del botón
    const cita = citas.find((c: Cita) => c.clave_vehiculo === event.title.split(' - ')[1]);
  if (cita) {
    // Mostrar la información de la cita en un contenedor con estilo
    const citaInfoContainer = document.createElement('div');
    citaInfoContainer.style.backgroundColor = 'beige';
    citaInfoContainer.style.padding = '10px';
    citaInfoContainer.style.border = '1px solid #ccc';
    citaInfoContainer.innerHTML = `
      <h3>Información de la Cita</h3>
      <p><strong>Clave de Vehículo:</strong> ${cita.clave_vehiculo}</p>
      <p><strong>Nombre del Propietario:</strong> ${cita.nombre_propietario}</p>
      <p><strong>Teléfono:</strong> ${cita.telefono}</p>
      <p><strong>Marca:</strong> ${cita.marca}</p>
      <p><strong>Modelo:</strong> ${cita.modelo}</p>
      <p><strong>Año:</strong> ${cita.ano}</p>
      <p><strong>Color:</strong> ${cita.color}</p>
      <p><strong>Tipo de Combustible:</strong> ${cita.tipo_combustible}</p>
      <p><strong>Fecha:</strong> ${cita.fecha}</p>
      <p><strong>Hora:</strong> ${cita.hora}</p>
      <p><strong>Costo:</strong> ${cita.costo}</p>
      <p><button class="custom-button">Haz clic aquí</button></p>
    `;
    
    // Limpiar el contenedor existente antes de agregar el nuevo
    const infoContainer = document.getElementById('cita-info-container');
    if (infoContainer) {
      infoContainer.innerHTML = '';
      infoContainer.appendChild(citaInfoContainer);
    }
  }
  };


  const components = {
    //event: (props) => {
      event: (props: { event: any }) => {
      const { event } = props;

        //const { data } = props.event;
      //console.log(data);
      
      return (
        <div style={{ background: "green" }} onClick={() => handleEventClick(event)}>
          <CiCalendarDate />
          {event.title}
        </div>
      );

      /*if (data && data.x !== undefined && data.x > 15) {
        return (
          <div style={{ background: "red" }} onClick={() => handleEventClick(props.event)}>
            <CiCalendarDate />
            {props.event.data.title}
          </div>
        );
      } else {
        return (
          <div style={{ background: "green" }} onClick={() => handleEventClick(props.event)}>
            <CiCalendarDate />
            {props.event.data.title}
          </div>
        );
      }*/
    },
  };

  return (

    <div style={{ display: "flex", width: "130%", height: "100%" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <div>
        {/*  <h2>Registros de la base de datos:</h2>
          <table className="table table-hover table-dark">
            <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {citas.map(item => (
                  <tr  key={item.id.toString()}>
                        <th  className="text-center">{item.id}</th>
                        <td>{item.clave_vehiculo}</td>
                        <td>{item.color}</td>
                        <td>{item.costo}</td>
                        <td>{item.fecha}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>}
            {/*{citas.map((cita, index) => (
              <li key={index}>
              <strong>Clave de Vehículo:</strong> {cita.clave_vehiculo}<br />
              <strong>Nombre del Propietario:</strong> {cita.nombre_propietario}<br />
              <strong>Teléfono:</strong> {cita.telefono}<br />
              <strong>Marca:</strong> {cita.marca}<br />
              <strong>Modelo:</strong> {cita.modelo}<br />
              <strong>Año:</strong> {cita.ano}<br />
              <strong>Color:</strong> {cita.color}<br />
              <strong>Tipo de Combustible:</strong> {cita.tipo_combustible}<br />
              <strong>Fecha:</strong> {cita.fecha}<br />
                <strong>Hora:</strong> {cita.hora}<br />
                <strong>Costo:</strong> {cita.costo}<br />
              </li>
            ))}
          
              */}
      
      
          <IonButton routerLink="/home">Volver al inicio</IonButton>
        </div>
        
      </div>
   
      <div id="cita-info-container" style={{ flex: 7, backgroundColor: "beige", padding: "30px", border: "5px solid #ccc" }}>
        {/* Aquí se mostrará la información de la cita al hacer clic en un evento del calendario */}
      </div>

      
      <div style={{ flex: 40, display: "flex",  width: "100vw", height: "90vh" , margin: "auto"}}>
        <Calendar
          localizer={localizer}
          events={events}
          views={["month", "week", "day"]}
          date={currentDate}
          toolbar={true}
          defaultView="month"
          onNavigate={handleNavigate}
          components={components}
          style={{ maxWidth: "70%" }}
          formats={{
            dayHeaderFormat: (date) => {
              console.log(date);
              return dayjs(date).format("YYYY/MM/DD");
            },
          }}
        />
      </div>
    </div>
  );
};

export default Tab2;
