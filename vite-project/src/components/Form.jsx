/* eslint-disable react/prop-types */

// //import Input from "../common-components/Input";
// import "./Form.css"

// class Form extends React.Component{
//     handleChange = (event) => {
//         const id = event.target;
//         const value = event.target;
//         console.log(id);
//         this.setState({
//             [id]: value
//         });
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(event)
//     }
    

//     render(){
//         const (name, email, numPhone) = this.state;

//         return(
//             <aside>
//                 <h2>
//                     Insira novos Leads
//                 </h2>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//                 <form>
//                     {/* <Input 
//                         id="nome"
//                         label="Nome completo: "
//                         placeholder="Ex: Alexandre Russi"/>
//                     <Input
//                         id="email"
//                         label="E-mail: "
//                         placeholder="Ex: user@email.com"/>     
//                     <Input
//                         id="celular"
//                         label="Celular: "
//                         placeholder="Ex: +55 11 99999-9999"/>  */}
//                     <div>
//                         <label htmlFor="name">Nome completo: </label>
//                         <input type="text" id="name" placeholder="Ex: Alexandre Russi" onChange={this.handleChange} value={name}/>
//                     </div>
//                     <div>
//                         <label htmlFor="email">E-mail:</label>
//                         <input type="text" id="email" placeholder="Ex: user@email.com" onChange={this.handleChange} value={email}/>
//                     </div>
//                     <div>
//                         <label htmlFor="numPhone">Celular:</label>
//                         <input type="text" id="numPhone" placeholder="Ex: +55 11 99999-9999" onChange={this.handleChange} value={numPhone}/>
//                     </div>
//                     <button onClick={this.handleSubmit}>Cadastrar</button>
//                 </form>
//             </aside>
//         );
//     }
// }

// export default Form

import React from "react";
//import Input from "../common-components/Input";
import "./Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            numPhone: ''
        }
    }

    handleChange = (event) => {
        // console.log(event.target);

        const { id, value } = event.target;
        console.log(id);

        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.onHandleSubmit(this.state);

        this.setState({
            name: '',
            email: '',
            numPhone: ''
        })
    }

    render() {
        // const name = this.state.name;
        // const email = this.state.email;
        // const numPhone = this.state.numPhone;

        const { name, email, numPhone } = this.state;

        return (
            <aside>
                <h2>Insira novos leads</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>

                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Ex.: Rodrigo" onChange={this.handleChange} value={name}/>
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" placeholder="Ex.: user@email.com" onChange={this.handleChange} value={email}/>
                    </div>

                    <div>
                        <label htmlFor="numPhone">Celular</label>
                        <input type="text" id="numPhone" placeholder="Ex.: 11 98765-4321" onChange={this.handleChange} value={numPhone}/>
                    </div>
                    
                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form;