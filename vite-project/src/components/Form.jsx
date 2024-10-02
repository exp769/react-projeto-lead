import React from "react";
//import Input from "../common-components/Input";
import "./Form.css"

class Form extends React.Component{
    handleChange = (event) => {
        const id = event.target;
        const value = event.target;
        console.log(id);
        this.setState({
            [id]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }
    

    render(){
        const (name, email, numPhone) = this.state;

        return(
            <aside>
                <h2>
                    Insira novos Leads
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <form>
                    {/* <Input 
                        id="nome"
                        label="Nome completo: "
                        placeholder="Ex: Alexandre Russi"/>
                    <Input
                        id="email"
                        label="E-mail: "
                        placeholder="Ex: user@email.com"/>     
                    <Input
                        id="celular"
                        label="Celular: "
                        placeholder="Ex: +55 11 99999-9999"/>  */}
                    <div>
                        <label htmlFor="name">Nome completo: </label>
                        <input type="text" id="name" placeholder="Ex: Alexandre Russi" onChange={this.handleChange} value={name}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="email" placeholder="Ex: user@email.com" onChange={this.handleChange} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="numPhone">Celular:</label>
                        <input type="text" id="numPhone" placeholder="Ex: +55 11 99999-9999" onChange={this.handleChange} value={numPhone}/>
                    </div>
                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form