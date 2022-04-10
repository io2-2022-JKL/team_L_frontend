
import React, { Component } from "react";
import { Route , Routes} from "react-router-dom";
import { AdminPacientList } from "./pacientList/AdminPacientList";
import { AdminDoctorList } from "./Doctorlist/AdminDoctorList";
import { AdminNavigation } from "../navigator/adminNavigation";
import styles from "./adminLogged.module.css";


export default class AdminLogged extends Component  {


        render(){
            return(
                <div className={styles.divset}>
                   <AdminNavigation/>
                   <Routes>
                      <Route path="/doctorList" element={<AdminDoctorList/>} />
                     <Route path="/pacientList" element={<AdminPacientList/>}/>
                   </Routes> 
                </div>
            )

        }


}
