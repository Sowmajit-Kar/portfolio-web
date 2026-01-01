// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "REACT", level: 80, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },
//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
// ];

// export const SkillsSection = () => {
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill) => (
//             <div 
//               key={skill.name} 
//               className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <span className="font-semibold">{skill.name}</span>
//                 <span className="text-primary text-sm">{skill.level}%</span>
//               </div>
              
//               {/* Progress Bar Container */}
//               <div className="w-full bg-muted rounded-full h-2">
//                 <div 
//                   className="bg-primary h-2 rounded-full transition-all duration-500" 
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
              
//               <p className="text-[10px] uppercase tracking-tighter text-muted-foreground mt-3">
//                 {skill.category}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };















// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "React", level: 80, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
// ];

// export const SkillsSection = () => {
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill) => (
//             <div 
//               key={skill.name} 
//               className="bg-card p-6 rounded-lg shadow-sm border border-border card-hover"
//             >
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium text-foreground">{skill.name}</span>
//                 <span className="text-primary text-sm">{skill.level}%</span>
//               </div>
              
//               {/* Progress Bar Background */}
//               <div className="w-full bg-muted rounded-full h-2">
//                 {/* Progress Bar Fill */}
//                 <div 
//                   className="bg-primary h-2 rounded-full transition-all duration-500" 
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
              
//               <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2 block">
//                 {skill.category}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from "react";
// import {cn} from '@/lib/utils';


// const skills = [
//   //Frontend
//   { name: "HTML/CSS", level: 95, catagory: "frontend" },
//   { name: "REACT", level: 80, catagory: "frontend" },
//   { name: "Tailwind CSS", level: 90, catagory: "frontend" },
//   { name: "Next.js", level: 80, catagory: "frontend" },
//   //Backend
//   { name: "Node.js", level: 80, catagory: "backend" },
//   { name: "Express", level: 75, catagory: "backend" },
//   { name: "MongoDB", level: 70, catagory: "backend" },
//   { name: "PostgreSQL", level: 65, catagory: "backend" },
//   { name: "GraphQL", level: 60, catagory: "backend" },
//   //Tools
//   { name: "Git/GitHub", level: 90, catagory: "tools" },
//   { name: "Docker", level: 70, catagory: "tools" },
//   { name: "Figma", level: 85, catagory: "tools" },
//   { name: "HTML/CSS", level: 95, catagory: "tools" },
// ];

// const catagories=["all","frontend","backend","tools"]




// export const SkillsSection = () => {
// const [activeCatagory,setActiveCatagory]= useState("all");
// const filteredSkills = skills.filter((skills)=> activeCatagory==="alll || skill.catagory === activeCatagory"
// );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary ">Skill</span>
//         </h2>
//           <div className="flex  flex-wrap justify-center gap-4 mb-12 ">
//               {filteredSkills.map((catagory,key) =>(
//                 <button key ={key}
//                 onClick={() =>setActiveCatagory(catagory)}
//                  className="{cn("px-5 py-2 rounded-full trasition-colors duration-300 capitalize",
//                  activeCatagory === catagory ? "bg-primary text-primary-foreground": "bg-secondary/70 text-forefround hover:bd-secondary"
                
//                 )}
                
//                 >
                   
//                 {catagory}

//                 </button>


//              ))}

//           </div>




//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill, key) => (
//             <div key={key} className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border">
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium">{skill.name}</span>
//                 <span className="text-primary">{skill.level}%</span>
//               </div>
//               <div className="w-full bg-secondary/50 h-2  rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-_1.5s_ease-out"
//                   style={{ width: `${skill.level} + "%"` }}
//                 ></div>
//                  <div className="text-right mt-1">
//                       <span className="text-sm text-muted-foreground">{skill.level}%</span>


//                  </div>





//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import { cn } from '@/lib/utils';

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, catagory: "frontend" },
  { name: "REACT", level: 80, catagory: "frontend" },
  { name: "Tailwind CSS", level: 90, catagory: "frontend" },
  { name: "Next.js", level: 80, catagory: "frontend" },
  //Backend
  { name: "Node.js", level: 80, catagory: "backend" },
  { name: "Express", level: 75, catagory: "backend" },
  { name: "MongoDB", level: 70, catagory: "backend" },
  { name: "PostgreSQL", level: 65, catagory: "backend" },
  { name: "GraphQL", level: 60, catagory: "backend" },
  //Tools
  { name: "Git/GitHub", level: 90, catagory: "tools" },
  { name: "Docker", level: 70, catagory: "tools" },
  { name: "Figma", level: 85, catagory: "tools" },
  { name: "HTML/CSS", level: 95, catagory: "tools" },
];

const catagories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCatagory, setActiveCatagory] = useState("all");

  // Fix: Removed quotes and fixed the comparison logic
  const filteredSkills = skills.filter((skill) => 
    activeCatagory === "all" || skill.catagory === activeCatagory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary ">Skill</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {/* Fix: Map over catagories array, not filteredSkills */}
          {catagories.map((catagory, key) => (
            <button
              key={key}
              onClick={() => setActiveCatagory(catagory)}
              // Fix: Removed quotes from around the cn function
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCatagory === catagory 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {catagory}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fix: Map over filteredSkills to show the result of the filter */}
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  // Fix: Corrected style string template
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground capitalize">{skill.catagory}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};