import { motion } from "motion/react";
import { Facebook, Linkedin, Youtube, Instagram, ExternalLink, Globe } from "lucide-react";
import profilePic from "./assets/ceb915a6-64f9-4fef-a479-db2e2e742551.png";

const SOCIAL_LINKS = [
  {
    name: "Website",
    icon: <Globe className="w-5 h-5" />,
    url: "https://rayaaniforpresident.com",
    color: "hover:bg-red-600",
    description: ""
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/rayaa/",
    color: "hover:bg-[#0A66C2]",
    description: "Professional network & updates"
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    url: "https://www.youtube.com/@RAWNYCArchitects",
    color: "hover:bg-[#FF0000]",
    description: "Watch latest videos"
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "https://web.facebook.com/RAW.NYC.Architects",
    color: "hover:bg-[#1877F2]",
    description: "Connect on Facebook"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://www.instagram.com/rawnycfashion/reels/",
    color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    description: "Daily stories & photography"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative mb-10"
          >
            {/* Premium Shadow Glow */}
            <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-[1px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img 
                src={profilePic} 
                alt="Raya Ani" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <h1 className="text-5xl font-serif font-bold tracking-[0.25em] text-white mb-6 text-center uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Raya Ani
          </h1>

          <div className="candidate-card mb-8 group">
            <div className="fold"></div>
            <div className="points_wrapper">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="point"></div>
              ))}
            </div>
            <div className="inner-content text-center">
              <p className="text-white font-semibold text-sm tracking-[0.15em] mb-1 drop-shadow-sm">CANDIDATE</p>
              <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-medium">
                AIA President Elect | President 2027 | 2028
              </p>
            </div>
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8 opacity-80" />
          
          <h2 className="text-white font-display font-bold text-xs tracking-[0.4em] uppercase text-center opacity-90 drop-shadow-md">
            Architects at Public Service
          </h2>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all duration-300 ${link.color} hover:border-transparent`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-white font-semibold text-base group-hover:text-white">
                  {link.name}
                </h3>
                <p className="text-gray-500 text-xs group-hover:text-white/70 transition-colors">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white/50 transition-colors mr-2" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
