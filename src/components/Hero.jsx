import React from "react";
import Navbar from './Navbar';
import { BsJustify } from "react-icons/bs";
import livro from '../assets/robotlivro.png'
import Apresentacao from "./Apresentacao";

// Importe corretamente as imagens
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import globeNet from '../assets/StockCake-Illuminated Globe Network_1755803987.jpg'

export default function Hero() {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
            {/* Gradiente de fundo */}
            {/* <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl" /> */}

            {/* Navbar */}
            <Navbar />

            {/* Conteúdo principal */}
            <main
                id="home"
                className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 pt-24 mt-14 md:mt-0 z-10"
            >
                {/* Seção de texto */}
                <section
                    className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    {/* Bola de cor rosa desfocada */}
                    <div className="absolute -z-10 w-60 h-60 bg-[#090470] rounded-full blur-3xl opacity-50 -top-5 -left-12" />

                    <header>
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold [text-shadow:2px_2px_4px_#1C0C93] text-white mb-4 ">
                            Patricia Starck Bernardi
                        </h1>
                        <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#1C0C93] [text-shadow:2px_2px_2px_#f5eeee] mb-2">
                            Full Stack Developer
                        </h2>
                    </header>

                    <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    {/* Ícones sociais */}
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="https://github.com/patriciastarck" target="_blank">
                            <img src={github} alt="github" className="w-11 h-11" />
                        </a>
                        <a href="https://www.linkedin.com/in/patricia-starck-bernardi/" target="_blank">
                            <img src={linkedin} alt="linkedin" className="w-11 h-11" />
                        </a>
                    </div>

                    {/* Botão */}
                    <a href="#">
                        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
                            Download CV
                        </button>
                    </a>
                </section>

                {/* Imagem do robô */}
                <figure data-aos="fade-up" data-aos-delay="500" className=" flex-1 flex justify-center md:justify-end mt-0">
                    <img
                        src={Apresentacao}
                        alt="robot image" 
                        class="25/6" 
                        className=" h-[130px] sm:h-[220px] md:h-[400px] w-[250px] sm:w-[480px] object-cover rounded-lg"
                    />
                    <div className='absolute z-0 w-40 h-40 sm:w-120 sm:h-90                 bottom-0 left-1/2 transform -translate-x-1/2'></div>
                </figure>
            </main>
        </div>
    );
}
