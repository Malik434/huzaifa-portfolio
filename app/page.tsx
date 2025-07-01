"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Github,
  Download,
  ChevronDown,
  Award,
  BookOpen,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold gradient-text">Malik</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center subtle-grid pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-900/5"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 py-12">
          <AnimatedSection animation="fade-in-up">
            <div className="mb-12 mt-8">
              <img
                src="/profilepic.jpg?height=180&width=180"
                alt="Huzaifa Bin Hamid"
                className="w-44 h-44 object-cover rounded-full border-2 border-purple-400/30 mx-auto mb-8 animate-subtle-float shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
              Huzaifa Bin Hamid
            </h1>

            <p className="text-xl md:text-2xl text-purple-300 mb-8 font-light">
              Computer Science Student & Software Developer
            </p>

            <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Passionate about blockchain technology, AI integration, and
              full-stack development. Currently seeking software development
              internship opportunities to contribute to innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* Download Resume Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg font-medium professional-border"
              >
                <a href="/Huzaifa_Resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-purple-400/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 text-lg font-medium bg-transparent"
              >
                <a
                  href="https://github.com/Malik434"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a dedicated Computer Science student at COMSATS University
                  Islamabad with a passion for cutting-edge technologies. My
                  expertise spans blockchain development, AI integration, and
                  full-stack web applications.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Through hands-on projects and continuous learning, I've
                  developed a strong foundation in modern development practices,
                  always focusing on creating scalable and innovative solutions.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2">
                    Blockchain Enthusiast
                  </Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2">
                    Full-Stack Developer
                  </Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2">
                    AI Integration
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                      <CardTitle className="text-xl text-white">
                        Education
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-purple-300">
                        BS Computer Science
                      </h3>
                      <p className="text-slate-400">
                        COMSATS University Islamabad, Lahore Campus
                      </p>
                      <p className="text-slate-500 text-sm">
                        Feb 2022 – Jan 2026 | CGPA: 2.81/4.00
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-purple-400" />
                      <CardTitle className="text-xl text-white">
                        Languages
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">English</span>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Professional
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Urdu</span>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Native
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Punjabi</span>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Native
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 subtle-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Technical Arsenal
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="slide-in-left" delay={0}>
                <Card className="skill-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <Code className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <CardTitle className="text-xl text-white">
                      Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        C
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Python
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Java (OOP)
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={100}>
                <Card className="skill-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <CardTitle className="text-xl text-white">
                      Web Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        HTML5
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        CSS3
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        JavaScript
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        React.js
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Bootstrap
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <Card className="skill-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <Database className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <CardTitle className="text-xl text-white">
                      Databases
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        MySQL
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Firebase
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Realtime DB
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={300}>
                <Card className="skill-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <Smartphone className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <CardTitle className="text-xl text-white">
                      Mobile & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Android Studio
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        VS Code
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Git/GitHub
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        AI Tools
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-in-left" delay={0}>
                <Card className="project-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                      WEB3 Project Management Tool
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      Final Year Project - In Progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-slate-300 mb-6 flex-1 leading-relaxed">
                      Comprehensive Web3 project management platform with AI
                      integrations, real-time database sync, EVM wallet
                      integration, and IPFS storage support.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Web3
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          AI Integration
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Firebase
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          EVM
                        </Badge>
                      </div>
                      <Button
                        asChild
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                      >
                        <a
                          href="https://taskwiser.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={100}>
                <Card className="project-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                      Portfolio Management System
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      Full-Stack Web Application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-slate-300 mb-6 flex-1 leading-relaxed">
                      Built using PHP, MySQL, and XML with comprehensive CRUD
                      operations and structured database connectivity for
                      efficient portfolio management.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          PHP
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          MySQL
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          XML
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          CRUD
                        </Badge>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={200}>
                <Card className="project-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                      AI-Powered Kanban Board
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      Interactive Task Management
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-slate-300 mb-6 flex-1 leading-relaxed">
                      Responsive Kanban board featuring AI-powered task time
                      estimation, pricing prediction, and comprehensive
                      productivity analytics.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          React.js
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          AI Integration
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Real-time Sync
                        </Badge>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-left" delay={300}>
                <Card className="project-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                      Airbnb + PakWheels Clone
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      UI/UX Clone Project
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-slate-300 mb-6 flex-1 leading-relaxed">
                      Responsive UI clone demonstrating advanced frontend design
                      skills, layout structuring, and cross-device
                      responsiveness.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          HTML5
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          CSS3
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          JavaScript
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Bootstrap
                        </Badge>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <Card className="project-card bg-slate-900/50 border-purple-500/20 card-hover professional-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                      EVM Wallet Manager
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      Blockchain Integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-slate-300 mb-6 flex-1 leading-relaxed">
                      EVM-based wallet manager for seamless onchain payments,
                      wallet balance checking, and secure token transfers using
                      Infura API.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Blockchain
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          EVM
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Infura API
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs">
                          Web3
                        </Badge>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 subtle-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto mb-8"></div>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                I'm actively seeking internship opportunities in software
                development. Let's discuss how I can contribute to your team's
                success.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <Mail className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <p className="text-slate-300">malikhuzaifa043@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <Phone className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-slate-300">+923218189034</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-4 text-lg font-medium professional-border"
                >
                  <a href="mailto:malikhuzaifa043@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-purple-400/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 py-4 text-lg font-medium bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/malikhuzaifa434/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-purple-400/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 py-4 text-lg font-medium bg-transparent"
                >
                  <a
                    href="https://github.com/Malik434"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 mb-2">
            &copy; 2024 Huzaifa Bin Hamid. All rights reserved.
          </p>
          <p className="text-slate-500">Crafted with precision and passion</p>
        </div>
      </footer>
    </div>
  );
}
