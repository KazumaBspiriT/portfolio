import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Education = () => {
  const education = [
    {
      degree: 'Masters in Information Technology',
      institution: 'University of Cincinnati',
      location: 'Cincinnati, Ohio',
      gpa: '3.85 / 4.00',
      graduation: 'Dec 2025',
      note: 'Accelerated Completion; Original Schedule Mid 2026',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelors in Computer Science',
      institution: 'Acharya Nagarjuna University',
      location: 'Vijayawada, Andhra Pradesh',
      graduation: 'May 2022',
      icon: Award,
    },
  ]

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => {
            const Icon = edu.icon
            return (
              <ScrollReveal key={idx} delay={idx * 150} direction="up">
                <div className="group glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-devops-green/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-start mb-6 relative z-10">
                    <div className="p-3 bg-devops-green/20 rounded-lg mr-4 group-hover:bg-devops-green/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-devops-green group-hover:text-emerald-400 transition-colors" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-devops-green transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-devops-green font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                        {edu.institution}
                      </p>
                      <div className="space-y-2 text-gray-400">
                        <div className="flex items-center group/item hover:text-devops-green transition-colors">
                          <Calendar size={16} className="mr-2" />
                          <span>Expected: {edu.graduation}</span>
                        </div>
                        <div className="flex items-center group/item hover:text-devops-green transition-colors">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center group/item hover:text-devops-green transition-colors">
                            <Award size={16} className="mr-2" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                        {edu.note && (
                          <p className="text-sm text-emerald-400 italic mt-3 animate-pulse">
                            {edu.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education

