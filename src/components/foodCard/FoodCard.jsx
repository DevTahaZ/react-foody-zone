import React from 'react'
import styled from 'styled-components'
import foodArray from '../data'

function FoodCard({ Search }) {

  return (
    <>
      {foodArray
        .filter((item) => {
          return Search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(Search)
        })
        .map(({id, url, name, text, price}) => (
      <Card key={id}>
        <Top>
          <div>
            <img src={url} />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        </Top>
        <Button>
          {price}
        </Button>
      </Card>
      ))}
    </>
  )
}

export default FoodCard

const Card = styled.div`
  width: 340px;
  height: 167px;
  flex-shrink: 0;
  padding-top: 1rem;
  margin-top: 20px;
  border-radius: 20px;
  border: 0.659px solid #98F9FF;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
`

const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  img {
    width: 133px;
    height: 133px;
  }
  h3 {
    margin-bottom: 8px;
  }
`

const Button = styled.button`
    width: 57px;
    height: 25px;
    background-color: #FF4343;
    color: #fff;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 17px;
    bottom: 14px;
    transition: all 500ms;
    &:hover {
      background-color: #fff;
      color: #FF4343;
      cursor: pointer;
    }
`