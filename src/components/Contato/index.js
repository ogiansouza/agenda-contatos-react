import { BsFillPersonFill } from "react-icons/bs";
import { Item, Infos, Icon, Actions, Container } from './styles'

const Contato = ({ id, name, phone, email, onDelete, onEdit }) => (
    <Container className="contato">
        <Item>
            <Icon>
                <BsFillPersonFill />
            </Icon>
            <Infos>
                <li>{name}</li>
                <li>{phone}</li>
                <li>{email}</li>
            </Infos>
        </Item>
        <Actions>
            <button
                className="delete"
                type="button"
                onClick={() => {
                    onDelete(id);
                }}
            >
                Deletar
            </button>
            <button onClick={()=> onEdit({ id, name, phone, email, })} className="edit" type="button">Editar</button>
        </Actions>
    </Container>
)

export default Contato