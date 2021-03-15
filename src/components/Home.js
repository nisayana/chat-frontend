import LoginForm from './LoginForm'
// import { useHistory } from 'react-router-dom'


function Home() {

    
    return(
        <div>
            <div className="header">
                <h1>Chat App</h1>
                <h3>Stay connected</h3>
            </div>
            {/* <MainContiner /> */}
            <LoginForm />
        </div>
    )
}

export default Home;