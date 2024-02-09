import React, { useState } from 'react';
import '../components/navbar.css'
import { Link } from 'react-router-dom';
import { IonItem, IonLabel, IonList } from '@ionic/react';

import '../components/sidebar.css'


const Sidebar = () => {
    return(
    
    <>
    <div className="sidebar">
        <IonList lines="none">
            <IonItem href='/home'>
                <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem href='/create'>
                <IonLabel>Planner Book</IonLabel>
            </IonItem>
            <IonItem href='/wardrobe'>
                <IonLabel>Management</IonLabel>
            </IonItem>
            <IonItem href='/add'>
                <IonLabel>Post it!</IonLabel>
            </IonItem>
        </IonList>
    </div>
    
    </>
    );
}

export default Sidebar;