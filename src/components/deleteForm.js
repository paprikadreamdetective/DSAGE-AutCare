import React, { useState } from "react";
import PropTypes from 'prop-types';
import { IonInput, IonItem, IonList } from "@ionic/react";
import './LinkForm.css'
import axios from 'axios';

const DeleteForm = () => {
    const initialValues = {
        clave_vehiculo: '',
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };
    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });
        try {
            const response = await fetch('http://192.168.100.136:5000/delete-cita', {
                method: 'POST',
                body: formData,
            });
            setValues(initialValues);
            const result = await response.text();
            const resultObject = JSON.parse(result);
            console.log('Datos enviados exitosamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };*/

    const handleDelete = async (clave_vehiculo) => {
        try {
          const response = await fetch(`http://192.168.100.136:5000/delete-cita/${values.clave_vehiculo}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            console.log('Cita eliminada correctamente');
            // Realizar alguna acción adicional si es necesario
          } else {
            console.error('Error al eliminar la cita:', response.statusText);
          }
        } catch (error) {
          console.error('Error al eliminar la cita:', error);
        }
      };

    /*
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete('http://192.168.100.136:5000/delete-cita', {
                data: { clave_vehiculo: values.clave_vehiculo } // Suponiendo que la clave del vehículo identifica el registro a eliminar
            });
            console.log('Datos eliminados exitosamente');
            setValues(initialValues);
        } catch (error) {
            console.error('Error al eliminar datos:', error);
        }
    };*/

    return (
        <>
            <div className="content-inputs">
                <section className="form-register">
                    <h4>Cancelar Cita</h4>
                    <input className="controls" type="text" name="clave_vehiculo" placeholder="Clave del Vehículo" onChange={handleInputChange} value={values.clave_vehiculo}></input>
                    {/* Inputs del formulario */}
                    {/* ... */}
                    {/*<button className="botons" onClick={handleSubmit}>Update</button>*/}
                    {/* Botón de eliminación */}
                    <button className="botons" onClick={handleDelete}>Delete</button>
                </section>
            </div>
        </>
    );
};

DeleteForm.propTypes = {
    initialValues: PropTypes.object,
};

export default DeleteForm;
