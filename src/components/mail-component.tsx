import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonLoading, IonNote } from '@ionic/react';
import './mail-component.css'
import { loginUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

// import {toast} from '../toast'
import { error } from 'console';

function Email_input() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory();
  /*async function login() {
    setBusy(true);
    const res = await loginUser(username, password)
    if(!res){
      // console.log(error)
      // toast('Error logging with your credentials')
    }else{
      // toast('You have logged in!')

    }
    // setBusy(false)
  }*/

  /*const [values, setValues] = useState(initialValues);


    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    }*/
    

  const login = async (e: any) => {
    //setBusy(true);
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.100.136:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre_usuario: username, auth_key: password })
      });

      if (response.ok) {
        // Login successful, navigate to home
        console.log('Inicio de sesión exitoso');
        history.push('/home');
      } else {
        console.error('Login failed');
        // Display an error message or handle the error as needed
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Display an error message or handle the error as needed
    } 
  }

  return (
    <>
    {/* <IonLoading message={'Please wait...'} duration={0} isOpen={busy}></IonLoading> */}

    <div className="input-email">
      <IonInput 
        class='custom2' label="Email: " type="email" placeholder="email@domain.com"
        onIonChange={(e:any) => setUsername(e.target.value)}
      ></IonInput>
    </div>
    <br/>
    
    <div className="input-email">
      <IonInput 
        class='custom2' label="Password: " type="password"
        onIonChange={(e:any) => setPassword(e.target.value)}  
      >
      </IonInput>
    </div>
    
      <IonButton routerLink='/home' className='button-signin-log' onClick={login}> Login </IonButton>
      {/* <IonButton className='button-register' onClick={login}> Log In </IonButton> */}
   

    <br/>
    </>
  );
}
export default Email_input;