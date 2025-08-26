import { section } from "framer-motion/client";
import React from "react";
import robotPenLeft from '../assets/8-penLeft.png'
import robotPenRight from'../assets/9-penRight.png'
import finger from '../assets/StockCake-Future At Fingertips_1756229011.jpg'

export default function Contact() {
    return (
        <section data-aos='fade-up' 
        data-aos-delay='300'
        className="min-h-screen overflow-hidden justify-center flex items-centernp-6 mt-10 relative"
        >

            <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4x1 w-full relative">
                <aside className="w-full md:w-1/2 relative flex justify-center">
                
                <img src={finger} alt="Contato"
                class="w-4/6" 
                className=" h-[330px] sm:h-[440px] md:h-[400px] w-[250px] sm:w-[480px] object-cover rounded-lg"                
                />
                 <div className='absolute z-0 w-40 h-40 sm:w-120 sm:h-20 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
                bottom-0 left-1/2 transform -translate-x-1/2'></div>
                </aside>                  

                {/*Contact form */}
                <section className="p-8 w-full md:w-1/2">
                    <header className="mb-6">
                        <h2 className="text-4xl font-bold text-center text-white">Contato</h2>
                    </header>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                            <input type="text" name="name" id="name" placeholder="Seu nome"
                            className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"  />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Name</label>
                            <input type="email" name="email" id="name" placeholder="Seu email"
                            className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"  />
                        </div>
                        <div>
                            <label htmlFor="Message" className="block text-gray-300 font-medium mb-2">Message</label>
                            <textarea name="message" id="message" placeholder="Sua mensagem"
                            className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"></textarea>
                        </div>
                        <button className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
                        hover:shadow-[0_0_40px_rgba(182,0,128,0.7)] rounded-full text-lg">Enviar Mensagem</button>
                        <div className=' sm:w-120 sm:h-20 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
                        bottom-0 left-1/2 transform -translate-x-1/2'></div>
                    </form>


                </section>
            </article>
        </section>
    )
}