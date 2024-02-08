import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
import logo from '../assets/logo_auto_care.png'
import facebook from '../assets/facebook-logo.svg'
import google from '../assets/google-logo.svg'


import Email_input from '../components/mail-component';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='Container'>
        <div className="container">
          <div className="left-column">
        <img className="img-logo" alt='Hola' src={logo} />
        <div className="title-content">
            <h1 className='title-home'>Welcome Back!</h1>
        </div>

        <div className="buttons-container">
            <Email_input></Email_input>
        </div>

        <div className="social-media">
          <h3>Login with Social Media</h3>
          <div className="container-logos">
            <div className="facebook">
              <img className="logo-social" alt='Hola' src={facebook} />
            </div>
            <div className="google">
              <img className="logo-social" alt='Hola' src={google} />
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
            {/* Contenedor del lado derecho con color naranja */}
            
          </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;