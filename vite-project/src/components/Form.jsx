import React from "react";
import Input from "../common-components/Input";

class Form extends React.Component{
    render(){
        return(
            <aside>
                <h2>
                    Insira novos Leads
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem quibusdam cupiditate aut magni sequi deserunt, quam ducimus nesciunt excepturi facilis laborum atque ex! Vitae doloribus voluptas veritatis aut labore.
                </p>
                <form>
                    <Input
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
                        placeholder="Ex: +55 11 99999-9999"/>  
                    <button>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form