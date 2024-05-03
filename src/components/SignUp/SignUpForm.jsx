import  { useState } from 'react';
import CustomInput from '../CustomInput';
import FilledBtn from '../FilledBtn'; 
import SelectGender from './SelectGender';
import { createUser } from '../../api/createUser';
import { useNavigate } from 'react-router-dom'; 

export default function SignUpForm() {
    const navigate = useNavigate();

   const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '', 
        gender: ''
    });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
 };
    const handleSubmit = async(e) => {
        e.preventDefault();
 
        createUser(formData);
        alert("Success");
        navigate("/login")
    };

  return (
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full px-10 lg:px-[100px]'>
          <CustomInput value={formData.name} id="name" name="name" type="text" placeholder="Full Name" onChange={handleChange} />

          <CustomInput value={formData.username} id="username" name="username" type="text" placeholder="Username" onChange={handleChange} />

          <CustomInput value={formData.email} id="email" name="email" type="email" placeholder="Email"  onChange={handleChange} />
          
          <CustomInput value={formData.password} name="password" id="password" type="password" placeholder="Password" onChange={handleChange} />

          <SelectGender value={formData.gender} onChange={handleChange}/>
          
          <FilledBtn type="submit" text="Sign in" className="w-full"/>
    </form>
  ); 
}

