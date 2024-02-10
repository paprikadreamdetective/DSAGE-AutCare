import React from 'react';
import { IonPage, IonInput, IonLabel, IonContent, IonTitle, IonToolbar } from '@ionic/react';

const InsertForm: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>User Data</IonTitle>
      </IonToolbar>
      <IonContent>
        <div className="mbsc-form-group">
          <IonLabel>First name</IonLabel>
          <IonInput placeholder="First Name" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Last name</IonLabel>
          <IonInput placeholder="Last Name" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>User name</IonLabel>
          <IonInput placeholder="User Name" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Company</IonLabel>
          <IonInput placeholder="Company Name" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Email</IonLabel>
          <IonInput placeholder="Email Address" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Phone Number</IonLabel>
          <IonInput placeholder="Home" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Business</IonLabel>
          <IonInput placeholder="Business" />
        </div>
        <div className="mbsc-form-group">
          <IonLabel>Fax</IonLabel>
          <IonInput placeholder="Fax" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InsertForm;
