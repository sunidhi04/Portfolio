import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, MapPin, Calendar, Award, Code, Briefcase, GraduationCap, ExternalLink, Download, Heart, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isManualToggle, setIsManualToggle] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-detect night time and set dark theme
  useEffect(() => {
    const checkTimeAndSetTheme = () => {
      if (!isManualToggle) {
        const currentHour = new Date().getHours();
        const isNightTime = currentHour >= 18 || currentHour < 6; // 6 PM to 6 AM
        setIsDark(isNightTime);
      }
    };

    // Check immediately
    checkTimeAndSetTheme();

    // Check every minute to update theme if time changes
    const interval = setInterval(checkTimeAndSetTheme, 60000);

    return () => clearInterval(interval);
  }, [isManualToggle]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setIsManualToggle(true); // Mark as manually toggled
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const experiences = [
    {
      title: "Client Banking Advisor Intern",
      company: "Royal Bank of Canada",
      location: "Kelowna, BC",
      period: "Mar 2022 – Jun 2023",
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        "Delivered day-to-day banking support to 70+ customers weekly, increasing client satisfaction scores by 25%",
        "Educated customers on RBC's digital banking tools, contributing to a 25% uptick in digital adoption",
        "Collaborated with advisors to identify client needs and promote cross-selling, increasing product uptake by 12%",
        "Maintained 100% compliance with RBC's confidentiality, privacy, and financial policies"
      ]
    },
    {
      title: "Financial Officer",
      company: "Girls in Tech UBC",
      location: "Vancouver, BC",
      period: "Sep 2023 – Aug 2024",
      icon: <Heart className="w-6 h-6" />,
      achievements: [
        "Managed a $10,000 annual budget and sponsorships, ensuring funds were aligned with event priorities and club objectives",
        "Prepared monthly financial reports and grant applications, securing an additional $1,200 in student union funding",
        "Supported outreach efforts by drafting sponsorship proposals, resulting in two new partnerships with tech companies",
        "Organized and led a campus-wide hackathon with over 60 participants, coordinating logistics, sponsorships, and technical workshops"
      ]
    }
  ];

  const projects = [
    {
      title: "Personal Finance Dashboard",
      year: "2024",
      tech: ["Python", "Power BI", "Excel"],
      description: "Developed a personal finance dashboard to visualize monthly expenditures, savings trends, and financial goals. Used Python (Pandas, Matplotlib) to clean and process CSV bank data and Power BI to generate real-time interactive charts.",
      metrics: "Real-time data processing",
      link: "#"
    },
    {
      title: "Portfolio Website",
      year: "Feb 2024",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      description: "Developed and deployed a responsive portfolio website showcasing projects, resulting in 500+ unique visitors within the first month. Implemented dynamic content sections using React, improving maintenance efficiency by 40%.",
      metrics: "500+ visitors in first month",
      link: "#"
    },
    {
      title: "Fall Guys Clone (Single-player)",
      year: "Jul 2024",
      tech: ["Unity", "C#"],
      description: "Engineered a single-player adaptation of 'Fall Guys' featuring 5 obstacle course levels, achieving a stable 60 FPS performance across devices. Developed physics-based mechanics and simple AI opponents, enhancing gameplay engagement during user testing.",
      metrics: "60 FPS stable performance",
      link: "#"
    }

  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "SQL", "R", "JavaScript", "C#"],
    "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", "D3.js"],
    "Databases & Tools": ["MySQL", "PostgreSQL", "Git", "Jupyter Notebooks", "Tableau", "Google Analytics"],
    "Frameworks & Technologies": ["React", "Unity", "HTML/CSS", "Node.js"],
    "Soft Skills": ["Communication", "Leadership", "Problem-solving", "Time management", "Adaptability"]
  };

  const achievements = [
    { icon: <Users className="w-8 h-8" />, title: "50+", subtitle: "Customers Served Weekly" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "25%", subtitle: "Digital Adoption Increase" },
    { icon: <Award className="w-8 h-8" />, title: "$6,200", subtitle: "Budget & Grants Managed" },
    { icon: <Code className="w-8 h-8" />, title: "4", subtitle: "Major Projects Completed" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50'}`}>
      {/* Theme Toggle */}
      <Button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'} ${!isManualToggle && isDark ? 'ring-2 ring-purple-400' : ''}`}
        variant={isDark ? "outline" : "default"}
        title={!isManualToggle ? (isDark ? "Auto: Night mode active" : "Auto: Day mode active") : "Manual theme control"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 ${
                  activeSection === section ? 'text-purple-600 dark:text-purple-400 scale-110' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300 animate-scale-in">
              SS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
              Sunidhi Sharma
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Computer Science Student • Banking Professional • Women in Tech Advocate
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Badge variant="secondary" className="text-sm py-2 px-4 hover:scale-105 transition-transform">
                <Award className="w-4 h-4 mr-2" />
                Girls in Tech UBC Leader
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4 hover:scale-105 transition-transform">
                <GraduationCap className="w-4 h-4 mr-2" />
                UBC CS Graduate Dec 2025
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4 hover:scale-105 transition-transform">
                <Heart className="w-4 h-4 mr-2" />
                Empowering Women in Tech
              </Badge>
            </div>
            <div className="flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:shadow-lg transition-shadow">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in">
            Breaking Barriers in Tech
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As a Computer Science student at UBC and former Banking Advisor at RBC, I bring a unique perspective that bridges technology and finance. My journey as a woman in tech has been shaped by leadership roles in organizations like Girls in Tech UBC, where I've worked to create more inclusive spaces in the industry.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about using data analytics and software development to solve real-world problems, with experience spanning from financial dashboards to game development and data visualization tools. My goal is to inspire more women to pursue careers in technology.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center hover:text-purple-600 transition-colors">
                  <MapPin className="w-4 h-4 mr-1" />
                  Vancouver, BC
                </div>
                <div className="flex items-center hover:text-purple-600 transition-colors">
                  <Calendar className="w-4 h-4 mr-1" />
                  Graduating Dec 2025
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="w-full h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold hover:scale-105 transition-transform duration-300 animate-gradient">
                💻
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl hover:rotate-12 transition-transform duration-300">
                👩‍💻
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl hover:-rotate-12 transition-transform duration-300">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in hover-lift" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors flex items-center">
                        {project.title}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                        <Badge variant="outline" className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                          {project.metrics}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs hover:scale-105 transition-transform">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in">
            Technical Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600 dark:text-purple-400 flex items-center group-hover:text-purple-700 transition-colors">
                    <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white animate-fade-in">Let's Connect & Collaborate</h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            I'm always excited to discuss new opportunities, collaborate on projects, or chat about technology, finance, and creating more inclusive spaces in tech.
          </p>
          <div className="flex justify-center flex-wrap gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              <Mail className="w-4 h-4 mr-2" />
              sunidhi04sharma@gmail.com
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300">
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
          </div>
          <div className="mt-12 text-purple-100 text-sm animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="hover:text-white transition-colors cursor-pointer"></p>
            <p className="mt-2 italic">"Empowering women in technology, one line of code at a time."</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 dark:bg-black text-center">
        <p className="text-gray-400 hover:text-gray-300 transition-colors">
          © 2024 Sunidhi Sharma. Breaking barriers and building the future of technology.
        </p>
      </footer>
    </div>
  );
};

export default Index;
