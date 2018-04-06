import React, { Component, Fragment } from 'react';
import axios from 'axios';

import styled from 'styled-components';




class ProjectList extends Component {
    constructor(props){
        super(props);
    this.state = {
        projects: [],
        actions: [],
     }
    }
    componentDidMount() {
        this.getProjects();
        this.getActions();
    }

    getProjects() {
        axios.get('http://localhost:5000/api/projects')
        .then(response => this.setState({ projects: response.data}))
        .catch(error => console.error('Server Error: ', error))

    }

    getActions() {
        axios.get('http://localhost:5000/api/projects')
        .then(response => this.setState({ actions: response.data}))
        .catch(error => console.error('Server Error: ', error))

    }




render() { 
    
const Title = styled.p`
    font-size: 3rem;
`

const CardBody = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    margin: 3px;
    padding: 5px;

    display: flex;
    justify-content: center;
    

    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    color: #B66D0D;
    &:hover{
    color: #FE6847;

    }

    border: solid #B66D0D;;

    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;

`    
    return (
        <Fragment>

            {this.state.projects.map((project, i)=> {
                return (
                
                    <CardBody key={i} id={project.id}>
                     {project.name}
                     {project.description}
                     </CardBody>
                    
                    
                )
            })}

               {this.state.actions.map((action, i)=> {
                return (
                
                    <CardBody key={i} id={action.id}>
                     {action.name}
                     {action.notes}
                     </CardBody>
                    
                    
                )
            })}

        </Fragment>    
    )
  }
}

export default ProjectList;