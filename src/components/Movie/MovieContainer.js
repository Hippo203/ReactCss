import React, { Component, createRef } from 'react';
import {withRouter } from 'react-router-dom';
import Movie from './Movie';
import {apiUrl} from '../../constants/config';




class MovieContainer extends Component {

    state = {
        movie : null,
    }; 

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(apiUrl(`i=${id}`)).then(resp => {
            resp.json().then(r => this.setState({movie : r})
            );
          }).catch(err => console.error(err))
      

    }


    render() {

        if (this.state.movie === null) {
            return null;
        }
        return <Movie movie={this.state.movie} /> 
    }
}


export default withRouter(MovieContainer);  