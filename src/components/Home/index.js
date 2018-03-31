import React, { Component } from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import * as actions from '../../actions/speciality';

const ListSpecialities = props => {

    //console.log("=>> ",props.specialities);
    if (props.specialities){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>created</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.specialities.map((spec) => {
                                return (
                                    <tr key={spec.id}>
                                        <td>{ spec.name }</td>
                                        <td> { spec.description} </td>
                                        <td>{ spec.created_at }</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return null;
    }
} 

class Home extends Component {

    componentWillMount(){
        this.props.fetchSpecialitiesAction();
    }

    render (){
        
        const { specialities } = this.props;

        return (
            
            <div className="container">

                <Header />

                <ListSpecialities specialities={specialities}/>
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    specialities: state.speciality.specialities
});

export default connect( mapStateToProps, actions)(Home);