import React, {Component} from 'react';
import{updateMonthly,updateRent,clearHouse} from '../ducks/reducer';
import{NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
import Wizhead from './Wizhead'

export  class Wizard3 extends Component {

    

    updateList=()=>{
        console.log('update hit')
        const {name, address, city, states, zip, image, monthly, desiredRent}= this.props;
        let obj = {name, address, city, states, zip, image, monthly, desiredRent}
        axios.post('/api/houses', obj).then(setTimeout(()=>this.props.clearHouse({name: "",
        address: "",
        city: "",
        states: "",
        zip: 0,
        image: "",
        monthly: 0,
        desiredRent: 0})),2000)
    }

    render(){
        const {updateMonthly,updateRent} = this.props;
        console.log('3props',this.props)
        return(
            <div>
                <Wizhead/>
                <div>
                <p>Recommended Rent: {this.props.monthly *1.25}</p>
                <p>Monthly Mortgage</p>
                <input value={this.props.monthly} onChange={e=>updateMonthly(e.target.value)}/>
                <p>Desired Rent</p>
                <input value={this.props.desiredRent} onChange={e=>updateRent(e.target.value)}/>
                <div>
                    <NavLink to='/wizard2'>
                        <button className="navButton">Previous</button>
                    </NavLink>
                    <NavLink onClick={()=>this.updateList()} to='/'>
                        <button className="navButton">Submit</button>
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
        zip: state.zip,
        monthly: state.monthly,
        desiredRent: state.desiredRent
    }
}

const mapDispatchToProps ={
    updateMonthly:updateMonthly,
    updateRent:updateRent,
    clearHouse:clearHouse
}

export default connect(mapStateToProps,mapDispatchToProps)(Wizard3)

