import React,{Component} from 'react'
import {Table} from 'semantic-ui-react'
import axios from 'axios';


export class List extends Component{
  constructor(props){
    super(props)
    this.state={incidents:[]}
  }

  componentDidMount(){
    axios.get('http://localhost:4000/incidents')
                    .then(res=>{

                      this.setState({incidents:res.data})
                    }).catch(err=>{
                      console.log(err);
                    })
  }

render(){

    return(
        this.state.incidents.map(incident=>{
          return (
           <Table.Row>                  
           <Table.Cell>{incident.date}</Table.Cell>
           <Table.Cell>{incident.user}</Table.Cell>
           <Table.Cell>{incident.dept}</Table.Cell>
           <Table.Cell>{incident.incident}</Table.Cell>
           <Table.Cell>{incident.category}</Table.Cell>
           <Table.Cell>{incident.descri}</Table.Cell>
           <Table.Cell>{incident.priority}</Table.Cell>
           <Table.Cell>{incident.reso}</Table.Cell>
           <Table.Cell>{incident.status}</Table.Cell>
           </Table.Row>

          )

        })

    )}
}
 

export const IncidentTable= ()=>{

  return <Table striped>
    <Table striped>
 <Table.Header>
   <Table.Row>
     <Table.HeaderCell>Date</Table.HeaderCell>
     <Table.HeaderCell>User</Table.HeaderCell>
     <Table.HeaderCell>Department</Table.HeaderCell>
     <Table.HeaderCell>Incident</Table.HeaderCell>
     <Table.HeaderCell>Category</Table.HeaderCell>
     <Table.HeaderCell>Description</Table.HeaderCell>
     <Table.HeaderCell>priority</Table.HeaderCell>
      <Table.HeaderCell>Resolution</Table.HeaderCell>
     <Table.HeaderCell>Status</Table.HeaderCell>
   </Table.Row>
 </Table.Header>
 <Table.Body>

   <List/>
 </Table.Body>
 </Table>
      
      </Table>


  
}