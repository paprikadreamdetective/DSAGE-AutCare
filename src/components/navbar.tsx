import React, { useState } from 'react';
import '../components/navbar.css'

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
    IonIcon,
    IonItem
  } from '@ionic/react';
import { calendar, fileTray, home, pencil } from 'ionicons/icons';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('home');
    const [animationActive, setAnimationActive] = useState(false);
    // Función para manejar el cambio de menú
    const handleMenuClick = (menu: any) => {
        setActiveMenu(menu);
        setAnimationActive(true);
        setTimeout(() => {
            setAnimationActive(false);
        }, 300);
        // Aquí podrías implementar la lógica para navegar a la ventana requerida
        // Por ahora, simplemente mostraremos el menú activo en la consola
        console.log('Navigating to:', menu);
    }
    return(
        <div className="navbar">
            <IonItem href='/home' >
                <IonLabel className='custom-button'>Home
                    <IonIcon aria-hidden="true" icon={home} />
                </IonLabel>
            </IonItem>
            <IonItem href='/create' className={`nav-button ${activeMenu === 'home' ? 'active' : ''}`}>
                <IonLabel className='custom-button'>Planner Book
                    <IonIcon className='icons-svg' aria-hidden="true" icon={calendar} />
                </IonLabel>
            </IonItem>
            <IonItem href='/wardrobe' className={`nav-button ${activeMenu === 'home' ? 'active' : ''}`}>
                <IonLabel className='custom-button'>Post it!
                    <IonIcon aria-hidden="true" icon={pencil} />
                </IonLabel>
            </IonItem>
            <IonItem href='/add' className={`nav-button ${activeMenu === 'home' ? 'active' : ''}`}>
                <IonLabel className='custom-button'>Management
                    <IonIcon className='icons-svg' aria-hidden="true" icon={fileTray} />
                </IonLabel>
            </IonItem>
        </div>
    );
}

export default Navbar;