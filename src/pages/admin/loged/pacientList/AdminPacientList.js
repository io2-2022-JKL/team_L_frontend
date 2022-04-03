import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

export class AdminPacientList extends Component{

    constructor(props){
        super(props);
        this.state = {
            deps:[],
            isLoaded: false,
        }
    }

    refreshList(){
        fetch('https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/patients',
        {
            method:'GET',
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                deps:data,
                isLoaded:true,
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
        const {deps,isLoaded} = this.state;


        if(!isLoaded){
            return(
                <div>Loading...</div>
            )

        }

        return(
            <div>
                <div className="mt-2 d-flex justify-content-center">
                    lista z pacjentami
                </div>

                <Container>
                <div >
                    <Table className="mt-4" hover striped bordered size="sm">
                        <thead>
                            <tr>
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>mail</th>
                                <th>Telefon</th>
                            </tr>

                            
                        </thead>
                        <tbody>
                            {deps.map(dep=>
                                    <tr key={dep.firstName}>
                                        <td>{dep.firstName}</td>
                                        <td>{dep.lastName}</td>
                                        <td>{dep.mail}</td>
                                        <td>{dep.phoneNumber}</td>
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