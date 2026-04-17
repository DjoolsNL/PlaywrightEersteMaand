import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';

//#region Beschrijving file
// In dit script gebruiken we de terminal om een aantal meerkeuzevragen te printen die de user
// beantwoorden kan. Het script geeft aan of een antwoord goed of fout is.
// We definieren eerst een type variabele voor onze vragen en daarna een array met variabelen van dat
// type. Elke variabele staat voor een meerkeuzevraag. 
// Vervolgens loopen we door de array. Het script zorgt dat vraag na vraag geprint wordt en dat de
// user na elke vraag een antwoord in de terminal kan invoeren. De ingevoerde waarde wordt vergeleken
// met het correcte antwoord en in de terminal wordt na elke vraag aangegeven of het antwoord goed of
// fout was.
// Als het script eindigt wordt de score van de user in de terminal weergegeven.
//#endregion

/**
 * Datastructuur van een meerkeuzevraag. 
 */
type Vraag = {
   "onderwerp": string;
   "vraag": string;
   "keuzes": {
      "a": string;
      "b": string;
      "c": string;
      "d": string;
   };
   "antwoord": string;
};

/**
 * Array meerkeuzevragen IT-algemeen
 */
const algemeneIT: Vraag[] = [
   {
      "onderwerp": "Control Structures",
      "vraag": "What is the purpose of an 'if'-statement in programming?",
      "keuzes": {
         "a": "It declares a loop",
         "b": "It defines a method",
         "c": "It checks a condition and executes code based on the result",
         "d": "It prints text on the console"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Control Structures",
      "vraag": "What is the purpose of a control structure in programming?",
      "keuzes": {
         "a": "It controls memory use",
         "b": "It controls the variables that are accessible",
         "c": "It controls the flow of the program's execution",
         "d": "It is another word for the User Interface"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "HTML",
      "vraag": "What does the acronym HTML stand for?",
      "keuzes": {
         "a": "Hyperlink and Text Markup Language",
         "b": "High-Level Programming Language",
         "c": "Hypertext Markup Language",
         "d": "Home Tool Markup Language"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "CSS",
      "vraag": "What does the acronym CSS stand for?",
      "keuzes": {
         "a": "Cascading Style Sheets",
         "b": "Computer Science and Software",
         "c": "Client-Side Scripting",
         "d": "Common Source System"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Web Development",
      "vraag": "Which programming language is widely used for web development?",
      "keuzes": {
         "a": "Java",
         "b": "Python",
         "c": "JavaScript",
         "d": "C++"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Database",
      "vraag": "What is the purpose of a database management system (DBMS)?",
      "keuzes": {
         "a": "To perform mathematical calculations",
         "b": "To design user interfaces",
         "c": "To create web applications",
         "d": "To store and manage data"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Operating System",
      "vraag": "What is the function of an operating system?",
      "keuzes": {
         "a": "To perform data analysis",
         "b": "To write programs",
         "c": "To browse the internet",
         "d": "To manage computer hardware and software resources"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Networks",
      "vraag": "What is the purpose of an IP address?",
      "keuzes": {
         "a": "To uniquely identify a device on a network",
         "b": "To encrypt data during transmission",
         "c": "To display web pages",
         "d": "To provide virus protection"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Compiler",
      "vraag": "What is the purpose of a compiler in programming?",
      "keuzes": {
         "a": "To translate source code into machine code",
         "b": "To manage databases",
         "c": "To create user interfaces",
         "d": "To establish network connections"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "WWW",
      "vraag": "What does the acronym URL stand for?",
      "keuzes": {
         "a": "Ultra Rapid Language",
         "b": "User Research Laboratory",
         "c": "Universal Routing Language",
         "d": "Uniform Resource Locator"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Caching",
      "vraag": "What is the role of a cache in computing?",
      "keuzes": {
         "a": "To encrypt sensitive information",
         "b": "To temporarily store data for faster access",
         "c": "To execute program instructions",
         "d": "To maintain network security"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Security",
      "vraag": "What is the role of an antivirus software?",
      "keuzes": {
         "a": "To manage network resources",
         "b": "To design database schemas",
         "c": "To write computer programs",
         "d": "To protect against malware and viruses"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Web Development",
      "vraag": "What is the purpose of a web browser?",
      "keuzes": {
         "a": "To access and view websites",
         "b": "To store and organize data",
         "c": "To create 3D graphics",
         "d": "To debug software code"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Security",
      "vraag": "What is the purpose of a backup in computing?",
      "keuzes": {
         "a": "To manage computer networks",
         "b": "To compile programming code",
         "c": "To browse the internet",
         "d": "To create copies of data for safekeeping"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Security",
      "vraag": "What is the role of a firewall in network security?",
      "keuzes": {
         "a": "To monitor and control incoming and outgoing network traffic",
         "b": "To store and manage data",
         "c": "To create website layouts",
         "d": "To develop mobile applications"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Hardware and Software",
      "vraag": "Which of the following is an example of hardware?",
      "keuzes": {
         "a": "Operating System",
         "b": "Word Processing Software",
         "c": "Central Processing Unit (CPU)",
         "d": "Web Browser"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "The Cloud in IT Infrastructure",
      "vraag": "What does the term 'cloud' refer to in IT infrastructure?",
      "keuzes": {
         "a": "A physical server located in an organization's data center",
         "b": "A software application that runs on a computer",
         "c": "A virtualized IT environment accessible over the internet",
         "d": "A network of interconnected computers within an organization"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Backend vs. Frontend",
      "vraag": "Which part of a web application is responsible for data processing, server communication, and business logic?",
      "keuzes": {
         "a": "Backend",
         "b": "Frontend",
         "c": "Both Backend and Frontend",
         "d": "None of the above"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Server Side",
      "vraag": "What does serverside refer to in web development?",
      "keuzes": {
         "a": "Rendering web pages on the client's device",
         "b": "Storing and managing data on the user's device",
         "c": "Processing user interface interactions",
         "d": "Code execution on the web server"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Operating Systems",
      "vraag": "What is the primary function of an operating system?",
      "keuzes": {
         "a": "Running applications and managing user interfaces.",
         "b": "Managing hardware resources and providing services to applications.",
         "c": "Performing data backup and ensuring data security.",
         "d": "Providing access to the internet and managing network connections."
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Cross-Platform Software",
      "vraag": "What is meant by cross-platform software?",
      "keuzes": {
         "a": "Software that can be accessed and used from any location with an internet connection.",
         "b": "Software that runs only on specific hardware platforms and is not compatible with others.",
         "c": "Software that can be easily ported or adapted to work on multiple operating systems or platforms.",
         "d": "Software that is designed specifically for mobile devices like smartphones and tablets."
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Cross-Platform Software",
      "vraag": "In the context of cross-platform software, what does platform refer to?",
      "keuzes": {
         "a": "The physical location where the software is developed and maintained.",
         "b": "The specific device, operating system, or environment on which the software runs.",
         "c": "The team or group of developers responsible for creating the software.",
         "d": "The programming language used to code the software application."
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "IT Trends",
      "vraag": "Which of the following is NOT trending in IT right now?",
      "keuzes": {
         "a": "Artificial Intelligence and Machine Learning",
         "b": "Blockchain and Cryptocurrencies",
         "c": "Virtual Reality (VR) and Augmented Reality (AR)",
         "d": "Printers and Fax Machines"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "DNS Server",
      "vraag": "What is the purpose of a DNS server?",
      "keuzes": {
         "a": "To compress data for storage",
         "b": "To translate domain names into IP addresses",
         "c": "To analyze network traffic",
         "d": "To create graphic designs"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Virtual Private Network",
      "vraag": "What is the purpose of a VPN (Virtual Private Network)?",
      "keuzes": {
         "a": "To design user interfaces",
         "b": "To convert analog signals to digital signals",
         "c": "To create a secure, private connection over a public network",
         "d": "To perform complex calculations"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Data Transmission over the Internet",
      "vraag": "What protocol is commonly used for secure data transmission over the internet?",
      "keuzes": {
         "a": "HTTP",
         "b": "FTP",
         "c": "TCP",
         "d": "HTTPS"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "The Internet of Things (IoT)",
      "vraag": "What is the Internet of Things (IoT) in the context of IT?",
      "keuzes": {
         "a": "A network of interconnected computers in a large organization",
         "b": "A collection of virtual machines running in the cloud",
         "c": "A virtualized IT infrastructure accessible over the internet",
         "d": "Physical devices connected to the internet, exchanging data and performing tasks"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Client Side",
      "vraag": "What does client side refer to in web development?",
      "keuzes": {
         "a": "Code execution on the web server",
         "b": "Handling of user interface and user interactions",
         "c": "Storing and managing data in a database",
         "d": "Processing of requests from the internet"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Version Control Systems",
      "vraag": "Which version control system is distributed and allows for offline work and local branching?",
      "keuzes": {
         "a": "Git",
         "b": "Subversion (SVN)",
         "c": "Mercurial",
         "d": "Perforce"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "APIs and Web Services",
      "vraag": "What does API stand for?",
      "keuzes": {
         "a": "Advanced Program Interface",
         "b": "Application Programming Interface",
         "c": "Automated Process Integration",
         "d": "Application Process Interface"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Version Control",
      "vraag": "Git is a popular tool used for:",
      "keuzes": {
         "a": "Database management",
         "b": "Frontend development",
         "c": "Version control",
         "d": "Network security"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Coding Principles",
      "vraag": "What does the DRY principle promote in software development?",
      "keuzes": {
         "a": "Using object-oriented programming techniques",
         "b": "Avoiding code duplication and promoting code reusability",
         "c": "Minimizing the use of external libraries",
         "d": "Implementing secure coding practices"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Backend vs. Frontend",
      "vraag": "What are the primary roles of the backend in a web application?",
      "keuzes": {
         "a": "Handling user interface and user interactions",
         "b": "Storing and managing data, business logic, and server communication",
         "c": "Rendering the web pages and managing client-side scripts",
         "d": "Optimizing website performance and design"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Serverside vs. Clientside",
      "vraag": "Where is the code executed in serverside web development?",
      "keuzes": {
         "a": "On the client's computer (browser)",
         "b": "On the web server",
         "c": "On both the client and the server",
         "d": "On a remote cloud server"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Scalability in IT",
      "vraag": "What does scalability refer to in the context of IT?",
      "keuzes": {
         "a": "The ability of a system to handle a large number of concurrent users.",
         "b": "The physical size of a computer or server used in an IT environment.",
         "c": "The speed at which data is transferred over a network.",
         "d": "The total number of lines of code in a software application."
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Router",
      "vraag": "What is the primary function of a router?",
      "keuzes": {
         "a": "To connect peripheral devices to a computer",
         "b": "To store and manage data",
         "c": "To forward network traffic between different networks",
         "d": "To execute computer programs"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Run Time",
      "vraag": "What does run time refer to in computer programs?",
      "keuzes": {
         "a": "The period when a computer is powered on and operational",
         "b": "The time taken to write and compile a program",
         "c": "The duration a program is actively executing during program operation",
         "d": "The time taken for a program to be downloaded from the internet"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Serverside vs. Clientside",
      "vraag": "What type of interactions are typically handled on the clientside in a web application?",
      "keuzes": {
         "a": "User authentication and data storage",
         "b": "Rendering web pages and displaying user interfaces",
         "c": "Server communication and database queries",
         "d": "User clicks, form submissions, and dynamic UI changes"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Design Time",
      "vraag": "What does design time refer to in software development?",
      "keuzes": {
         "a": "The time when the software is designed and planned",
         "b": "The duration a program is actively executing during program operation",
         "c": "The time taken to write and compile a program",
         "d": "The time taken for a program to be downloaded from the internet"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Single Responsibility Principle (SRP)",
      "vraag": "What does the Single Responsibility Principle (SRP) in software development state?",
      "keuzes": {
         "a": "A class should have only one instance (object) at runtime.",
         "b": "A class should have only one public method.",
         "c": "A class should be responsible for only one specific functionality.",
         "d": "A class should have only one private variable."
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Single Responsibility Principle (SRP)",
      "vraag": "What are the benefits of adhering to the Single Responsibility Principle (SRP)?",
      "keuzes": {
         "a": "Improved code readability and shorter class names.",
         "b": "Increased encapsulation and information hiding.",
         "c": "Higher code performance and faster execution.",
         "d": "Easier maintenance, reduced code duplication, and enhanced code reusability."
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Waterfall Model",
      "vraag": "What are the disadvantages of the Waterfall model of software development?",
      "keuzes": {
         "a": "Difficult to manage large and complex projects due to its linear nature.",
         "b": "Requires frequent customer involvement, leading to increased project costs.",
         "c": "It is challenging to gather and finalize all requirements at the beginning of the project.",
         "d": "Provides little scope for feedback and changes after the development process starts."
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Agile Software Development",
      "vraag": "What are the characteristics of Agile software development?",
      "keuzes": {
         "a": "Sequential and linear development approach.",
         "b": "Emphasis on delivering working software early and frequently.",
         "c": "Heavy documentation and rigid planning.",
         "d": "Extensive use of specialized tools and technologies."
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Agile Software Development",
      "vraag": "What are the benefits of Agile software development?",
      "keuzes": {
         "a": "Higher development costs and longer time to market.",
         "b": "Increased risk due to less focus on customer feedback.",
         "c": "Improved collaboration between cross-functional teams.",
         "d": "Less adaptability to changing requirements."
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Agile and Scrum",
      "vraag": "What is the main difference between Agile and Scrum?",
      "keuzes": {
         "a": "Agile is a software development framework, while Scrum is a project management methodology.",
         "b": "Agile emphasizes iterative development, while Scrum focuses on delivering a product increment in short cycles.",
         "c": "Agile involves multiple roles, events, and artifacts, while Scrum is a more flexible and lightweight approach.",
         "d": "Agile is suitable for large, complex projects, while Scrum is ideal for small, simple projects."
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Operating Systems",
      "vraag": "Which of the following are considered some of the main operating systems used in computing?",
      "keuzes": {
         "a": "Windows, macOS, and Ubuntu",
         "b": "Google Chrome, Android, and iOS",
         "c": "Microsoft Office, Adobe Photoshop, and Mozilla Firefox",
         "d": "Java, C++, and Python"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Waterfall Model",
      "vraag": "What is the Waterfall model of software development?",
      "keuzes": {
         "a": "A development approach where all phases of the project are performed sequentially in a linear manner.",
         "b": "A development approach where multiple teams work simultaneously on different modules of the software.",
         "c": "A development approach that focuses on iterative development and continuous customer feedback.",
         "d": "A development approach that prioritizes rapid prototyping and early software delivery."
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Software Development Models",
      "vraag": "Which of the following is an alternative to the Waterfall model of software development?",
      "keuzes": {
         "a": "Agile",
         "b": "Spiral",
         "c": "V-Model",
         "d": "Incremental"
      },
      "antwoord": "a"
   }
];

/**
 * Array meerkeuzevragen Toetscombinaties in Windows
 */
const toetsCombinaties: Vraag[] = [
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om iets te plakken?",
      "keuzes": {
         "a": "Control + o",
         "b": "Control + q",
         "c": "Control + s",
         "d": "Control + v"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om een file op te slaan?",
      "keuzes": {
         "a": "Control + q",
         "b": "Control + x",
         "c": "Control + s",
         "d": "Control + d"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om iets te kopieren",
      "keuzes": {
         "a": "Control + c",
         "b": "Control + k",
         "c": "Control + v",
         "d": "Control + z"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om iets te knippen",
      "keuzes": {
         "a": "Control + f",
         "b": "Control + x",
         "c": "Control + y",
         "d": "Control + z"
      },
      "antwoord": "b"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om iets ongedaan te maken?",
      "keuzes": {
         "a": "Control + h",
         "b": "Control + e",
         "c": "Control + r",
         "d": "Control + z"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om alle tekst in een document te selecteren?",
      "keuzes": {
         "a": "Control + a",
         "b": "Control + z",
         "c": "Control + f",
         "d": "Control + b"
      },
      "antwoord": "a"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om iets opnieuw te doen dat je ongedaan hebt gemaakt?",
      "keuzes": {
         "a": "Control + a",
         "b": "Control + f",
         "c": "Control + y",
         "d": "Control + m"
      },
      "antwoord": "c"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om tekst te zoeken",
      "keuzes": {
         "a": "Control + q",
         "b": "Control + h",
         "c": "Control + y",
         "d": "Control + f"
      },
      "antwoord": "d"
   },
   {
      "onderwerp": "Toetsencombinaties ctrl",
      "vraag": "Welke toetsencombinatie kun je gebruiken om tekst te vervangen",
      "keuzes": {
         "a": "Control + c",
         "b": "Control + h",
         "c": "Control + y",
         "d": "Control + v"
      },
      "antwoord": "b"
   }
];

interactief( toetsCombinaties );

let aantalGoed: number = 0;
let aantalFout: number = 0;

/**
 * Leest een lijst van vragen en verwerkt de antwoorden van de gebruiker.
 * @param vragenLijst - Een array van het type Vraag. Elke vraag heeft een vraagtekst, een set van keuzes en een antwoord.
 * @returns void
 */
async function interactief ( vragenLijst: Vraag[] ): Promise<void> {
   const rl = readline.createInterface( { input, output } );

   for ( let vraag of vragenLijst ) {
      // parameter vraagTekst (we schrijven de stringaarde hier op een andere manier dan je al kent)
      const vraagTekst: string = `
-----------------------------------------------------------------------------
Type z en druk enter om programma te beeindigen. 

      ${vraag.vraag}
      a. ${vraag.keuzes.a}
      b. ${vraag.keuzes.b}
      c. ${vraag.keuzes.c}
      d. ${vraag.keuzes.d}
      Vul hier je antwoord in: `;

      // Om aan variabele antwoord een waarde toe te kennen, moet de method rl.question worden uitgevoerd.
      // Die method neemt de parameter vraagTekst en stuurt die string naar de terminal.
      // Het antwoord dat de gebruiker in de terminal invoert, wordt als stringwaarde teruggegeven en toegewezen aan
      // antwoord.      
      const antwoordUser: string = await rl.question( vraagTekst );
      // Beeindig programma
      if ( antwoordUser === "z" ) {
         afsluiter();
         rl.close();
         return;
      }
      evalueerAntwoord( vraag, antwoordUser );
   }
   afsluiter();
   rl.close();
}

function evalueerAntwoord ( vraag: Vraag, antwoordUser: string ) {
   let s: string;
   if ( vraag.antwoord === antwoordUser ) {
      s = 'Goed';
      ++aantalGoed;
   }
   else {
      s = `Fout. Het goede antwoord is: ${vraag.antwoord}`;
      ++aantalFout;
   }
   console.log();
   console.log( s );
}

// helperfunctie
function afsluiter (): void {
   console.log();
   console.log( 'Totaal aantal vragen:', aantalGoed + aantalFout );
   console.log( 'Goed:', aantalGoed );
   console.log( 'Fout:', aantalFout );
   console.log( 'Je score is: ', ( aantalGoed / ( aantalGoed + aantalFout ) * 100 ).toFixed( 2 ), '%' );
   console.log();
   console.log( 'Klaar' );
   console.log();

   // hoeveel vragen hebben we in totaal?
   console.log( 'aantal vragen Algemene IT: ', algemeneIT.length );
   console.log( 'aantal vragen Toetscombinaties: ', toetsCombinaties.length );
}

