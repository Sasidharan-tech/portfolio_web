import React from 'react'

export const About = () => {
  const frontendSkills = ["React", "Tailwind CSS", "JavaScript","bootstrap"];
  const backendSkills = ["Node.js", "Python", "MongoDB","AWS"];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center'>
                {" "}
                About Me</h2>   
        
        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 -translate-all'>
            <p className='text-gray-300 mb-6'>
                I’m passionate about exploring emerging tech trends and applying them to real-world challenges. Constant learning and growth fuel my journey as a developer.
            </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>Frontend</h3>
            <div className='flex flex-wrap gap-2'>
              {frontendSkills.map(skill => (
                <span key={skill} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 hover:bg-blue-500/20 hover:shadow-[]'>
                  {skill}
                </span>
              ))}

            </div>
          </div>

          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>Backend</h3>
            <div className='flex flex-wrap gap-2'>
              {backendSkills.map(skill => (
                <span key={skill} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 hover:bg-blue-500/20 hover:shadow-[]'>
                  {skill}
                </span>
              ))}

            </div>
          </div>
        </div>

        </div>
        </div>
    </section>
  )
}
