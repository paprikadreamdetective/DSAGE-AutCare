import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'
import '../firebaseConfig'

import Links  from '../components/Links';
import DeleteForm from '../components/deleteForm';
import UpdateForm from '../components/updateForm';
import '../components/bottonbar.css';

import insertForm from '../components/insertForm';

const Tab4: React.FC = () => {
  
  const [people, setPeople] = useState<Person[]>([]);
  const [activeTab, setActiveTab] = useState<'links' | 'delete' | 'update'>('links');
  // useIonViewDidEnter(async () => {

  // })
  
  return (


    <IonPage style={{ marginTop: '90px' }}>
      <IonContent >
        {activeTab === 'links' && <Links />}
        {activeTab === 'delete' && <DeleteForm />}
        {activeTab === 'update' && <UpdateForm />}
      </IonContent>
      <IonFooter class='ion-footer'>
        {/*<IonToolbar className="ion-justify-content-center">*/}
        <div className="button-container-botton">
          <IonButton className="ion-button" onClick={() => setActiveTab('links')}>Agendar Cita</IonButton>
          <IonButton className="ion-button" onClick={() => setActiveTab('delete')}>Cancelar Cita</IonButton>
          <IonButton className="ion-button" onClick={() => setActiveTab('update')}>Actualizar Cita</IonButton>
        </div>
        {/*</IonToolbar>*/}
      </IonFooter>


        {/*<Links></Links>
        <DeleteForm></DeleteForm>
  <UpdateForm></UpdateForm>*/}

    </IonPage>
  );
};

export default Tab4;
