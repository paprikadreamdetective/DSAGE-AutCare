import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './LandingPage.css';
import logo from '../assets/logo_auto_care.png'

const LandingPage: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to SmartWardrobe</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent id='Landing'>
        <img className="img-logo" alt='Hola' src={logo} />
        <div className="title-content">
            <div className='title-homeL'>Auto Care</div>
        </div>

        <div className="buttons-container-landing">
            <IonButton routerLink='/login' className='button-signin'> Login </IonButton>

            <IonButton routerLink='/register' className='button-register'> Register </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;