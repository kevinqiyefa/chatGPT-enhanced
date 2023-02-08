'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import chatGPTLogo from '@/assets/chatGPT.png';

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src={chatGPTLogo} width={300} height={300} alt="logo" priority />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn('google')}
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
