import { FormEvent, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/input';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      if (!email || !password) return;

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
        <h1 className='text-3xl font-bold'>Login</h1>
        <p>Enter your username and password to login to your account</p>
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
        <Button
          className='w-full'
          type='submit'
          disabled={isLoading}>
          Login
        </Button>
      </form>

      <div className='mt-4 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <a
          className='underline'
          href='#'>
          Sign up
        </a>
      </div>
    </>
  );
};

export default LoginPage;
