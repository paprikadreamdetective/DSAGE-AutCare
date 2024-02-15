import React, {useState, useEffect} from "react";
import { IonInput, IonItem, IonList } from "@ionic/react";
import PropTypes from 'prop-types';
import axios from 'axios';
import './insertPostForms.css'
//import { uploadFile } from "../firebaseConfig";
// import removeBg from "remove.bg";


// API key: aTG5BZzJ7Y7FnXVYxTxPHvyg

const InsertPost = (props) => {
    // const apiKey = 'aTG5BZzJ7Y7FnXVYxTxPHvyg'

    const initialValues = {
        content: '',
        /*image_url: '',*/
       
    }

    //const [file, setFile] = useState(null);
    const [values, setValues] = useState(initialValues);
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        //formData.append('file', file);
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });
        try {
            const response = await fetch('http://192.168.100.136:5000/save-post', {
                method: 'POST',
                body: formData,
            });
            setValues({ ...initialValues }); // Limpiamos los valores después de enviarlos
            const result = await response.text();
            const resultObject = JSON.parse(result);
            console.log('Datos enviados exitosamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return(
        <>
        <div className="container">
            <div className="contenedor-derecho">
                <h4 style={{textAlign: "center"}}>Post</h4>
                <textarea 
                    //className="controls" 
                    name="content" 
                    placeholder="Descripción (máximo 50 palabras)" 
                    rows={20} // Puedes ajustar el número de filas según tu diseño
                    cols={60}
                    onChange={handleInputChange} 
                    value={values.content}
                    
                    maxLength={250} // Definimos un máximo de caracteres permitidos (aproximadamente 50 palabras)
                    //style={{resize: "none"}}
                ></textarea>
                <br></br>
                
                <div className="button-container">
                 <button className="botons" onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <div className="contenedor-izquierdo">
                {/* Aquí va el contenido para visualizar las publicaciones */}
            </div>
        </div>
        </>
    )
}


export default InsertPost;