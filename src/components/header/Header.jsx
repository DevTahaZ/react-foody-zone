import React from 'react'
import styled from 'styled-components'

function Header({ SetSearch }) {
  
  return (
    <MainComponent>
      <Top>
        <img src="/title.svg" alt="" />
        <input 
          onChange={(e) => SetSearch(e.target.value)} 
          className='input' 
          type="text" 
          placeholder='Search Food....'
        />
      </Top>
    </MainComponent>
  )
}

export default Header

const MainComponent = styled.div`
  display: grid;
  place-items: center;
  height: 12rem;
`

const Top = styled.div`
  display: grid;
  place-items: center;
  gap: 1.5rem;
  height: 6.5rem;

  img {
    width: 185px;
    height: 39px;
  }

  .input {
    display: flex;
    align-items: center;
    padding: 10px 90px 10px 15px;
    border: 1px solid #FF0909;
    border-radius: 5px;
    background: transparent;
    color: white;
    outline: none;
    &::placeholder {
      color: white;
    }
  }

  @media (min-width: 768px){
    width: 85%;
    display: flex;
    justify-content: space-between;
  }
`

