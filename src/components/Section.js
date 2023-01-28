import React from 'react'
import styled from 'styled-components'

function Section({title, description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap  bgImage={ backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>  {/* Buttons became single component */}
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            { rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
            }
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-image:${props => `url("images/${props.bgImage}")` };
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between; // vertical
    align-items:center; // horizontal

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
        flex-direction:column;
    }
`
const LeftButton= styled.div`
    background-color:rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius:5px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cusrsor:pointer;
    margin-left:10px;
    margin-right:10px;
    @media (max-width: 768px){
        margin-bottom:10px;
    }

`
const RightButton= styled(LeftButton)`
    background-color:rgba(255, 255, 255, 0.8);
    color:black;
    font-weight:700;
`

const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite  1.5s;
`

const Buttons = styled.div``