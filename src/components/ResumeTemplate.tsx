import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe, User, Languages, Briefcase, Folder, CheckCircle2 } from "lucide-react";

export const ResumeTemplate = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div 
      ref={ref}
      className="w-[210mm] min-h-[297mm] bg-white flex text-[#333] font-sans"
      style={{ 
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        margin: "0 auto",
        position: "fixed",
        top: "-10000px",
        left: "-10000px",
        zIndex: -1000
      }}
    >
      {/* Left Sidebar */}
      <div className="w-[35%] bg-[#1a2b3c] text-white p-10 flex flex-col">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Vishal Khudai</h1>
          <p className="text-xl text-gray-300">2D & 3D Artist</p>
        </div>

        <div className="space-y-4 mb-12 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 opacity-70" />
            <span>khudaivishal@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 opacity-70" />
            <span>+91 7874120249</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 opacity-70" />
            <span>Gujrat, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-4 h-4 opacity-70" />
            <span>Vishal Khudai</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 opacity-70" />
            <span>Portfolio</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5" />
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-white/20 pb-1 flex-1">Profile</h2>
          </div>
          <p className="text-[10px] leading-relaxed text-gray-300 text-justify">
            I'm Vishal Khudai, a passionate Game Artist and Computer Engineer, specializing in both 2D and 3D art at The AppGuruz. Since joining the company in June 2020 as a Junior Artist, I’ve grown into my current role as a Senior Artist. My background in computer engineering complements my creative work, helping me approach game art with both technical skill and artistic vision. I enjoy collaborating with talented teams, tackling new challenges, and pushing the limits of game design to create captivating visuals that bring projects to life.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Languages className="w-5 h-5" />
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-white/20 pb-1 flex-1">Languages</h2>
          </div>
          <div className="space-y-3 text-xs">
            {[
              { name: "Gujarati", level: 5 },
              { name: "Hindi", level: 4 },
              { name: "English", level: 3 },
            ].map(lang => (
              <div key={lang.name} className="flex items-center justify-between">
                <span>{lang.name}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= lang.level ? 'bg-white' : 'bg-white/20'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-white/20 pb-1 flex-1">Software Known</h2>
          </div>
          <div className="space-y-2 text-xs font-bold">
            <p>Adobe Photoshop</p>
            <p>Blender</p>
            <p>Generative AI tools</p>
            <p>Procreate</p>
            <p>Affinity Photo & Designer</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-12 bg-[#f8f9fa]">
        {/* Experience */}
        <div className="mb-10">
          <div className="flex items-center gap-3 bg-gray-200/50 p-2 px-4 rounded mb-6">
            <Briefcase className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-widest">Professional Experience</h2>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-bold">Senior Game Artist</h3>
            </div>
            <p className="text-sm font-bold text-gray-600 mb-1">The AppGuruz</p>
            <p className="text-xs text-gray-500 mb-4 italic">06/2020 – Present | Gujarat, India</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs text-gray-700">
              <li>Began as a Junior Artist and progressed to Senior Artist through dedication and skill development.</li>
              <li>Specialized in 2D and 3D game art, creating compelling visuals and detailed models for multiple projects.</li>
              <li>Collaborated with cross-functional teams, contributing to creative direction and project success.</li>
              <li>Led several projects, managing teams and ensuring timely delivery of high-quality results.</li>
              <li>Stayed updated with industry trends and integrated new tools and techniques to push creative boundaries.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center gap-3 bg-gray-200/50 p-2 px-4 rounded mb-6">
            <Folder className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-widest">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-3 text-xs font-bold text-gray-800">
            <p>Merge HomeTown: Merge Games</p>
            <p>Merge Fever: Merge Games</p>
            <p>Hexa Fever: Color Sort Puzzle</p>
            <p>Sherlock: Mystry Merge</p>
            <p>Candy Sort: Triple Match</p>
            <p>Tales & Dragons: Merge Puzzle</p>
            <p>Wizard World: Magic Merge</p>
            <p>Call of Legends: Tower Defense</p>
            <p>Epic Merge: Magic Match Puzzle</p>
            <p>Knit Sort Jam</p>
            <p>Thread Color: Block Jam Puzzle</p>
            <p>Idle Cityscape Tycoon</p>
            <p>Pinball - Smash & Hit</p>
          </div>
        </div>
      </div>
    </div>
  );
});

ResumeTemplate.displayName = "ResumeTemplate";
