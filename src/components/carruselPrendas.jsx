import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cloud_icon from '../assets/cloud.png'
import './carruselPrendas.css'

//import { db } from "../firebaseConfig";

import PropTypes from 'prop-types';
import axios from 'axios';
const CarruselPrendas = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 390, min: 0 },
          items: 3
        }
      };

      const [ropa, setRopa] = useState([]);

      

      useEffect(() => {

      /*fetch('http://192.168.100.136:5000/get-posts')
      .then(response => response.json())
      .then(data => {
        console.log('Datos de citas recibidos:', data);
        setRopa(data);
        //const formattedEvents = mapCitasToEvents(data);
        //setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching citas:', error));*/


        const fetchData = async () => {
            try {
                const response = await axios.get(`http://192.168.100.136:5000/get-posts`);
                setRopa(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);


      /*const getData = async () => {
        console.log('La categoria a buscar es = '+categoria)
        db.collection('ropa').where('categoria', '==', categoria)
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc =>{
                // console.log(doc.data());
                // console.log(doc.id);
                docs.push({...doc.data(), id:doc.id});
            });
            setRopa(docs);
            console.log(docs)
        });
      }*/

    /*useEffect(() => {
      getData();
    }, []);*/
    /*
    return(
        <>
        <div className="carruselApp">
          <Carousel responsive={responsive}>
            {
              ropa.map((r,index) => {
                return (
                  <>
                    <div className="card">
                        
                        {console.log('Url de la imagen: ' + r.url)}
                        <img src={r.url} alt="" />
                        
                    </div>
                  </>
                )
              })
            }
          </Carousel>
        </div>
        </>
    )*/
    return (
      <div className="carruselApp" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <Carousel showDots={true} responsive={responsive}>
              {ropa.map((prenda, index) => (
                  
                  <div className="card" key={index}>
                      <p>{prenda.content}</p> {/* Mostrar el contenido de la prenda */}
                      <p>{prenda.timestamp}</p>
                      
                  </div>
              ))}
          </Carousel>
      </div>
  );
}

export default CarruselPrendas;
/*
CarruselPrendas.propTypes = {
  //categoria: PropTypes.string.isRequired,
};*/