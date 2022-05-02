console.log(React); // double checks React is functioning as intended

const rootElement = document.querySelector('.root')

// dynamic data
const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const student = {
    firstName: 'Vincent',
    lastName: 'Wainman',
}
const date = new Date().toISOString().split('T')[0]

// JSX element, header
const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Student: {student.firstName} {student.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1991
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {student.firstName} {student.lastName} is approximately {age} years old
    </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
        </div>
    </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app
const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)