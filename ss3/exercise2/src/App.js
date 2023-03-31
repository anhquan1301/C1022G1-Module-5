import './App.css';
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component{
constructor(props){
    super(props)
    this.state={
      list:["Hello","Hi"],
      item:""
    }

}
handleChange=(event)=>{
  this.setState({
      item:event
  })
}
handleAddItem = () => {
  let newArr = [...this.state.list,this.state.item]
  this.setState({
    item:"",
    list:newArr
  })
}
  render(){
    return(
      <>
      <div >
      <h2>ToDo List</h2>
      <input type="text" value={this.state.item} onChange={(event) =>this.handleChange(event.target.value)}/>
      <button onClick={()=>this.handleAddItem()}>Add</button>
      </div>
      <div>
         <ul>
          {
            this.state.list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          } 
         </ul>
      </div>
      </>
    )
  }
}

export default App;
