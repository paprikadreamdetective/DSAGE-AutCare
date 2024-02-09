import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Calendar from 'react-calendar';
import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'


const Tab2: React.FC = () => {
  
  const [people, setPeople] = useState<Person[]>([]);
  const [date, setDate] = useState<Date | Date[]>(new Date());

  const onChange = (date: Date | null) => {
    if (date !== null) {
      setDate(date);
    }
    // Aquí puedes hacer algo con la fecha seleccionada, como cargar datos específicos, etc.
  };
  
  return (
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
        <div className="calendar-container">
          <Calendar onChange={(value) => setDate(date)}
            calendarType="US"
            locale="en-US"
            showNeighboringMonth
            
        
            
            tileClassName={({ date, view }) => {
              // Estilos del día seleccionado
              if (date instanceof Date && date.toDateString() === new Date().toDateString()) {
                return 'react-calendar__tile--now';
              }
              return '';
            }}
            prev2Label={null}
            next2Label={null}
            navigationAriaLabel="Calendar navigation"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
