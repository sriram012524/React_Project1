import { Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import {useForm} from "react-hook-form"
import * as Yup from 'Yup'
import { yupResolver } from '@hookform/resolvers/yup';


let rendercount =0;

let schema = Yup.object().shape({
    name : Yup.string().required(" Name is Required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/,"Enter Your FullName"),
    email : Yup.string().email()
    .required("Email is Required").matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,4}$/,"Enter a Vaild Email"),
    age : Yup.number().integer().positive().required("Enter you age").min(18,"Enter a Proper age").max(30,"Enter a Proper age"),
    password : Yup.string().required("Password is Required"),
    cpassword : Yup.string().required("Confirm Password is Required").oneOf([Yup.ref("password"),null], "Password Should Match Properly")
});


const SignUp = () => {
      let paperStyle = {
        width :500,
        margin : "20px auto",
        padding : "20px",
        display :"grid",
        gap :"20px"

    };
    rendercount++;
    let { register,handleSubmit, formState:{errors}} = useForm(
{
    resolver : yupResolver(schema)
}


    );
     let handleData = (data)=>{
        console.log(data);
        
     }

    let [input, setInput] = useState("")
  return (
    <Paper elevation={22} style={paperStyle} component="form" onSubmit={handleSubmit(handleData )}>
        <Typography variant='h6'textAlign={"center"}> Create Account - {rendercount}</Typography>
        <TextField label="Name" {...register("name")}
        error = {!!errors.name}
        helperText = {errors.name?.message}
        />
         <TextField label="Age" {...register("age")}  error = {!!errors.age}
        helperText = {errors.age?.message}/>
        <TextField label="Email" {...register("email")}
        error = {!!errors.email}
        helperText = {errors.email?.message}/>
        <TextField label="Password" {...register("password")}
         error = {!!errors.password}
        helperText = {errors.password?.message}
        />
        <TextField label="Confrim Password" {...register("cpassword")}
         error = {!!errors.cpassword}
        helperText = {errors.cpassword?.message}
        />
        <Button  type='submit'>SignUp</Button>
    </Paper>
  )
}

export default SignUp