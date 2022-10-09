import {Icon, Card} from '~/components'

export const Dashboard = () =>(
    <div className="">
        <header className="bg-red-500 text-white">
            <div className="container max-w-3xl  flex justify-between p-4">
                <img src="/imgs/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
                <a href="/profile">
                    <Icon name="profile" className="w-10" />
                </a>
            </div>
        </header>

        <main>
            <section id='header' className="bg-red-500 text-white">
                <div className='container max-w-3xl space-y-3 p-4'>
                    <span>Olá Bruno!</span>
                    <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                </div>
            </section>

            <section id='content' className='p-4 container max-w-3xl space-y-4 '>
                
                <div className='p-4 flex space-x-4 justify-center items-center'>
                    <Icon name="arrowLeft" className="w-6 text-red-500" />
                    <span className='font-bold'>24 de novembro </span>
                    <Icon name="arrowRight" className="w-6 text-red-500" />

                </div>
                
                <div className='space-y-4'>
                    <Card 
                    timeA = {{slug: 'sui'}}
                    timeB = {{slug: 'cam'}}
                    match = {{time: '7:00'}}
                    />

                    <Card 
                    timeA = {{slug: 'por'}}
                    timeB = {{slug: 'gan'}}
                    match = {{time: '7:00'}}
                    />

                    <Card 
                    timeA = {{slug: 'cor'}}
                    timeB = {{slug: 'uru'}}
                    match = {{time: '7:00'}}
                    />
                </div>
            </section>


        </main>
    </div>
)