import { useEffect, useState } from "react";
import Contato from "./components/Contato";
import Formulario from "./components/Formulario";
import { Container, Global } from "./styles";

const api =  'https://fake-api-tau.vercel.app/api/contatos'

const App = () => {
  const [contatos, setContatos] = useState([])
  const [editing, setEditing] = useState(null);

  const getContatos = async () => {
    const items = await (await fetch(api)).json()
    setContatos(items.data)
  }

  const deleteContato = async (id) => {
    const items = await (await fetch(api, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })).json()
    setContatos(items.data)
  }

  const postContato = async (item) => {
    const items = await (await fetch(api, {
      method: 'POST',
      body: JSON.stringify({ contato: item }),
    })).json()
    setContatos(items.data)
  }

  const editContato = async (item) => {
    const items = await (await fetch(api, {
      method: 'PUT',
      body: JSON.stringify({ contato: item }),
    })).json()
    setEditing(null)
    setContatos(items.data)
  }

  useEffect(() => {
    getContatos()
  }, [])

  return (
    <div>
      <Global />
      <Container>
        <Formulario
          count={contatos.length}
          onEdit={editContato}
          onCancelEdit={() => setEditing(null)}
          edit={editing}
          onSubmit={postContato}
        />
        {contatos.map(({ id, email, name, phone }) => (
          <Contato
            key={id}
            id={id}
            email={email}
            name={name}
            phone={phone}
            onDelete={deleteContato}
            onEdit={setEditing}
          />
        ))}
      </Container>
    </div>
  )
}

export default App