'use client';

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {

  const searchParams = useSearchParams();

  const error = searchParams.get('error')

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/mesas",
    })
  }

  return (
    <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold text-xl mb-3">Faça seu Login</h2>
      <input
        type="email"
        name="email"
        id=""
        className="input input-primary w-full"
        placeholder="Email" />
      <input
        type="password"
        name="password"
        id=""
        className="input input-primary w-full"
        placeholder="Senha" />

      <button type="submit" className="btn btn-primary w-full text-cyan-50">Login</button>

      {error === "CredentialsSignin" && <div className="text-red-600">Erro no Login</div>}

    </form>
  )
}

export default LoginForm;