import React,{Component} from 'react'
import {Table} from 'semantic-ui-react'


export class IncidentTable extends Component{
constructor(props){
    super(props)


}
render(){

    return(
        <Table striped>
 <Table.Header>
   <Table.Row>
     <Table.HeaderCell>Date</Table.HeaderCell>
     <Table.HeaderCell>User</Table.HeaderCell>
     <Table.HeaderCell>Department</Table.HeaderCell>
     <Table.HeaderCell>Incident</Table.HeaderCell>
     <Table.HeaderCell>priority</Table.HeaderCell>
     <Table.HeaderCell>Description</Table.HeaderCell>
     <Table.HeaderCell>Resolution</Table.HeaderCell>
     <Table.HeaderCell>Status</Table.HeaderCell>
   </Table.Row>
 </Table.Header>
 </Table>

    )}
}
 