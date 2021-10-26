import "./Register.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Register(){
    
    const [cepComplete,setCepComplete] = useState('')
    
    const HandleSubmit = (e)=>{
        e.preventDefault()
        
        const nome = e.target.nome.value
        const nascimento = e.target.nascimento.value
        const cpf = e.target.cpf.value
        const cep = e.target.cep.value
        const logradouro = e.target.logradouro.value
        const complemento = e.target.complemento.value
        const bairro = e.target.bairro.value
        const uf = e.target.uf.value
        
        localStorage.setItem('nome',nome)
        localStorage.setItem('nascimento',nascimento)
        localStorage.setItem('cpf',cpf)
        localStorage.setItem('logradouro',logradouro)
        localStorage.setItem('cep',cep)
        localStorage.setItem('complemento',complemento)
        localStorage.setItem('bairro',bairro)
        localStorage.setItem('uf',uf)
        

    }

    const dispatchCep = async (e)=>{
        const { value } = e.target
        if (value?.length !==8){
            return
        }
        
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`)
        const result = await response.json()
        setCepComplete(result)
    }
    
    
    return(
        <div className='register'>
            <div className='register-container'>
                <div className='register-container-div'>
                        <h1>Register</h1>
                </div>  
                <div>
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <input placeholder='Nome' required name='nome'></input>
                        </div>    
                        
                        <div>
                            <input placeholder='Data de Nascimento' required name='nascimento'></input>
                        </div>    
                        
                        <div>
                            <input placeholder='CPF' required name='cpf'></input>
                        </div>    
                        
                        <div>
                            <input placeholder='CEP' onBlur={dispatchCep} name='cep' required name='cep'></input>
                        </div>    

                        <div>
                            <input placeholder='Logradouro' value={cepComplete.logradouro} required name='logradouro'></input>
                        </div>  

                        <div>
                            <input placeholder='Complemento'  required name='complemento'></input>
                        </div>  
                        <div>
                            <input placeholder='Bairro' value={cepComplete.bairro} required name='bairro'></input>
                        </div>  

                        <div>
                            <input placeholder='UF' value={cepComplete.uf} required name='uf'></input>
                        </div>  

                        <Link to='/'>
                            <div>
                                <input type='submit'value='Enviar'></input>
                            </div>
                        </Link>
                    </form>
                </div>  
            </div>
        </div>
    )
}