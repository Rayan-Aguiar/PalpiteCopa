const Input = ({ name, label, ...props }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm text-bold text-gray-500">{label}</label>
        <input {...props} name={name} id={name} />
    </div>
)


export const Login = () => {
    return(
        <div>
                <header className="container flex justify-center m-w-5xl p-4 border-b border-red-300">
                    <img src="/imgs/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </header>
                
                <main className="p-4">
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Entre na sua conta</h2>
                    </div>

                    <form>
                        <Input
                            type="text"
                            name="name"
                            label="Seu e-mail"
                            placeholder="Digite seu e-mail"
                        />

                        <Input
                            type="password"
                            name="password"
                            label="Sua senha"
                            placeholder="Digite sua senha"
                        />
                    </form>

                </main>
        </div>
    )
}