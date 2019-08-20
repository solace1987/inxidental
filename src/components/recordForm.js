import React, { Component } from 'react'
import {Grid, Button, Form, Select, TextArea,Divider} from 'semantic-ui-react'
import axios from 'axios';

let data;

let capital=(word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
  }

const  deptOption =[{value:'HR',text:"HR"},{value:'finance',text:"Finance"},
{value:'purchasing',text:"Purchasing"},{value:'Prepress',text:"Prepress"},{value:'Store',text:"Store"},
{value:'ICT',text:"ICT"},{value:'Production',text:"Production"},{value:'OFED',text:"OFED"}]

const categoryOption=[{value:'Network',text:"Network"},{value:'Hardware',text:"Hardware"},
                      {value:'Software',text:"Software"},{value:'Web',text:"Web"}]
export class Record extends Component{

    constructor(props){
    super(props)

        this.state={date:new Date().toLocaleDateString('en-GB'),
                    user:'',
                    dept:'',
                    incident:'',
                    category:'',
                    descri:'',
                    priority:'',
                     reso:'',
                     status:'',
                   }

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }

   

    handleChange(e) {
          this.setState({[e.target.name]:capital(e.target.value)});
        }


    handleSubmit(e){
     
      data=this.state;
        console.log(this.state)   
      axios.post('https://young-mesa-17828.herokuapp.com/incidents/add', data).then(res=>console.log(res.data));
      this.setState({
        date:'',
        user:'',
        dept:'',
        incident:'',
        category:'',
        descri:'',
        priority:'',
         reso:'',
         status:''
              })
    }

    render(){
    return(
  <Form onSubmit={this.handleSubmit}>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Form.Field>       
           <label>User</label>
           <input name='user' 
                 onChange={this.handleChange} 
                 type='text' 
                 placeholder='Name' className='info' 
                 value={this.state.user} />
        </Form.Field>

        <Form.Field>
          <label>Department</label>
           <Select  onChange={(e,data) => {this.setState({dept:data.value})}}
            value={this.state.dept} name='dept' placeholder='Department' 
            options={deptOption} />
        </Form.Field>

        <Form.Field>
          <label>Incident</label>
          <input onChange={this.handleChange} 
              name='incident' 
              placeholder='Incident' 
              value={this.state.incident}/>
        </Form.Field>

        <Form.Field>
          <label>Category</label>
           <Select onChange={(e,data) => {this.setState({category:data.value})}} 
                    value={this.state.category}
                    name='category' placeholder='Category' 
                    options={categoryOption} />
         </Form.Field>
        
       
        <Form.Field>
          <label>Priority</label>
           <Select onChange={(e,data) => {this.setState({priority:data.value})}} 
                    value={this.state.priority}
                    name='priority' placeholder='Priority' 
                    options={[{value:'Critical',text:"Critical"},
                    {value:'high',text:"High"},
                    {value:'low',text:"Low"}]} />
        </Form.Field>
      </Grid.Column>
      
    <Grid.Column>
      <Form.Field>
      <label>Description</label>
        <TextArea onChange={this.handleChange} value={this.state.descri} 
        name='descri' placeholder='Description' style={{ minHeight:40 }} />
     </Form.Field>
     <Form.Field>
     <label>Resolution</label>
        <TextArea onChange={this.handleChange} value={this.state.reso}
         name='reso' placeholder='Resolution' style={{ minHeight: 40 }} />
     </Form.Field>
     <Form.Field>
          <label>Status</label>
           <Select onChange={(e,data) => {this.setState({status:data.value})}}
           value={this.state.status} name='status' placeholder='Status' 
           options={[{value:'Open',text:"Open"},{value:'Closed',text:"Closed"}]} />
        </Form.Field>
         
  </Grid.Column>
  </Grid>

  <Grid style={{padding:15}} centered='true'>
      <Button size='big' color='red'  type='submit' >Submit</Button>
      </Grid>
      <Divider />
</Form>



    )}

}