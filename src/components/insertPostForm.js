import React, {useState, useEffect} from "react";
import { IonInput, IonItem, IonList } from "@ionic/react";
import PropTypes from 'prop-types';
import axios from 'axios';
import './LinkForm.css'
//import { uploadFile } from "../firebaseConfig";
// import removeBg from "remove.bg";


// API key: aTG5BZzJ7Y7FnXVYxTxPHvyg

const InsertPost = (props) => {
    // const apiKey = 'aTG5BZzJ7Y7FnXVYxTxPHvyg'

    const initialValues = {
        content: '',
        image_url: '',
       
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
        <div className="content-inputs">
            <section className="form-register">
                <h4 style={{textAlign: "center"}}>Post</h4>
                <textarea 
                    //className="controls" 
                    name="descripcion" 
                    placeholder="Descripción (máximo 50 palabras)" 
                    rows={20} // Puedes ajustar el número de filas según tu diseño
                    cols={40}
                    onChange={handleInputChange} 
                    value={values.descripcion}
                    
                    maxLength={250} // Definimos un máximo de caracteres permitidos (aproximadamente 50 palabras)
                    style={{resize: "none"}}
                ></textarea>
                {/*<input className="controls" type="text" name="clave_vehiculo" placeholder="Clave del Vehículo" onChange={handleInputChange} value={values.clave_vehiculo}></input>
                <input className="controls" type="text" name="nombre_propietario" placeholder="Nombre del Propietario" onChange={handleInputChange} value={values.nombre_propietario}></input>
                <input className="controls" type="text" name="telefono" placeholder="Teléfono" onChange={handleInputChange} value={values.telefono}></input>
                <input className="controls" type="text" name="marca" placeholder="Marca" onChange={handleInputChange} value={values.marca}></input>
                <input className="controls" type="text" name="modelo" placeholder="Modelo" onChange={handleInputChange} value={values.modelo}></input>
                <input className="controls" type="text" name="ano" placeholder="Año" onChange={handleInputChange} value={values.ano}></input>
                <input className="controls" type="text" name="color" placeholder="Color" onChange={handleInputChange} value={values.color}></input>
                <input className="controls" type="text" name="tipo_combustible" placeholder="Tipo de Combustible" onChange={handleInputChange} value={values.tipo_combustible}></input>
                <input className="controls" type="date" name="fecha" placeholder="Fecha" onChange={handleInputChange} value={values.fecha}></input>
                <input className="controls" type="time" name="hora" placeholder="Hora" onChange={handleInputChange} value={values.hora}></input>
                <input className="controls" type="number" name="costo" placeholder="Costo" onChange={handleInputChange} value={values.costo}></input>*/}
                
                {/*<input className="image-inputs" type="file" name="image" onChange={e => setFile(e.target.files[0])}></input>*/}

                {/* <input type="file" name="image" onChange={async (e) => {const res = await uploadFile(e.target.files[0]); console.log('AL cargar:',res)}} value={values.url}></input> */}
                <br></br>
                
                <div className="button-container">
                 <button className="botons" onClick={handleSubmit}>Save</button>
                </div>
            </section>
        </div>
        </>
    )
}
/*
InsertPost.propTypes = {
    addOrEdit: PropTypes.func.isRequired,
};*/

export default InsertPost;