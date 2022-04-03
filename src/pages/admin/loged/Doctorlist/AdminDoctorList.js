import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";


export class AdminDoctorList extends Component{

    constructor(props){
        super(props);
        this.state = {
            deps:[],
            isLoaded: false,
        }
    }

    refreshList(){
        fetch('https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/doctors',
        {
            method:'GET',
        }
        )
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                deps:data,
                isLoaded: true,
            })
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        //var loaded = this.state.isLoaded;
        var {deps , isLoaded} = this.state;

        if(!isLoaded){
            return(
                <div>Loading...</div>
            )

        }

        return(
            
            <div>
                <div className="mt-2 d-flex justify-content-center">
                    lista z doktorami
                </div>
                <Container>
                <div >
                    <Table className="mt-4" hover striped bordered size="sm">
                        <thead>
                            <tr>
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>VaccinattionCenter</th>
                                <th>Miasto</th>
                                <th>mail</th>
                            </tr>
            
                            
                        </thead>
                        <tbody>
                            {deps.map(dep=>
                                    <tr key={dep.firstName}>
                                        <td>{dep.firstName}</td>
                                        <td>{dep.lastName}</td>
                                        <td>{dep.name}</td>
                                        <td>{dep.city}</td>
                                        <td>{dep.mail}</td>
                                    </tr>
                                    
                                    )}
                        </tbody>
                    </Table>
                </div>
                </Container>
            </div>
        )

    }
}