import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateState, updateZip} from '../ducks/reducer'
import {NavLink} from 'react-router-dom';
import Wizhead from './Wizhead'

export class Wizard1 extends Component {

    render(){
        const {updateName, updateAddress ,updateCity, updateState, updateZip} = this.props
        return(
            
            <div>
                <div>
                    <Wizhead/>
                </div>
                <div>
                    <p>Property Name</p>
                    <input value={this.props.name} onChange={e=>updateName(e.target.value)}/>
                    <p>Address</p>
                    <input value={this.props.address} onChange={e=>updateAddress(e.target.value)}/>
                    <p>City</p>
                    <input value={this.props.city} onChange={e=>updateCity(e.target.value)}/>
                    <p>State</p>
                    <input value={this.props.states} onChange={e=>updateState(e.target.value)}/>                                
                    <p>Zip Code</p>
                    <input value={this.props.zip} onChange={e=>updateZip(e.target.value)}/> 
                    <div>
                        <NavLink to='/wizard2'>
                            <button className="navButton">Next</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        states: state.states,
        zip: state.zip
    }
}

const mapDispatchToProps ={
    updateName: updateName,
    updateAddress: updateAddress,
    updateCity: updateCity,
    updateState: updateState,
    updateZip: updateZip
}

export default connect(mapStateToProps,mapDispatchToProps)(Wizard1)
