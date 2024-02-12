import React, { useState, useEffect } from 'react';
import { useHistory, Route, Redirect} from 'react-router-dom';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircle, body, book, calendar, ellipse, fileTray, home, settingsOutline, shirt, square, triangle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import Navbar from '../components/navbar';
import './Tab1.css';
import './Tab3.css';
import Sidebar from '../components/sidebar';
import './Login.css';
import Calendar from '../components/calendar';
import Weather from '../components/weatherComponent';
import Example from '../components/sidebar_menu';
import CarruselPrendas from '../components/carruselPrendas';

import WeatherApp from '../WeatherApp/WeatherApp'

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Create from './Create';
import Wardrobe from './Wardrobe';
import Add from './Add';
import { useFetch } from './useFetch';

import SugerenciaDia from '../components/sugerenciaDia';

const Tab1: React.FC = () => {
  const history = useHistory(); // Obtiene el objeto de historial de navegación

  const handleBackToLogin = () => {
    history.push('/login'); // Redirige al usuario a la página de login
  };

  const [temperatura, setTemperatura] = useState(null);



  return (
    <IonPage>
      <Navbar></Navbar>
      <IonContent >
      
        {/*<Example></Example>*/}
        

        <div className="content-wrapper">
          
          
          
        <div className="content">
          
          <div className="weather-section">
            <WeatherApp></WeatherApp>
          </div>
          <div className="calendar">
            <Calendar></Calendar>
          </div>
          <div className="content-sug">
            <div className="sugerencia">
              <p>Next Appoinment</p>
              {/*<div cl assName="img">
                <SugerenciaDia
                  clima='calor'
  ></SugerenciaDia>
  </div>*/}
            </div>
          </div>
      {/* Botón para volver a la página de login */}
      <div >
        <p style={{textAlign: 'center'}}> Post </p>
          <CarruselPrendas/>
      </div> 
      <div className="buttons-container">
        <IonButton className='button-signin-logout' onClick={handleBackToLogin}>Logout</IonButton>

      </div>
      
        </div>

      </div>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
