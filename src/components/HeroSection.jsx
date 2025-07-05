// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Ayush
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Sareen
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I create engaging web experiences using modern front-end technologies, and I also work on machine learning projects that solve real-world problems through data.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {!typingDone ? (
              <TypeAnimation
                sequence={[
                  "Hi, I'm Ayush",
                  600,
                  "Hi, I'm Ayush Sareen",
                  600,
                  () => setTypingDone(true),
                ]}
                speed={50}
                wrapper="span"
                repeat={0}
                className="text-foreground"
              />
            ) : (
              <span>
                Hi, I'm <span className="text-primary">Ayush</span>
                <span className="text-gradient ml-2">Sareen</span>
              </span>
            )}
          </h1>

          {/* Paragraph (static) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
           I create engaging web experiences as a full-stack developer using modern technologies across the front and back end, and I also work on machine learning projects that solve real-world problems through data.
          </p>

          {/* Button */}
          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
