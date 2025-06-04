import React from 'react'

export const Home = () => {
  return (
    <section id='home'
    className='min-h-screen flex items-center justify-center relative'
    >
        <div className='text-center z-10 px-4'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right'>
                Hi, I'm Sasi Tech
            </h1>
            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                  I'm a passionate MSc Computer Science student who loves solving real-world problems  through code. I enjoy working on AI, mobile apps, and web development, with a strong foundation in Python, C++, and modern tools. Always eager to learn and take on new challenges!
            </p>
            <div className='flex justify-center space-x-4'>
                <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.5)] '>
                    View Projects
                </a>

                <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 '>
                    Contact Me
                </a>

            </div>
        </div>

    </section>
  )
}
