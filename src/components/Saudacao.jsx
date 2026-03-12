import React from 'react'

export default function Saudacao(props) {
    return (
        <div> {
            props.logado
             ? <p>Usuário logado</p> 
             : <p>Faça login para acessar</p>}
        </div>
    )
}
