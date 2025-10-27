import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Экологический проект Байкал',
      category: 'Web Design',
      description: 'Интерактивная платформа для охраны природы и экологического туризма',
      image: 'https://cdn.poehali.dev/projects/f66524fb-83fe-423b-9e50-719c92281683/files/32a6d11a-b2fb-4daf-a01e-678002a3286d.jpg',
      tags: ['React', 'Design', 'Animation']
    },
    {
      id: 2,
      title: 'Очистка рек России',
      category: 'Mobile App',
      description: 'Мобильное приложение для координации волонтёров и организации субботников',
      image: 'https://cdn.poehali.dev/projects/f66524fb-83fe-423b-9e50-719c92281683/files/f99f0411-bb4d-49fd-95d4-ba758c68e20a.jpg',
      tags: ['Mobile', 'UX/UI', 'Social']
    },
    {
      id: 3,
      title: 'Устойчивое развитие',
      category: 'Brand Identity',
      description: 'Полный брендинг экологического движения с фирменным стилем',
      image: 'https://cdn.poehali.dev/projects/f66524fb-83fe-423b-9e50-719c92281683/files/32a6d11a-b2fb-4daf-a01e-678002a3286d.jpg',
      tags: ['Branding', 'Identity', 'Print']
    }
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95, icon: 'Palette' },
    { name: 'Frontend Development', level: 90, icon: 'Code2' },
    { name: 'Brand Identity', level: 85, icon: 'Sparkles' },
    { name: 'Motion Design', level: 80, icon: 'Zap' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">Антон</h1>
          <div className="flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Навыки</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакт</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-sm text-primary font-medium">Доступен для проектов</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              Креативный<br />
              <span className="text-gradient glow">Разработчик</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Создаю уникальные цифровые продукты с фокусом на пользовательский опыт и визуальную эстетику
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="group">
                Посмотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Связаться
              </Button>
            </div>
            <div className="flex gap-4 pt-8">
              <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
            <img 
              src="https://cdn.poehali.dev/projects/f66524fb-83fe-423b-9e50-719c92281683/files/11b2cf01-7dc9-4475-be36-7594b13c5c27.jpg"
              alt="Антон"
              className="relative rounded-3xl w-full aspect-square object-cover border-2 border-primary/20"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-black mb-6">
              Избранные <span className="text-gradient">проекты</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подборка моих последних работ в области веб-дизайна и разработки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-90' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">{project.category}</span>
                    <Icon 
                      name="ArrowUpRight" 
                      size={20} 
                      className={`text-primary transition-transform duration-300 ${
                        hoveredProject === project.id ? 'translate-x-1 -translate-y-1' : ''
                      }`}
                    />
                  </div>
                  <h4 className="text-2xl font-bold group-hover:text-gradient transition-all">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-black mb-6">
              Мои <span className="text-gradient">навыки</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологии и инструменты, с которыми я работаю ежедневно
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={skill.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg">{skill.name}</h5>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-gradient-shift"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundSize: '200% 200%'
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-to-br from-card via-card to-card/50 border-primary/20 animate-glow-pulse">
            <div className="text-center space-y-6">
              <h3 className="text-5xl md:text-6xl font-black">
                Начнём <span className="text-gradient">проект?</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Всегда открыт для интересных задач и сотрудничества
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="group text-lg px-8">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать письмо
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Антон. Создано с любовью к деталям</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
