import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-b-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 border-gray-400 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 hover:bg-red-400 h-9 px-8 rounded-lg text-white font-medium text-lg cursor-pointer">
          Buscar
        </button>
      </section>
      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg mb-4">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://http2.mlstatic.com/D_NQ_NP_2X_629907-MLB114926945242_082026-F-chevrolet-corsa-flex-manual.webp"
            alt="Imagem do carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">chevrolet corsa maxx </p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2008/2008 | 198.200 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 35.990
            </strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-zinc-700">São Paulo - SP</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
