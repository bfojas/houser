import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {clearHouse} from '../ducks/reducer'
import {connect} from 'react-redux'


export class Wizhead extends Component {

    render(){
    const {clearHouse} = this.props
    
    return(
        <div>
            <div>Add New Listing</div>
            <div>
                <NavLink onClick={()=>clearHouse({name: "",
        address: "",
        city: "",
        states: "",
        zip: 0,
        image: "",
        monthly: 0,
        desiredRent: 0})} to="/">
                    <button>Cancel</button>
                </NavLink>
            </div>

        </div>
    )
}}
const mapStateToProps = (state)=>{
    return{name:state.name}
}
const mapDispatchToState={
    clearHouse: clearHouse
}

export default connect(mapStateToProps,mapDispatchToState)(Wizhead);
