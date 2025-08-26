import React, {useState, useEffect} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    
    useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY > homeHeight / 2) { // Ex: Esconda o logo depois de rolar metade da seção home
          setShowLogo(false);
        } else {
          setShowLogo(true);
        }
      } else {
        // Se a seção 'home' não existir, esconde o logo para ter um comportamento seguro
        setShowLogo(window.scrollY < 100); // Ex: esconde o logo depois de 100px
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpeza: remove o event listener quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const NavbarLinks = [
  { id: 1, name: 'Home', link: '#home' },
  { id: 2, name: 'About', link: '#about' },
  { id: 3, name: 'Skills', link: '#skills' },
  { id: 4, name: 'My Projects', link: '#projects' }
];  

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300' >
        <div className='container mx-auto flex items-center justify-between p-5'>
           <a
  href="#home"
  className={`text-4xl font-bold italic text-white transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0'}`}
>
  Portfolio
</a>

            {/*Mobile menu toggle*/}            
            <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <FiX className='w-8 h-8 text-white' /> : <FiMenu className='w-8 h-8 text-white' />}
</button>


            {/*Desktop navitaion */}
            <nav className='hidden md:flex items-center space-x-7'>
              {NavbarLinks.map((link)=>(
                <a key={link.id} href={link.link} className='hover:text-gray-200 text-lg'>
                  {link.name}
                </a>
              ))}
              <button
                className='inline-flex text-white border-2 py-2 px-6 focus:outline-none
                  hover:bg-purple-800 rounded-full text-lg'
                >
                  {" "}
                  Contact{" "}
              </button>
            </nav>
        </div>

        {/*Mobile navigation */}
        <div
        className={`${isOpen ? 'block':'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full
        h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
          {/*Close button */}
          <button className='absolute top-5 right-5 text-white' onClick={() =>setIsOpen(false)}>
            <FiX className='w-8 h-8' />
          </button>
          {/*Mobile Navigation*/}
          {NavbarLinks.map((link)=> (
            <a 
            key={link.id} 
            href={link.link} 
            className='text-lg text-white hover:text-gray-300' 
            onClick={()=>setIsOpen(false)}
            >
            {link.name}
            </a>
          ))}
          {/*Contact Button */}
          <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800
          rounded-full text-lg'
          >Contato</button>
        </div>

    </header>
  )
}
