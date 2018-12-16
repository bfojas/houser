import React, {Component} from 'react';
import{connect} from 'react-redux';
import{updateImage} from '../ducks/reducer'
import {NavLink} from 'react-router-dom'
import Wizhead from './Wizhead'

export class Wizard2 extends Component {
    render(){
        const {updateImage} = this.props;
        return(
            <div>
                <Wizhead/>
                <div>
                    <p>Image Url</p>
                    <input value={this.props.image} onChange={e=>updateImage(e.target.value)}/>
                </div>
                <div>
                    <NavLink to='/wizard1'>
                        <button className="navButton">Previous</button>
                    </NavLink>
                    <NavLink to='/wizard3'>
                        <button className="navButton">Next</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        image: state.image
    }
}

const mapDispatchToProps ={
    updateImage: updateImage
}

export default connect(mapStateToProps,mapDispatchToProps)(Wizard2)