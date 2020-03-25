import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import '../assets/styles/datatable.css';

class DisplayData extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
           
        };
    }


    render(){
        return (
            <DataTable value={this.state.data} resizableColumns={true} columnResizeMode="fit" >
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>
        )
    }
}