import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import Contacto from './Contacto';



const ListaContactos = () => {

    const [ contactos, setContactos ] = useState([
        {id: 1, nombre: 'Manuel', correo: 'correo@correo.com'},
        {id: 2, nombre: 'Héctor', correo: 'correo@correo2.com'}
    ]);

    useEffect(() => {
        db.collection('usuarios').onSnapshot((snapshot) => {
            setContactos(snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}
            }));
        });
        
    }, []);

    return ( 

        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => {
                return  <Contacto key={contacto.id} id={contacto.id} nombre={contacto.nombre} correo={contacto.correo} />
            })}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;