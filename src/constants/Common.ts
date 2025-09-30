import jsIcon from "@/assets/skills/js.svg";
import tsIcon from "@/assets/skills/ts.svg";
import cssIcon from "@/assets/skills/css.svg";
import htmlIcon from "@/assets/skills/html.svg";
import reactIcon from "@/assets/skills/react.svg";
import nextIcon from "@/assets/skills/next.svg";
import sassIcon from "@/assets/skills/sass.svg";
import jestIcon from "@/assets/skills/jest.svg";
import mongoIcon from "@/assets/skills/mongo.svg";
import pgIcon from "@/assets/skills/postgress.svg";
import nodeIcon from "@/assets/skills/node.svg";
import yarnIcon from "@/assets/skills/yarn.svg";
import viteIcon from "@/assets/skills/vite.svg";
import pyIcon from "@/assets/skills/py.svg";
import dockerIcon from "@/assets/skills/docker.svg";
import ksIcon from "@/assets/skills/ks.svg";
import reduxIcon from "@/assets/skills/redux.svg";
import goIcon from "@/assets/skills/go.svg";
import cpp from "@/assets/skills/cpp.svg";
import aws from "@/assets/skills/aws.svg";
import dj from "@/assets/skills/django.svg";
import codekarImg from "@/assets/work-images/codeKar.png";
import samvadImg from "@/assets/work-images/samvad.png";
import fdImg from "@/assets/work-images/fm.png";
import nlpImg from "@/assets/work-images/nlp.png";
import nstImg from "@/assets/work-images/nst.png";
import idfcLogo from "@/assets/exps/idfc.png";
import persiLogo from "@/assets/exps/persi.png";
import iiitdmLogo from "@/assets/exps/iiitdm.png";

export const ABOUT = {
  name: "ASHISH UPADHYAY",
  alias: "<Software Developer>",
  summary:
    "I Full-stack Software Engineer with over 3 years of experience developing scalable, high-performance web applications using React.js, TypeScript, Next.js, NodeJs and Golang. Demonstrated success in delivering digital transformation in banking domains. Strong analytical thinker with 550+ algorithmic problems solved across LeetCode, GFG, and HackerRank. Actively working on system design, developer experience, and cross-functional collaboration.",
};

export const SKILLS_ICONS = {
  js: jsIcon,
  css: cssIcon,
  html: htmlIcon,
  ts: tsIcon,
  react: reactIcon,
  next: nextIcon,
  sass: sassIcon,
  jest: jestIcon,
  pg: pgIcon,
  node: nodeIcon,
  mongo: mongoIcon,
  yarn: yarnIcon,
  vite: viteIcon,
  py: pyIcon,
  go: goIcon,
  docker: dockerIcon,
  kube: ksIcon,
  redux: reduxIcon,
  cpp: cpp,
  aws: aws,
  dj: dj,
};

export const SKILLS_NAMES: { [key: string]: string } = {
  js: "JavaScript",
  css: "CSS",
  html: "HTML",
  ts: "TypeScript",
  react: "ReactJS",
  next: "NextJS",
  sass: "Sass",
  jest: "Jest",
  pg: "Postgress",
  node: "NodeJS",
  mongo: "Mongo",
  yarn: "Yarn",
  vite: "Vite",
  py: "Python",
  go: "Golang",
  docker: "Docker",
  kube: "Kubernetes",
  redux: "Redux",
  cpp: "C++",
  aws: "AWS",
  dj: "Django",
};

export const WORKS = [
  {
    id: "codekar",
    img: codekarImg,
    name: "<CodeKar>",
    open: "https://codekar-one.vercel.app/",
    ui: "https://github.com/ashishup1999/codekar",
    server: "https://github.com/ashishup1999/codekar-server",
    desc: `Developed an authentication-based platform enabling users to create mini projects using HTML, CSS, and
            JavaScript. Also built a code-editor playgrounds supporting 5 languages that are Java, Python, Go, C++, and Js.
            <br/><br/> Introduced a unique whiteboard-like code-editor mode devoid of common editor features such as auto-suggestion,
            auto-completion, and auto-indentation to help users grasp a deeper understanding of language’s features.
            <br/><br/> Facilitated user exploration of other user’s playgrounds with the option to connect and collaborate.
            <br/><br/> Used a Go based server as Go can handle as many as 1000 concurrent requests per second, making the app faster.
            <br/><br/> Tech Stack: NextJs, Golang, MongoDB, Docker`,
  },
  {
    id: "samvad",
    img: samvadImg,
    name: "<Samvad>",
    open: "https://samvad-client-img-latest.onrender.com/",
    ui: "https://github.com/ashishup1999/samvad-client",
    server: "https://github.com/ashishup1999/samvad-server",
    desc: `Led the development of Samvad, a responsive web application tailored for real-time 1-on-1 chatting with friends.
            Implemented cutting-edge web socket technology to enable seamless real-time communication, resulting in a 30%
            increase in chat responsiveness.
            <br/><br/> Engineered an authentication system with a password retrieval mechanism based on OTP, enhancing security and
            reducing login issues by 25%.
            <br/><br/> Tech Stack: ReactJs, NodeJs, Web Socket, MongoDB, Docker, Jest
`,
  },
  {
    id: "fmd",
    img: fdImg,
    name: "<Face Mask Detector>",
    open: "https://github.com/ashishup1999/Face-Mask-Detector-for-COVID-pandemic",
    desc: `I have created a system capable of identifying whether a person is wearing a mask using live camera input. 
            To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.
            <br/><br/> Tech Stack: Python, Pytorch, NumPy, OpenCV`,
  },
  {
    id: "nlp",
    img: nlpImg,
    name: "<Twitter Sentiment Analysis>",
    open: "https://github.com/ashishup1999/NLP-on-twitter-sentiments",
    desc: `I developed an algorithm capable of determining whether a sentence expresses support for or opposition to the concept of global warming. 
            The dataset used for this task was collected from tweets posted by various Twitter users discussing the topic of global warming.
            <br/><br/> Tech Stack: Python, Scikit Learn, NumPy, NLTK`,
  },
  {
    id: "nst",
    img: nstImg,
    name: "<Neural Style Transfer>",
    open: "https://github.com/ashishup1999/Neural-Style-Transfer-pytorch-",
    desc: `I have created a system capable of identifying whether a person is wearing a mask using live camera input. To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.
            <br/><br/> Tech Stack: Python, Pytorch, NumPy, OpenCV`,
  },
];

export const EXPS = [
  {
    id: "idfc2",
    img: idfcLogo,
    name: "<Developer>",
    extra: "IDFC First Bank | May 2023 - present",
    desc: `<ul><li> Developed and maintained five user’s accounts onboarding portals (NRI, Resident, Corporate, Fastag, Staff), Adding 10K+ daily users via Akamai CDN, enhancing availability and response time.</li>
           <li> Led the end-to-end development of a React-based NRI onboarding platform, reducing account creation time by 80% through modern UI and optimized APIs.</li>
           <li> Integrated secure authentication modules (Video KYC, LDAP, FingerprintJS); enabled RM-assisted workflows for enterprise clients.</li>
           <li> Created a FlutterFlow app for seamless Resident-to-NRI migration; orchestrated communication between React and Flutter within a mono-repo structure.</li>
           <li> Secured APIs with robust encryption and mitigation techniques, shielding against DDoS and automation attacks.</li>
           <li> Enhanced code quality by reducing bugs 80% using Jest and ESLint; accelerated performance by 60% with lazy loading, Lighthouse tuning, and Gzip</li></ul>`,
  },
  {
    id: "persi",
    img: persiLogo,
    name: "<SDE Intern>",
    extra: "Persistent Systems | Jan 2022 - May 2022",
    desc: `Boosted performance of a Node.js-based enterprise platform by 15% through improved state handling and compo- nent optimization in Agile delivery cycles.
`,
  },
  {
    id: "iiitdm",
    img: iiitdmLogo,
    name: "<Machine Learning Intern>",
    extra: "IIITDM Jabalpur | June 2021 - Oct 2021",
    desc: "I created a system capable of identifying and rectifying incorrect verb forms within sentences based on grammar rules. Additionally, I authored a research paper on this specific topic.",
  },
];
