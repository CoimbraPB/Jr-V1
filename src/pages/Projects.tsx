import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  color: string;
  image: string;
}

const projects: Project[] = [
  { id: 150, name: 'Aubergine 150 ST-R', color: '#4a154b', image: 'https://picsum.photos/seed/porsche150/800/600' },
  { id: 143, name: 'Blue ST 3.4', color: '#1e3a8a', image: 'https://picsum.photos/seed/porsche143/800/600' },
  { id: 123, name: 'Oak Green 911 ST 3.4', color: '#14532d', image: 'https://picsum.photos/seed/porsche123/800/600' },
  { id: 122, name: 'Chartreuse Green 911 ST 3.4', color: '#84cc16', image: 'https://picsum.photos/seed/porsche122/800/600' },
  { id: 115, name: 'Black 911 S 3.4 Evolution', color: '#000000', image: 'https://picsum.photos/seed/porsche115/800/600' },
  { id: 114, name: 'Gulf Blue 911 2.7 RS Anniversary', color: '#38bdf8', image: 'https://picsum.photos/seed/porsche114/800/600' },
  { id: 110, name: 'Gulf Blue 911 3.4 Evolution Targa', color: '#38bdf8', image: 'https://picsum.photos/seed/porsche110/800/600' },
  { id: 100, name: 'Aubergine 911 STR 3.4', color: '#4a154b', image: 'https://picsum.photos/seed/porsche100/800/600' },
  { id: 99, name: 'Black ST 3.4', color: '#000000', image: 'https://picsum.photos/seed/porsche99/800/600' },
  { id: 98, name: 'Slate Grey 911 Evolution McQueen', color: '#475569', image: 'https://picsum.photos/seed/porsche98/800/600' },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative">
        <div className="w-full lg:w-1/2">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-12 flex items-start">
            Projects <span className="text-sm tracking-widest uppercase ml-4 mt-4">150</span>
          </h1>
          
          <div className="flex flex-col border-t border-white/10">
            {projects.map((project) => (
              <ProjectRow 
                key={project.id} 
                project={project} 
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-1/2 sticky top-32 h-[calc(100vh-160px)]">
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                key={hoveredProject}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <img 
                  src={projects.find(p => p.id === hoveredProject)?.image} 
                  alt="Project Preview" 
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ project, onHover, onLeave }: { project: Project, onHover: () => void, onLeave: () => void, key?: React.Key }) {
  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-8 w-1/4">
        <span className="font-display text-xl font-medium">{project.id}</span>
      </div>
      <div className="flex-1 flex items-center gap-6">
        <div 
          className="w-24 h-8 rounded-full border border-white/20 overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-50" style={{ backgroundColor: project.color }}></div>
          <svg viewBox="0 0 100 30" className="w-full h-full absolute inset-0 z-10 fill-white/20">
            <path d="M10,20 C15,10 30,5 50,5 C70,5 85,10 90,20 L90,25 L10,25 Z" />
          </svg>
        </div>
        <span className="font-display text-xl font-medium" style={{ color: project.color !== '#000000' ? project.color : '#ffffff' }}>
          {project.name}
        </span>
      </div>
      <div className="w-1/4 flex justify-end">
        <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          View more
        </span>
      </div>
    </Link>
  );
}
