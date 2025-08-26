import React from 'react'
import Java from '../assets/java.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import React_logo from '../assets/react.png'
import Tailwind_logo from '../assets/tailwind.png'
import SpringBoot_logo from '../assets/icons8-spring-boot-144.png'
import JavaScript_logo from '../assets/icons8-javascript-144.png'
import Postgres_logo from '../assets/icons8-postgres-144.png'
import Blue from '../assets/StockCake-Global data network_1756242372.jpg'

const skillsData = [
  { id: 1, image: Java, title: 'Java', description: 'Lorem jjkifkkf ooofofofofo' },
  { id: 2, image: SpringBoot_logo, title: 'Spring Boot', description: 'Lorem jjkifkkf ooofofofofo'},
  { id: 3, image: Postgres_logo, title: 'Postgresql', description: 'Lorem jjkifkkf ooofofofofo '},  
  { id: 4, image: JavaScript_logo, title: 'JavaScript', description: 'Lorem jjkifkkf '},
  { id: 5, image: React_logo, title: 'React', description: 'Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi' },
  { id: 6, image: Html, title: 'HTML', description: 'Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi' }, 
  { id: 7, image: Css, title: 'CSS', description: 'Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi' },
  { id: 8, image: Tailwind_logo, title: 'Tailwind CSS', description: 'Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi' },  
  
]

const SkillBox = ({ image, title, description }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'> {/* Corrigido 'flex-justify-cente' para 'flex justify-center' */}
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
)

export default function skills() {
  return (
    <section 
    id='skills' className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
      {<img src={Blue} alt="left picture"
        className='absolute  ' /> }

      <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
        {/* <header>
          <h1 className='text-3xl sm:text-4xl font-bold'>
            My Expertise <br /> and <span className='text-purple-400'>Skills</span>
          </h1>
          <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum aliquid, veniam aut            
          </p>
        </header> */}
        <header>
  <div className="flex items-center justify-center gap-4 sm:gap-8">
    {/* <img 
      src={toolsonly} // imagem da engrenagem
      alt="Gear icon"
      className="w-10 h-10 sm:w-16 sm:h-16"
    /> */}

    <h1 className="text-3xl sm:text-4xl font-bold text-center">
      My Expertise <br />
      and <span className="text-purple-400">Skills</span>
    </h1>

    {/* <img 
      src={toolsonly} // imagem do robô
      alt="Robot icon"
      className="w-10 h-10 sm:w-16 sm:h-16"
    /> */}
  </div>

  {/* <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum aliquid, veniam aut
  </p> */}
</header>
        <section data-aos='fade-up' data-aos-delay='500'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'> {/* Corrigido 'sm>:gap-6' para 'gap-6' */}
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      {/* <img src={robotTools} alt="right picure"
        className='absolute z-10 right-2 sm:right-6 sm:top-32  transform rotate-12 w-24 h-auto sm:w-32 opacity-70' /> */}
    </section>
  )
}