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
        
        const replacedCep = value?.replace(/[^0-9]/g,"")
        
        if (replacedCep?.length !==8){
            return
        }
        
        const response = await fetch(`https://viacep.com.br/ws/${replacedCep}/json/`)
        const result = await response.json()
        setCepComplete(result)
    }
    
    
    return(
        <div className='register'>
            <div className='register-container'>
                <div className='register-container-div'>
                    <div>
                        <form onSubmit={HandleSubmit}>
                            <div>
                                <h1 className='register-container-div-h1'>Register</h1>
                            </div>
                            <div className='register-container-div-box'>
                                <input placeholder='Nome'  name='nome' className='register-container-div-box-input' required></input>
                            </div>    
                            
                            <div className='register-container-div-box'>
                                <input placeholder='Data de Nascimento' required name='nascimento' className='register-container-div-box-input'></input>
                            </div>    
                            
                            <div className='register-container-div-box'>
                                <input placeholder='CPF' required name='cpf' className='register-container-div-box-input'></input>
                            </div>    
                            
                            <div className='register-container-div-box'>
                                <input placeholder='CEP' onBlur={dispatchCep} name='cep' required name='cep' className='register-container-div-box-input'></input>
                            </div>    

                            <div className='register-container-div-box'>
                                <input placeholder='Logradouro' value={cepComplete.logradouro} required name='logradouro' className='register-container-div-box-input'></input>
                            </div>  

                            <div className='register-container-div-box'>
                                <input placeholder='Complemento'  required name='complemento' className='register-container-div-box-input'></input>
                            </div>  
                            <div className='register-container-div-box'>
                                <input placeholder='Bairro' value={cepComplete.bairro} required name='bairro ' className='register-container-div-box-input'></input>
                            </div>  

                            <div className='register-container-div-box'>
                                <input placeholder='UF' value={cepComplete.uf} name='uf' className='register-container-div-box-input' required></input>
                            </div>  

                            <Link to='/'>
                                <div>
                                    <input type='submit'value='Enviar' className='register-container-div-box-input' id='input-submit' required></input>
                                </div>
                            </Link>
                        </form>
                    </div>  
                </div>  
            </div>
        </div>
    )
}