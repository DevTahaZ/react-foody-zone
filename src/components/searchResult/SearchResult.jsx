import React from 'react'
import styled from 'styled-components'
import FoodCard from "../foodCard/FoodCard"

function SearchResult({ PassSearch }) {

  return (
    <FoodCardContainer>
        <FoodCards>
            <FoodCard Search={PassSearch}/>
        </FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 192px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("/src/assets/bg.png");
  background-size: cover;
`

const FoodCards = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 20px;
    padding-top: 2rem;
  }
`