import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector} from 'react-redux';



function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"></img>
            </a>
            <Menu>
                {cars && cars.map((car, index) => 
                    <a key ={index} href='#'>{car}</a>
                )}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrap>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrap>
                {cars && cars.map((car, index) => 
                   <li key={index}><a href='#'>{car}</a></li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        margin: 10px;
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: nowrap;
    }
    @media(max-width: 786px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
    margin: 10px;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    text-align:left;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.3s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a {
            font-weight: 600;
        }
    }
`
const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`