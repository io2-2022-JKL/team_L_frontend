import React, { Component } from "react";
import { Container} from "react-bootstrap";
import { COLUMNS } from "../../../../components/columnsDoctors";
import { Table } from "../../../../components/Table";

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
                    <Table columns={COLUMNS} data={deps}/>
                </Container>
            </div>
        )
    
    }
}

