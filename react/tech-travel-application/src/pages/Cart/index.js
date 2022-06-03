import React, {useContext} from 'react';
import CartContext from '../../context/cart';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total, TitleContainer } from './styles';
import { MdDelete } from 'react-icons/md'

function Cart() {
    const { state, setState } = useContext(CartContext);
    
    const TotalT = state.cart.reduce(
        (acc, travel) => acc + travel.quantity * travel.price, 0,
    );

    return (
        <Container>
            <ContainerList>
                <TitleContainer>    
                    <span>PRODUCTO</span>
                    <span>CANTIDAD</span>
                    <span>PRECIO</span>
                </TitleContainer>
                {state.cart.map((el) => (
                    <TravelItem>
                        <img src={el.photo} alt={el.title} />
                        <Info>
                            <p>{el.title}</p>
                            <strong>{el.price}</strong>
                        </Info>
                        <Quantity readOnly type="number" value={el.quantity} />
                        <Subtotal>
                            <p>{el.quantity * el.price}</p>
                            <button type='button'>
                                <MdDelete size={24} color="#0676d9" />
                            </button>
                        </Subtotal>
                    </TravelItem>
                ))}
                    <Total>
                        <span>TOTAL</span>
                        <p>{ TotalT }</p>
                    </Total>
            </ContainerList>
        </Container>
    )
}

export default Cart;