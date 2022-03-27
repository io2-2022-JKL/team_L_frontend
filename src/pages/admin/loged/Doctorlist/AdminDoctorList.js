import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";


export class AdminDoctorList extends Component{

    constructor(props){
        super(props);
        this.state = {deps:[]}
    }

    refreshList(){
        fetch("")
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data})
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {deps} = this.state;
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
                                <th>mail</th>
                            </tr>
            
                            
                        </thead>
                        <tbody>
                            {deps.map(dep=>
                                    <tr key={dep.Imie}>
                                        <td>{dep.Imie}</td>
                                        <td>{dep.Nazwisko}</td>
                                        <td>{dep.VaccinattionCenter}</td>
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