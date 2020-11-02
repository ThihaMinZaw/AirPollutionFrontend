import React from 'react'

import MaterialTable from 'material-table';

import './livetable.css'

import axios from 'axios'
 


 
class LiveTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

    }

    componentDidMount(){
        const url = "http://api.airvisual.com/v2/nearest_city?"
        const API_KEY = "key=f2472fb7-f826-4756-ab6b-4c4a97e73150"
       axios.get(url+API_KEY).then(result=>{
           
        console.log(result);
        for(let prop in result.data.data){
            console.log(prop)
        }
    
    
    }).catch(err=>console.log(err))

     

    }
  render() {
    return (
        <div className="live-table">
           
    
      </div>
    )
  }
};

export default LiveTable;
 