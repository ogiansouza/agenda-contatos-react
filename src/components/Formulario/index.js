import { useEffect, useState } from 'react'
import { BsPersonFillAdd, BsFillCheckCircleFill, BsDashCircleFill } from 'react-icons/bs' 

import { Form, Header } from './styles'

const Formulario = ({ onSubmit, edit, onCancelEdit, onEdit, count }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (edit) {
            setName(edit.name)
            setPhone(edit.phone)
            setEmail(edit.email)
        } else {
            setName('')
            setPhone('')
            setEmail('')
        }
    }, [edit])

    return (
        <div>
            <Header>
                <h1>Agenda de <br /> contatos</h1>
                <h2>{count} contatos na agenda</h2>
            </Header>
            <Form onSubmit={(e) => {
                e.preventDefault();
                
                if (edit) {
                    onEdit({
                        name,
                        phone,
                        email,
                        id: edit.id,
                    })
                } else {
                    onSubmit({
                        name,
                        phone,
                        email,
                    })
                }

                setName('')
                setEmail('')
                setPhone('')
            }}>
                <input
                    type="text"
                    placeholder="Nome"
                    required
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <input
                    type="tel"
                    placeholder="Telefone"
                    required
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                />
                <div>
                    {edit ? (
                        <>
                            <button type="submit" className="alterar">
                                <BsFillCheckCircleFill />
                                Salvar
                            </button>
                            <button type="button" onClick={onCancelEdit} className="cancelar">
                                <BsDashCircleFill />
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <button type="submit" className='adicionar'>
                            <BsPersonFillAdd />
                            Adicionar
                        </button>
                    )}
                </div>
            </Form>
        </div>
    )
}

export default Formulario