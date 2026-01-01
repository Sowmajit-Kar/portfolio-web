// export const Projects =() =>{
//      {
//       id:1,
//       title:"SaaS Landing Page",
//       description: "A beautiful landing page app using React and Tailwind .",
//       image:"/projects/project1.png",
//       tags:["React","TailwindCSS,"Superbase"],
//       demoUrl:"#",
//       githubUrl:"#", 



    



//      },
//     {
//       id:2,
//       title:"SaaS Landing Page",
//       description: "A spotify clone project  .",
//       image:"/projects/project2.png",
//       tags:["React","TailwindCSS,"Superbase"],
//       demoUrl:"#",
//       githubUrl:"#", 
    



//      },
   
//  {
//       id:3,
//       title:"SaaS Landing Page",
//       description: "A weather app which shows you the realtime data using the latest tech.",
//       image:"/projects/project1.png",
//       tags:["React","TailwindCSS,"Superbase"],
//       demoUrl:"#",
//       githubUrl:"#", 
    



//      },
   



   
// }


// export const ProjectsSection = () =>{
//      return <section id ="projects" className="py-24 px-4 relative">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4 font-bold mb-4 text-center">
//                     Featured
//                    <span className="text-primary">
//                   Projects
//                    </span>

//                 </h2>
//                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">

//                 </p>
//                     <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                         Here auto some of my recent projects, Each project was carefully crafted with to detail , performence , and user experience. 


//                      </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                           {Projects.map(Projects,key)=>(
//                             <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
//                                <div className="h-48 overflow-hidden">
//                                 <img src={Projects.image} alt={Projects.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
//                                </div>
//                                 <div className="p-6">
//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                         {Projects.tags.map((tag)=>(
//                                             <span className="px=2 py-1 text-xs font-medium rounded-full  border  bg-primary bg-secondary text-secondary-foreground">
//                                                 {tag}


//                                             </span>


//                                         ))}

//                                     </div>
//                                 </div>


//                             </div>


//                           )}

//                         </div>





//             </div>




//      </section>;


  



// }












// 1. Changed to a const array (variable) instead of a function
// import { ExternalLink, Github } from "lucide-react";

// export const projectsData = [
//   {
//     id: 1,
//     title: "SaaS Landing Page",
//     description: "A beautiful landing page app using React and Tailwind.",
//     image: "/projects/project1.png",
//     // Fixed: Added missing closing quotes for TailwindCSS and corrected Supabase spelling
//     tags: ["React", "TailwindCSS", "Supabase"], 
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Spotify Clone", // Fixed title consistency
//     description: "A spotify clone project.",
//     image: "/projects/project2.png",
//     tags: ["React", "TailwindCSS", "Supabase"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Weather App", // Fixed title consistency
//     description: "A weather app which shows you the realtime data using the latest tech.",
//     image: "/projects/project3.png",
//     tags: ["React", "TailwindCSS", "Supabase"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         {/* Fixed text-4 to text-4xl */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>
        
//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Fixed map syntax: projectsData.map((project, key) => ...) */}
//           {projectsData.map((project, key) => (
//             <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border">
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, tagIndex) => (
//                     // Fixed px=2 to px-2 and removed conflicting bg-primary/bg-secondary
//                     <span key={tagIndex} className="px-2 py-1 text-[10px] font-medium rounded-full border bg-secondary text-secondary-foreground">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 {/* Added Title and Description rendering (they were missing in the original loop) */}
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
//               </div>
//                  <div className="flex justify-between items-center">
//                     <div  className="flex space-x-3">
//                     <a href={project.demoUrl} target="_blank" className="text-foregound/80 hover:text-primary trainsition-colors duration-300">
//                         <ExternalLink size={20}/>

//                     </a>
//                     <a href={project.githubUrl}>
//                         <Github size={20}/>
//                     </a>
//                     </div>
//                  </div>
//             </div>
//           ))}

//         </div>
//              <div className="text-center mt-12">
//                  <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
//                  target="_blank"
//                  href="https://github.com/Sowmajit Kar"
//                  >
//                     Check MY Github<ArrowRight size={16}/>
                    
//                  </a>

//              </div>

//       </div>
//     </section>
//   );
// };

// 1. Added missing ArrowRight import
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"], 
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description: "A spotify clone project.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather app which shows you the realtime data using the latest tech.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Wrapped everything in the p-6 padding div to keep alignment consistent */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-[10px] font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-6">{project.description}</p>
                
                {/* Fixed typo: foregound -> foreground and trainsition -> transition */}
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20}/>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Ensure the link is valid (encoded spaces) */}
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sowmajit-Kar"
          >
            Check My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};
