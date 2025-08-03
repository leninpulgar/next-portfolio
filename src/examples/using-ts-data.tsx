// Este es un archivo de ejemplo que muestra cómo importar datos desde un archivo TypeScript
import Projects from "@/components/Projects";

// Importamos los datos desde el archivo TypeScript
import projectsData from "@/data/projects";
// También podríamos importar el tipo si lo necesitamos
import { Project } from "@/data/projects";

// Podemos usar los datos directamente
const projects = projectsData;

// O podríamos crear una función que filtre o modifique los proyectos
function getFilteredProjects(): Project[] {
  // Por ejemplo, filtrar solo proyectos con ID menor a 3
  return projectsData.filter(project => project.id < 3);
}

export default function WorkExample() {
  // Podemos usar los datos filtrados si queremos
  const filteredProjects = getFilteredProjects();
  
  return (
    <div>
      <h1>Ejemplo usando datos desde TypeScript</h1>
      
      {/* Usando todos los proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Projects key={project.id} {...project} />
        ))}
      </div>
      
      {/* Usando proyectos filtrados */}
      <h2>Proyectos Filtrados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Projects key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}