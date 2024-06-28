import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-sky-500 to-green-500 h-screen flex flex-col items-center justify-center text-neutral-500">
      <h1 className="text-5xl text-white font-semibold">App de Telemedicina</h1>
      <h2 className="text-white/80 px-10">
        Conheça o poder do futuro em telemedicina com Synapse Dynamics.
      </h2>
      <div className="w-full flex items-center justtify-center px-10 mt-10 gap-x-1">
        <a className="border p-3 w-[80%] block rounded-full " href="/login">
          <p className="text-white">Entrar</p>
        </a>
        <a className="border p-3 w-[80%] block rounded-full bg-white " href="">
          <p className="text-neutral-500">Cadastrar</p>
        </a>
      </div>
    </section>
  );
}
