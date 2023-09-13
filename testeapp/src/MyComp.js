import React from 'react';
import MyForm from './MyForm';

class MyComp extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }
  

    incrementer() {
        this.setState({count:this.state.count+1});    
    }

    render() {
        


        const array = ['irintsoa','toavina','mirindra']
        return (
            <div>
              <p>Compteur : {this.state.count}</p>

               {this.state.count%2===0 && <p>Paire.</p>}
               
               <ul>
                {array.map((item)=>(
                    <li>{item}</li>
                ))}
                <h1>{this.props.data}</h1>
               </ul>

              <button onClick={() => this.incrementer()}>Click me!</button>
              <MyForm/>
            </div>
        );
  }
}  

export default MyComp;
