import React, {Component} from 'react';
import House from './House';
import { houseLister } from '../ducks/reducer';
import {connect} from 'react-redux'
import axios from 'axios';
import {NavLink} from 'react-router-dom'


export class Dashboard extends Component {


    componentDidMount(){
        this.getHouses();
    }

    getHouses =()=>{
        axios.get('/api/houses').then (res=>{
            console.log('get res',res.data)
            this.props.houseLister(res.data)
        })
    }
    deleteHouse = (id) =>{
        axios.delete(`/api/houses/${id}`)
        .then ((this.getHouses()))

    }


    render(){

        const displayHouses = this.props.houseList.length
        ?this.props.houseList.map(val =>{
            console.log('dashboard hit',val)
            return <div className="houseList">
                <House house={val} deleteHouse={this.deleteHouse} />
                {/* <div>Name: {val.name}</div>
                <div>Price: {val.price}</div>
                <img src={val.image_url} alt="oops"/> */}
            </div>
        })
        :<div>Waiting for list</div>
        return(
            <div>
                <div>
                    <div>Dashboard</div>
                    <div>
                        <NavLink to="/wizard1">
                            <button>Add New Property</button>
                        </NavLink></div>
                </div>
            <div>
                {displayHouses}
            
            </div>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {houseList: state.houseList}
}
const mapDispatchToProps ={
    houseLister:houseLister
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)