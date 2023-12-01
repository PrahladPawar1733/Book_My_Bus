
import React, { useState, Component } from "react";
import styles from "./LandingPage.module.css"
import Break from "./Break.jsx";
import { Route, Switch, Link } from 'react-router-dom';
import { SearchBuses } from "./SearchBuses";
import { Footer } from '../Footer/Footer'
import "../available-bus/Buses"
import { place } from "./fetch";
import { axios } from "axios";
import { Form } from "./Form";
import styled from "styled-components";






const LandingPage = () => {

  const [placeList, setPlaceList] = useState([]);



  const handleAddForm = (place) => {
    setPlaceList([...placeList, place])
  }


  return (
    <div className="ldng-pg">


      <div className={styles.welcome_image}>
        <Form handleAddForm={handleAddForm}></Form>




      </div>
    </div>
  )


}



export { LandingPage }