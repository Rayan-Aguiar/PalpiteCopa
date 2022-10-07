export function Home() {
  return(

    <div className="h-screen bg-red-700 text-white flex flex-col items-center p-4 space-y-6">

    <header className="container flex justify-center m-w-5xl p-4">
        <img src="/imgs/logo-fundo-vermelho.svg" className="w-40" />
    </header>

        <div className="container p-4 m-w-5xl flex-1 flex flex-col md:flex-row space-y-6 items-center md:space-y-0 md:space-x-6">
            
            <div className="md:flex-1 flex justify-center">
                <img src="/imgs/photo.png" alt="foto da página" className=" w-full max-w-md" />
            </div>

            <div className="md:flex-1 flex flex-col space-y-6">
                <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>

                <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
                    Criar minha conta
                </button>

                <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">
                    Fazer Login
                </button>

            </div>
        </div>

    </div>
  )
  
}
