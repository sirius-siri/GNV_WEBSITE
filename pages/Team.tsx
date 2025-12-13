import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { TeamMember } from '../types';
import { Phone, GraduationCap } from 'lucide-react';

const Team: React.FC = () => {
  // Placeholder for other team members
  const placeholderImg = "https://picsum.photos/600/800"; 
  
  // Update this path if you save the image in a different folder

  
  const teamMembers: TeamMember[] = [
    { 
      id: 1, 
      name: "Akilan", 
      role: "Instructor", 
      expertise: 'Physics & Competitive Strategy',
      contact: "6380836485", 
      image: '/faculty/akilanpassportsizephoto.jpg',
      description: "As the visionary Instructor at Guru Nivas, Akilan brings a transformative approach to Physics. With a deep understanding of competitive exam patterns, he specializes in breaking down complex concepts into intuitive, problem-solving strategies that empower students to tackle even the toughest questions with confidence."
    },
    { 
      id: 2, 
      name: "Praveen Samuel", 
      role: "Chemistry Faculty", 
      expertise: "Organic & Inorganic Chemistry Specialist",
      contact: "9094392244", 
      image: "/faculty/praveen.jpeg",
      description: "Praveen is a dedicated Chemistry mentor known for his ability to make reactions and mechanisms easy to visualize. His structured teaching methods in Organic and Inorganic Chemistry have helped countless students master the subject for both board exams and entrance tests."
    },
    { 
      id: 3, 
      name: "Karthik Nair", 
      role: "Physics Expert", 
      expertise: "Mechanics, Thermodynamics & NEET Physics",
      contact: "9988776655", 
      image: placeholderImg,
      description: "Karthik's classes are a blend of theoretical rigor and practical application. Specializing in Mechanics and Thermodynamics, he ensures that medical aspirants build a rock-solid foundation in Physics, turning a typically feared subject into a scoring strength."
    },
    { 
      id: 4, 
      name: "Priya Rajan", 
      role: "Chemistry Lead", 
      expertise: "Organic & Inorganic Chemistry Specialist",
      contact: "9000111222", 
      image: placeholderImg,
      description: "With a focus on conceptual clarity, Priya leads our Chemistry department with passion. She excels at connecting textbook theories to real-world examples, ensuring students not only memorize but truly understand the chemical world."
    },
    { 
      id: 5, 
      name: "Vimal Sethu", 
      role: "Biology Faculty", 
      expertise: "Zoology, Botany & Medical Entrance Prep",
      contact: "8887776665", 
      image: placeholderImg,
      description: "Vimal is a biology enthusiast who brings the subject to life. His comprehensive coverage of Zoology and Botany, combined with intense diagram-based training, is crucial for students aiming for top ranks in medical entrance examinations."
    },
    { 
      id: 6, 
      name: "Shruti Verma", 
      role: "English Instructor", 
      expertise: "Literature, Grammar & Communicative English",
      contact: "7776665554", 
      image: placeholderImg,
      description: "Shruti believes that language is the foundation of all learning. Her engaging sessions in Literature and Grammar not only improve academic scores but also enhance students' overall communication skills and confidence."
    },
    { 
      id: 7, 
      name: "Deepak K", 
      role: "Computer Science", 
      expertise: "Python, Java & Algorithmic Logic",
      contact: "6665554443", 
      image: placeholderImg,
      description: "Deepak simplifies the world of coding for young minds. From basic algorithmic logic to advanced Python and Java programming, his classes are designed to foster computational thinking and technical proficiency."
    },
    { 
      id: 8, 
      name: "Meena S", 
      role: "Social Studies", 
      expertise: "History, Geography & Civics",
      contact: "5554443332", 
      image: placeholderImg,
      description: "Meena transforms Social Studies from a subject of dates and facts into a fascinating journey through time and space. Her storytelling approach helps students retain information effectively and excel in their exams."
    },
    { 
      id: 9, 
      name: "Rahul M", 
      role: "Junior Instructor", 
      expertise: "Foundation Science & Mathematics",
      contact: "4443332221", 
      image: placeholderImg,
      description: "Rahul specializes in building strong foundations. Working with younger students, he instills a love for Science and Math through interactive problem-solving and curiosity-driven learning."
    },
    { 
      id: 10, 
      name: "Sai Latha", 
      role: "Admin Head", 
      expertise: "Student Counseling & Institute Administration",
      contact: "3332221110", 
      image: placeholderImg,
      description: "As the backbone of our institute's administration, Sai Latha ensures a seamless experience for students and parents. Her guidance in student counseling has been pivotal in keeping our students motivated and on the right track."
    },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-6">Meet Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A team of distinguished educators dedicated to academic excellence.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {teamMembers.map((member, index) => (
          <ScrollReveal key={member.id} delay={0.1}>
            <GlassCard className="p-8 md:p-12">
              <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Section - Alternates Left/Right based on index */}
                <div className={`flex-1 ${index % 2 !== 0 ? 'text-left' : 'text-left md:text-right'}`}>
                  {/* Name */}
                  <h3 className="text-3xl md:text-4xl font-serif text-[#D32F2F] mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  
                  {/* Role / Contact Subtext */}
                  <div className={`flex flex-col gap-1 text-sm text-gray-500 mb-4 font-light uppercase tracking-widest ${index % 2 !== 0 ? 'items-start' : 'items-start md:items-end'}`}>
                     <span>{member.role}</span>
                     <span>{member.contact}</span>
                  </div>

                  {/* Gold Separator Line */}
                  <div className={`h-[3px] w-12 bg-[#FFD700] mb-6 ${index % 2 !== 0 ? 'mr-auto' : 'mr-auto md:ml-auto md:mr-0'}`} />
                  
                  {/* Description Paragraph */}
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    <span className="font-semibold text-gray-900">{member.name}</span> {member.description.replace(new RegExp(`^${member.name}\\s*`), '')}
                  </p>

                   {/* Expertise Tag */}
                  <div className={`inline-flex items-center space-x-2 text-[#D32F2F] bg-[#D32F2F]/5 px-4 py-2 rounded-full ${index % 2 !== 0 ? '' : 'flex-row-reverse space-x-reverse'}`}>
                     <GraduationCap size={18} />
                     <span className="text-sm font-medium">{member.expertise}</span>
                  </div>
                </div>

                {/* Image Section - Alternates Right/Left based on index */}
                <div className="w-full md:w-[350px] shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white h-[350px] md:h-[400px]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + member.name + "&background=FF6B6B&color=fff&size=512";
                      }}
                    />
                     {/* Subtle overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/20 to-transparent opacity-50" />
                  </div>
                </div>

              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Team;