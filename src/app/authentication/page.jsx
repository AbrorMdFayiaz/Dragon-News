"use client";
import React from 'react'
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
// import { authClient } from "@/lib/auth-client"; //import the auth client
import { redirect } from 'next/navigation';
import { authClient } from '../../../lib/auth-client';

const page = () => {

    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      user[key] = value.toString();
    });

    console.log("mnmn", user);





const  { data, error } = await authClient.signUp.email({
        email: user.email, // user email address
        password: user.password, // user password -> min 8 characters by default
        name: user.name, // user display name
        image: user.photoURL, // User image URL (optional)
        callbackURL: "/dashboard" ,// A URL to redirect to after the user verifies their email (optional)
    },
    
//     {
//         onRequest => {
//             //show loading
//             return <span className="loading loading-spinner loading-xl"></span>;
//         },
//         onSuccess => {
//             //redirect to the dashboard or sign in page
//             redirect("/dashboard");
//         },
//         onError => {
//             // display the error message
//             alert(error.message);
//         },
// }

);



    


    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    console.log ("display-Data",data , "display-Error",error);
  };
  return (
    <>
{/*     
     <div className="pt-20">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-3/4 mx-auto border p-4 ">
        
            <h1 className="text-2xl font-bold mb-4 text-center p-9 border-b-2 border-base-300 ">Register your account</h1>

            <label className="label">Name</label>
            <input type="text" className="input bg-base-300  w-full" placeholder="Your Name" />

            <label className="label">Photo URL</label>
            <input type="text" className="input bg-base-300  w-full" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" className="input bg-base-300 w-full" placeholder="Enter your email" />
            
            <label className="label">Password</label>
            <input type="password" className="input bg-base-300  w-full" placeholder="Enter your password" />
            
            <div className='space-x-2'><input type="checkbox" className="checkbox validator" placeholder='Accept Term & Conditions' required title="Required" /><span> Accept Term & Conditions</span></div>
            <p className="validator-hint">Required</p>
            
            <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
    </div>
    
    */}

    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
        // validate={(value) => {
        //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        //     return "Please enter a valid name";
        //   }

        //   return null;
        // }}
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>



      <TextField
        // isRequired
        name="photoURL"
        type="text"
        // validate={(value) => {
        //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        //     return "Please enter a valid name";
        //   }

        //   return null;
        // }}
      >
        <Label>Photo URL</Label>
        <Input placeholder="Enter your photo url" />
        <FieldError />
      </TextField>


      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>





      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    </>
  )
};

export default page;