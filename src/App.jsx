
import Header from './layout/Header';
import './App.css';



const userName = null
const isLogged = false


const App = () => {

    const userSkills = [
        'HTML 5',
        'SCSS',
        'JavaScript',
        'React JS',
        'HTML 5'
    ]

  return (
    <>
    <Header />
      {/* <header className="header">
        <h1>Movies App</h1>
      </header> */}
      <section style={{ color: 'aqua' }}>

        {/* Conditional render ---- */}

        {/* {isLogged && <p>Hello {userName}</p>} */}
        {/* <p>{isLogged ? `Hello ${userName}` : `Please Log In!`}</p> */}
        {/* {isLogged ? <p>Hello {userName}</p> : <button>Log in</button>} */}


        {/* <p>Number: { 2 + 6 }</p>   
        <p>{ userName.toUpperCase() }</p>   
        <p>{ new Date().toLocaleDateString()}</p>    */}
        {/* <p>{ if(userName) console.log('Test') }</p>   Так не можна робити в JSX */}
        {/* <br />
        <label htmlFor="input_name">Your name</label>
        <input type="text" id="input_name" required/> */}

        {/* --- List render */}
        <ul>
            {/* <li>HTML 5</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>React JS</li> */}
            {userSkills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>

      </section>

    </>
  )
}

export default App;