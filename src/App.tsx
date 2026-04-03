import { motion } from "motion/react";
import { Facebook, Linkedin, Youtube, Instagram, ExternalLink, Globe } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "Website",
    icon: <Globe className="w-6 h-6" />,
    url: "https://rayaani-builds.lovable.app/",
    description: ""
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/rayaa/",
    description: "Professional network & updates"
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    url: "https://www.youtube.com/@RAWNYCArchitects",
    description: "Watch latest videos"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://www.instagram.com/rawnycfashion/reels/",
    description: "Daily stories & photography"
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://web.facebook.com/RAW.NYC.Architects",
    description: "Connect on Facebook"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/10 blur-[120px] rounded-full pointer-events-none" />

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
            {/* Minimalist Shadow Glow */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-none opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-52 h-52 rounded-none overflow-hidden border-[1px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img 
                src="profile.png" 
                alt="Raya Ani" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/architect/400/400";
                }}
              />
            </div>
          </motion.div>
          
          <h1 className="text-5xl font-narrow font-bold tracking-[0.25em] text-white mb-6 text-center uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Raya Ani
          </h1>

          <div className="candidate-card mb-8 group rounded-none border-white/20">
            <div className="inner-content text-center">
              <p className="text-brand-red font-semibold text-sm tracking-[0.15em] mb-1 drop-shadow-sm">CANDIDATE</p>
              <p className="text-brand-red text-[10px] uppercase tracking-[0.2em] font-medium">
                AIA President Elect | President 2027 | 2028
              </p>
            </div>
          </div>

          <div className="w-16 h-[2px] bg-white mb-8 opacity-80" />
          
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
              className="group relative flex items-center p-0 rounded-none bg-white border-2 border-white transition-all duration-300 hover:bg-black"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-none bg-black text-white group-hover:bg-white group-hover:text-black transition-all duration-300 border-r-2 border-white group-hover:border-black">
                {link.icon}
              </div>
              <div className="pl-6 flex-1 py-4">
                <h3 className="text-black font-bold text-base uppercase tracking-widest group-hover:text-white transition-colors">
                  {link.name}
                </h3>
                {link.description && (
                  <p className="text-zinc-600 text-[10px] uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                    {link.description}
                  </p>
                )}
              </div>
              <div className="pr-6">
                <ExternalLink className="w-4 h-4 text-black group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
