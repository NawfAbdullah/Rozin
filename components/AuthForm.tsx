'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';





const AuthForm = ({type}:{type:string}) => {
  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter()

    const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password:''
    },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>)=> {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        console.log(data)
        try {
            //Sign Up with Appwrite

            if(type==='sign-up'){
                // const newUser = await signUp(data);
                // setUser(newUser)
            }

            if(type==='sign-in'){
                // const response = await signIn({
                //    email:data.email,
                //    password:data.password
                //});

                //if(response) router.push('/')
                // setUser(newUser)
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false)
        }
            
      }


    return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2 flex'>
                <Image 
                    src="/icons/logo.svg"
                    width = {34}
                    height={34}
                    alt="Rozin logo"
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold">Rozin</h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-2">
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {
                    user?'Link Account':type==='sign-in'?'Sign In':'Sign Up'}
                </h1>
                <p className="text-16 font-normal text-gray-600">
                    {user?'Link your account to get started':'Please Enter your details'}
                </p>
            </div>
        </header>
        {user?(
            <div className="flex flex-col">
                {/* Plaid Link */}
            </div>
        ):(
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {
                            type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} label={'First Name'} name='firstName' placeholder={'Enter your First Name'} type='text'/>
                                        <CustomInput control={form.control} label={'Last Name'} name='lastName' placeholder={'Enter your Last Name'} type='text'/>
                                    </div>
                                    
                                     <CustomInput control={form.control} label={'Address'} name='address' placeholder={'Enter your address'} type='text'/>
                                     <CustomInput control={form.control} label={'City'} name='city' placeholder={'Trichy'} type='text'/>
                                     
                                     <div className="flex gap-4">
                                        <CustomInput control={form.control} label={'State'} name='state' placeholder={'Example: TN'} type='text'/>
                                        <CustomInput control={form.control} label={'Postal Code'} name='postalCode' placeholder={'620020'} type='text'/>
                                     </div>
                                     <div className='flex gap-4'>
                                        <CustomInput control={form.control} label={'Date of Birth'} name='dateOfbirth' placeholder={'yyyy-mm-dd'} type='text'/>
                                        <CustomInput control={form.control} label={'SSN'} name='ssn' placeholder={'Example:1234'} type='text'/>
                                     </div>
                                </>
                            )
                        }
                       <CustomInput control={form.control} label={'Email'} name='email' placeholder={'Enter your email'} type='text'/>
                       <CustomInput control={form.control} label={'Password'} type='password' name='password' placeholder={'Enter your password'}/>
                        <div className="flex flex-col gap-4">
                            <Button className='form-btn' type="submit" disabled={isLoading}>
                                {isLoading?
                                <><Loader2 size={20} className='animate-spin' /> &nbsp; Loading...</>:
                                type==='sign-in'?"Sign In":"Sign Up"
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
                <footer className="flex justify-center gap-1">
                    <p className='text-14 font-normal text-gray-600'>
                        {type==='sign-in'?"Don't have an account?":"Already have an account?"}
                    </p> 
                    <Link href={type==='sign-in'?'/sign-up':'/sign-in'} className='form-link'>
                        {type==='sign-in'?'Sign Up':'Sign In'}
                    </Link>
                </footer>
            </>
        )}
    </section>
  )
}

export default AuthForm