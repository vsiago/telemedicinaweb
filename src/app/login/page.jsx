"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, loading, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await login(username, password);
      if (success) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <section className="h-screen bg-emerald-400 flex flex-col items-center justify-center ">
      <h1 className="text-xl text-white font-semibold">Acesse sua conta</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-y-2 text-white w-full px-10 mt-10"
      >
        <input
          className="p-2 w-full rounded-xl bg-white/60 border-2 border-white"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          gap-y-2
          text-white
        />
        <input
          className="p-2 w-full rounded-xl bg-white/60 border-2 border-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-white rounded-lg p-2 text-neutral-500"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-20 text-white">
        Ainda não tem uma conta? <br />{" "}
        <Link className="font-bold" href="/signup">
          Cadastre-se aqui
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
