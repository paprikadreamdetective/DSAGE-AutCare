import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'
import '../firebaseConfig'

import Links  from '../components/Links';
import insertForm from '../components/insertForm';
import UpdateForm from '../components/updateForm';
import DeleteForm from '../components/deleteForm';
const DeleteMod: React.FC = () => {
  
  const [people, setPeople] = useState<Person[]>([]);
  
  // useIonViewDidEnter(async () => {

  // })
  
  return (


    <IonPage>
      <IonContent fullscreen>
        <DeleteForm></DeleteForm>
        {/*<Links></Links>*/}
      </IonContent>
    </IonPage>
  );
};

export default DeleteMod;