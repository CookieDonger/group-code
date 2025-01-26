'use client';

import { signIn } from "next-auth/react";
 
const LoginPage = () => {
  return (
    <div>
      <h1>Sign in with Google</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}

export default LoginPage;