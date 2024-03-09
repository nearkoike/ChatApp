import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, confirmPasswordReset } from 'firebase/auth'
import { UserContext } from '../../context/UserContext';

// styles
import styles from './Login.module.css'

export default function Login() {
  const {setUser} = useContext(UserContext);

  //const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) =>  {
    e.preventDefault()  
    setIsPending(true)
    try{
      const authentication = getAuth();      
      const res = await signInWithEmailAndPassword(authentication, email, password);
      setUser(res.user.displayName)
      console.log("display name: ")
      console.log(res.user)
      if(res.user){
          navigate('/')
      }
      setIsPending(false)
      console.log(res.user.email);
    }catch(err){
      setIsPending(false)
      setError(err.message)
    }    
  }

  return (              
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>login</h2>
        <label>
          <span>email:</span>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </label>
        { !isPending && <button className="btn">Login</button> }
        { isPending && <button className="btn" disabled>loading</button> }
        { error && <p>{error}</p> }      
      </form>
  )
}
