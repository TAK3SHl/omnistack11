import React, { useState } from 'react'
import './styles.css'

import api from '../../services/api'

import {Link,useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf            
        }
        try{
            console.log(data)
            const res = await api.post('/ongs', data)
            
            alert(`Seu ID de acesso: ${res.data.id}`)

            history.push('/')
        }catch(e){
            alert('Erro no cadastro, tente novamente. ')
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <input type="email"  
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" 
                        style={{ width: 80 }}
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                        />

                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}