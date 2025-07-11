import "./App.css";
import Squares from './blocks/Backgrounds/Squares/Squares'
import { useState, useEffect } from 'react';

interface LinkProps {
  icon: string;
  label: string;
  url: string;
}
interface SvgIconProps {
  className?: string;
}

const WebsiteIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const LinkedInIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const InstagramIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const TwitterIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const EmailIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const CVIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const TikTokIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ThreadsIcon = ({ className }: SvgIconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49" fill="currentColor">
    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 25.197266 11 C 21.175771 11.03063 17.921696 12.404232 15.810547 15.089844 C 13.89599 17.523831 12.96586 20.882337 12.931641 24.982422 L 12.931641 24.990234 L 12.931641 24.998047 C 12.965851 29.118158 13.895484 32.477165 15.810547 34.912109 C 17.922655 37.596431 21.176137 38.96935 25.179688 39 L 25.1875 39 L 25.195312 39 C 28.748351 38.97377 31.450694 38.006097 33.544922 35.914062 C 36.201473 33.259766 36.203796 29.877541 35.291016 27.744141 L 35.291016 27.742188 C 34.743292 26.471756 33.762233 25.400445 32.492188 24.634766 C 32.227773 24.475031 31.514635 24.28877 31.167969 24.123047 C 31.169969 23.697531 31.219702 23.580672 31.164062 23.148438 C 31.005927 21.919581 30.635949 20.561968 29.701172 19.458984 C 28.766412 18.356072 27.253584 17.610589 25.234375 17.597656 L 25.230469 17.597656 L 25.226562 17.597656 C 23.124423 17.597656 21.280446 18.519137 20.183594 20.189453 L 21.855469 21.287109 C 22.598268 20.155956 23.66195 19.598179 25.224609 19.597656 C 26.793251 19.608656 27.607889 20.081872 28.175781 20.751953 C 28.744254 21.422719 29.051777 22.395152 29.181641 23.404297 C 29.182641 23.412297 29.180658 23.419614 29.181641 23.427734 C 28.281937 23.244519 27.343132 23.136719 26.365234 23.136719 C 26.039627 23.136719 25.710212 23.145816 25.373047 23.166016 C 23.462073 23.276328 22.044458 23.897125 21.136719 24.824219 C 20.228639 25.75166 19.875265 26.939342 19.931641 28.001953 C 19.998411 29.252438 20.624371 30.363243 21.572266 31.099609 C 22.520161 31.835976 23.769781 32.224609 25.148438 32.224609 C 25.276619 32.224609 25.403649 32.221944 25.53125 32.214844 C 27.156277 32.124974 28.577075 31.503299 29.546875 30.371094 C 30.440887 29.327368 30.905076 27.893035 31.095703 26.208984 C 31.176903 26.261484 31.346489 26.280874 31.457031 26.347656 L 31.458984 26.347656 C 32.414939 26.923977 33.086849 27.683635 33.453125 28.533203 C 34.069782 29.976014 34.189589 32.441063 32.130859 34.498047 C 30.406781 36.22032 28.402916 36.972864 25.1875 36.998047 C 21.619905 36.968847 19.093236 35.849593 17.382812 33.675781 C 15.829099 31.700282 14.966664 28.813636 14.933594 24.990234 C 14.966654 21.187515 15.829301 18.300519 17.382812 16.326172 L 17.382812 16.324219 C 19.092201 14.149691 21.617465 13.031165 25.205078 13.001953 C 28.790756 13.031153 31.365844 14.154443 33.140625 16.337891 C 33.994022 17.386988 34.660906 18.725217 35.105469 20.335938 L 37.033203 19.804688 C 36.527706 17.973483 35.749962 16.375074 34.693359 15.076172 C 32.517649 12.399475 29.232442 11.030635 25.212891 11 L 25.205078 11 L 25.197266 11 z M 26.365234 25.136719 C 27.309206 25.136719 28.197048 25.224199 28.992188 25.404297 L 28.994141 25.404297 C 29.133358 25.435727 29.061771 25.446809 29.179688 25.474609 C 29.178687 25.491019 29.179687 25.646484 29.179688 25.646484 L 29.179688 25.648438 C 29.051064 27.255066 28.628044 28.369019 28.027344 29.070312 C 27.426644 29.771608 26.635848 30.149663 25.421875 30.216797 C 25.331475 30.221797 25.240255 30.224609 25.148438 30.224609 C 24.147092 30.224609 23.338683 29.940868 22.798828 29.521484 C 22.258973 29.102101 21.965917 28.575 21.929688 27.896484 C 21.900067 27.338096 22.067486 26.732215 22.566406 26.222656 C 23.065327 25.713098 23.942296 25.253091 25.490234 25.164062 L 25.492188 25.164062 C 25.789022 25.146272 26.078842 25.136719 26.365234 25.136719 z"/>
  </svg>
);



const links: LinkProps[] = [
  { icon: <WebsiteIcon className="w-6 h-6" />, label: "Portfolio/Website", url: "https://alexanderg8.github.io/my-portfolio-web/" },
  { icon: <LinkedInIcon className="w-6 h-6" />, label: "LinkedIn", url: "https://www.linkedin.com/in/marcello-alexander-gomez-gomez-130587268/" },
  { icon: <GitHubIcon className="w-6 h-6" />, label: "GitHub", url: "https://github.com/AlexanderG8" },
  { icon: <InstagramIcon className="w-6 h-6" />, label: "Instagram", url: "https://www.instagram.com/xandev008/" },
  { icon: <TikTokIcon className="w-6 h-6" />, label: "Tiktok", url: "https://www.tiktok.com/@xandev008" },
  // { icon: <TwitterIcon className="w-6 h-6" />, label: "Twitter/X", url: "https://x.com/Xandev27561" },
  // { icon: <ThreadsIcon className="w-6 h-6" />, label: "Threads", url: "https://www.threads.com/@xandev008" },
  { icon: <EmailIcon className="w-6 h-6" />, label: "Email", url: "mpalexander@outlook.com" },
  { icon: <CVIcon className="w-6 h-6" />, label: "CV/Resume", url: "https://1drv.ms/b/c/092da4f7880d29cb/Ede8edXmvHlBoxozANe4HQMBhGLKTcsqedD-uINlW4WdsQ?e=5ifylB" },
];

const LinkCard = ({ icon, label, url, index = 0 }: LinkProps & { index?: number }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="link-card animate-float max-w-md transition-all duration-500 flex items-center text-white mb-4"
      style={{ 
        animationDelay: `${Math.random() * 0.8}s`,
        transitionDelay: `${index * 100}ms`
      }}
    >
      <span className="text-2xl mr-3 flex-shrink-0">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 w-full">
        <div className={`profile-container w-full max-w-md mx-auto transition-opacity duration-1000 bg-black/10 backdrop-blur-sm shadow-lg rounded-xl p-6 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ margin: '0 auto' }}>
          
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="profile-image">
              <img 
                src="./src/assets/logo-xandev.png" 
                alt="Foto de perfil" 
                className="w-35 h-35 object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1 animate-pulse-slow">Xandev</h1>
            <p className="text-white/80 text-center mb-2">Developer Software</p>
            <p className="text-white/60 text-sm flex items-center">
              <span className="mr-1">📍</span> Perú
            </p>
          </div>
          
          {/* Links Section */}
          <div className="mb-8">
            {links.map((link, index) => (
              <div 
                key={index} 
                className={`transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${(index * 100) + 300}ms` }}
              >
                <LinkCard {...link} index={index} />
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div 
            className={`text-center text-white/60 text-sm border-t border-white/10 pt-4 mt-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${links.length * 100 + 500}ms` }}
          >
            <p>© {new Date().getFullYear()} - <a target="_blank" href="https://alexanderg8.github.io/my-portfolio-web/">Xandev</a></p>
            <p className="mt-1 mb-3">Conéctate conmigo en redes sociales</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
