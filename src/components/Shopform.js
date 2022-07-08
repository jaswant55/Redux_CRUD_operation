import React,{useState} from 'react';
import { Container,Row,Col, Dropdown } from 'react-bootstrap';
import { Button,Form,FormGroup, Label, Input, FormText, DropdownMenu, DropdownItem } from 'reactstrap';
import {FolderAddOutlined,DeleteOutlined,EditOutlined   } from '@ant-design/icons';
import '../index.css';
// import Card from 'antd/lib/card/Card';




import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { REMOVE, SUBMIT, update} from './redux/action/action';
// import ShowForm from './ShowForm';
import { Card, CardBody,CardText } from 'reactstrap';
import { Collapse } from 'antd';


const Shopform = (props) => {



  
  
    const [name, setName] = useState();
    const [age,setAge ] = useState();
    const [category, setCategory] = useState('');
    
    const[shopList,setShopList]=useState([]);
    const  handleSubmit= () => {
      
    const details = {
        _id: Date.now(),
        'Name' : name,
        'Age' : age,
        'Category' : category,
        
        }
        
     props.addtoform(details);
     // console.log(props.submit.formreducer)
     setShopList(props.submit.formreducer.forms)
    }
     
    const [isOpen, setIsOpen]= useState(true);
    
  console.log(props)
   return (
    <div>
        <FolderAddOutlined 
          className='icons1'
          onClick={()=>setIsOpen(!isOpen)}
        />
        <Collapse isOpen={isOpen} >
         <Container fluid >
         <div className='shop'>
         
         <div>
         
          <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Label for='text'>Shop Name</Label>
          <Input type="text"
            id='form'
           value={name}
            
            onChange={e=>setName(e.target.value)}
            placeholder="Enter the Shop Name" />
            <Label for='text'>Age</Label>
          <Input type="Number"
            
           
            value={age}
            onChange={e=>setAge(e.target.value)}
            placeholder="Enter your age" />
          <Label for='select'>Select a Gender Category</Label>
          <select className="form-category"
          
          onChange={e=>setCategory(e.target.value)}
          >
           <option selected>Category</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="other">Other</option>
           
          </select>

          
          
         <Button  color='primary' onClick={handleSubmit}>Submit</Button>
     
     {props?.submit?.formreducer?.forms.map((data,index)=>(
  
      <>
      
      
      <Card className='form-card'>
        <CardBody>
          <CardText>
           Name : {data.Name}
          </CardText>
          <CardText>
           Age : {
              data.Age
            }
          </CardText>
          <CardText>
            Gender: {data.Category}
          </CardText>
           
           <DeleteOutlined
           className='DeleteOutLined' 
            onClick={props.delete.bind('this',data._id)}
           />
           
           <EditOutlined
            className='EditOutlined'
            onClick={props.edit.bind(this,data)}
           />
        </CardBody>
      </Card>
      

      </>
        ))}
  
         {console.log("DATA",props?.submit)}

    
          </FormGroup>
          </Form>
          
          </div>
             
          
          
         </div>      
       
        
        
        </Container>
      </Collapse>
    </div>
    
  )
}

const mapStateToProps=state=>({
   submit: state 
})

const mapDispatchToProps= dispatch=>({
  addtoform: form=> dispatch(SUBMIT(form)),
  delete: (index)=>dispatch(REMOVE(index)),
  edit: form=>dispatch(update(form))
})


export default connect(mapStateToProps, mapDispatchToProps )(Shopform);