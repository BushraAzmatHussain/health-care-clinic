import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [error , setError] =useState('');
    const [isLogin, setIsLogin] = useState(false);
    const {signInUsingGoogle } =useAuth();


    const auth = getAuth();


    const toggoleLogin = e =>{
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email , password);
        if(password.length<6){
            setError('Password must be at least 6 characters long')
            return;
        }

        isLogin?processLogin(email, password):createNewUser(email , password);
        
}

        const processLogin =(email ,password)=>{
            signInWithEmailAndPassword(auth , email , password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error=>
                {
                    setError(error.message);
                })

        }

        const createNewUser = (email , password) =>{
            createUserWithEmailAndPassword( auth , email ,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
        }
        

    
    return (
        <div className="mx-5 m-5 p-5">


<form onSubmit={handleRegistration}>
    <h3 className="fw-bold text-primary ">Please {isLogin ? 'Login' : 'Register'}</h3>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggoleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">Already Registered?</label>
      </div>
    </div>
  </div>
  

  <div className="row mb-3 text-danger">
      {
          error
      }

  </div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
</form>

            <br/><br/><br/><br/>
            <h3 className="text-primary fw-bold">Login With Google</h3>
            <button onClick={signInUsingGoogle} className="btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;