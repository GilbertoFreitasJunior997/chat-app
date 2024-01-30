import { FormEvent, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const confirmPassword = confirmPasswordRef.current?.value;

      if (!email || !password || !confirmPassword) return;

      console.log(email, password);
    } catch (e) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <p>Enter your information to create an account</p>
      </div>

      <form
        className='space-y-4'
        onSubmit={handleSubmit}>
        <Input
          id='email'
          label='Email'
          autoFocus
          ref={emailRef}
          required
        />
        <Input
          id='password'
          label='Password'
          type='password'
          ref={passwordRef}
          required
        />
        <Input
          id='confirm-password'
          label='Confirm Password'
          type='password'
          ref={confirmPasswordRef}
          required
        />
        <Button
          className='w-full'
          type='submit'
          disabled={isLoading}>
          Sign Up
        </Button>
      </form>

      <div className='mt-4 text-center text-sm'>
        Already have an account?{' '}
        <Link
          className='underline'
          to='/login'>
          Login
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
