import  { useState } from 'react';
import CustomInput from '../CustomInput';
import FilledBtn from '../FilledBtn';
import { loginUser } from '../../api/getUsers';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions';

export default function LoginForm() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password).then(res => { console.log(res);  dispatch(loginSuccess(res));})
   
    navigate("/");   
  };

  return (
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full px-10 lg:px-[100px]'>
          <CustomInput value={email} id="email" type="email" placeholder="Email" onChange={handleEmailChange} />
          
          <CustomInput value={password} id="password" type="password" placeholder="Password" onChange={handlePasswordChange} />

          <p className='text-golden font-lato font-semibold text-[14px] leading-[22px] text-right cursor-pointer'
              onClick={() => alert("Clicked to change password")} >Forgot password?</p>
          
          <FilledBtn type="submit" text="Sign in" className="w-full"/>
    </form>
  );
}