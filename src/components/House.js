import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

export function House (props) {



    
        const {name, address, city, states, zip, image, monthly, desiredRent, id} = props.house
        return(
            <div className ="mapContainer">
                <div className="housePic"><img src={image}/></div>
                <div className="houseDataOne">
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {states}</p>
                    <p>Zipcode: {zip}</p>
                </div>
                <div className="houseDataTwo">
                    <p>Monthly Mortgage: {monthly}</p>
                    <p>Desired Rent: {desiredRent}</p>
                </div>
                <div className="delete"><button onClick={()=>props.deleteHouse(id)}>Delete</button></div>
            </div>
        )
    
}

const mapStateToProps = (state)=>{
    return {houseList: state.houseList}
}

export default connect(mapStateToProps)(House)