import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #f6f6f6;
    }
`;

let imgs = [
    'https://symbols.getvecta.com/stencil_83/68_html5-icon.09e3da538e.svg',
    'https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg',
    'https://symbols.getvecta.com/stencil_25/39_javascript.0ca26ec4ab.svg',
    'https://symbols.getvecta.com/stencil_25/70_react.76a8d36b4b.svg',
    'https://www.w3schools.com/howto/img_avatar.png'
]

const Imagegroup = styled.div`
    display: flex;
    gap: 5rem;
    justify-content: center;
    img{
        max-width: 15%;
    }
`
const StyledHeader = styled.header`
    text-align: center;
`
const CardContainer = styled.div`
    background-color: #a1def2e0;
    text-align: center;
    margin: 15px;
    border-radius: 10px;
    padding: 25px;

    h1 {
        margin-top: 0;
    }
    button {
        margin-top: 20px;
        appearance:none;
        -webkit-appearance:none;
        padding:10px;
        border:none;
        background-color:#ff8c84;
        color:#fff;
        font-weight:600;
        border-radius:5px;
        width:25%;
    }
    input[type=text] {
        padding:10px;
        margin:10px 0;
        border:0;
        border-radius:5px;
    }
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

const UserCard = styled.div`
    background-color: white;
    margin: 15px;
    border-radius: 10px;
    padding: 25px;

    img {
        border-radius: 50%;
        max-width: 10%;
    }
`

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
        appearance:none;
        -webkit-appearance:none;
        padding:10px;
        border:none;
        background-color:#4fc9d8;
        color:#fff;
        font-weight:600;
        border-radius:5px;
    }
`


const html = (
    <div>
        <GlobalStyle />
        <StyledHeader>
            <h3>Front End Technologies</h3>
            <Imagegroup>
                <img src={imgs[0]} alt="HTML5"></img>
                <img src={imgs[1]} alt="CSS3"></img>
                <img src={imgs[2]} alt="JS"></img>
                <img src={imgs[3]} alt="React"></img>
            </Imagegroup>
        </StyledHeader>
        <CardContainer>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and updates.</p>
            <InputContainer>
                <input type="text" placeholder="FirstName"/>
                <input type="text" placeholder="LastName"/>
                <input type="text" placeholder="Email"/>
            </InputContainer>
            <button type="button">Subscribe</button>
        </CardContainer>
        <UserCard>
            <img src={imgs[4]} alt="Profile"></img>
            <p>Vincent Wainman ✅</p>
            <p>Developer in Training, Canada</p>
            <p>SKILLS</p>
            <Skills>
                <button type="button">HTML</button>
                <button type="button">CSS</button>
                <button type="button">Sass</button>
                <button type="button">JS</button>
                <button type="button">React</button>
                <button type="button">Redux</button>
                <button type="button">Node</button>
                <button type="button">MongoDB</button>
                <button type="button">Python</button>
                <button type="button">Flask</button>
                <button type="button">Django</button>
                <button type="button">NumPy</button>
                <button type="button">Pandas</button>
                <button type="button">Data Analysis</button>
                <button type="button">MySQL</button>
                <button type="button">GraphQL</button>
                <button type="button">D3.js</button>
                <button type="button">Gatsby</button>
                <button type="button">Docker</button>
                <button type="button">Heroku</button>
                <button type="button">Git</button>
            </Skills>
            <p>🕑 Joined on August 30, 2020</p>
        </UserCard>
    </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(html, rootElement)