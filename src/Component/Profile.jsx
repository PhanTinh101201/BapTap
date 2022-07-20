import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width : 300px;
height: 300px;
border-radius: 50%;
background-color: pink;
display: flex;
align-items: center;
flex-direction: column;
`
const Name = styled.h1`
margin-top: 30px;
color: black;
`
const Class = styled.h1`
color: black;
`
const Profile = () => {
  return (
    <>
        <Container>
        <Name>Phan Tình</Name>
        <Class>FE25</Class>
        </Container>
    </>
  )
}

export default Profile