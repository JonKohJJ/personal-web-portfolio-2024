
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";


export const navigationLinks = [
    {
        title:              'About',
        href:               '',
    },
    {
        title:              'Work',
        href:               '',
    },
    {
        title:              'Process',
        href:               '',
    },
    {
        title:              'Drop me a line',
        href:               '',
    },
]

export const footerLinks = [
    {
        title:              'Linkedin',
        href:               'https://www.linkedin.com/in/jonathankohjj',
        hasDestination:     true,
    },
    {
        title:              'Github',
        href:               'https://github.com/JonKohJJ',
        hasDestination:     true,
    },    
]

export const projectChildren = [
    'Tithely',
    'Dojo',
]

export const projectChildrenDetails: projectChildrenDetails_Type = {
    'Tithely': {
        title:              'Tithely', 
        subTitle_short:     'Finance Budgeting and Tracking Web Application',
        year:               2023,
        subTitle_long:      'Tithely is a finance budgeting and tracking app, built with React JS for a modern and responsive user interface. Using TypeScript ensures type safety and scalability, while Vite handles fast development and optimized builds. On the backend, Supabase handles authentication, powers real-time data management and ensure seamless performance and reliability.',
        description:        [
                                [
                                    'On the Planner page, users can:',
                                    '1. Create Income, Savings or Expenses categories',
                                    '2. Update or Delete various categories',
                                    '3. Budget an amount for each category',
                                    '4. Define Fixed and Variable expenses', 
                                    '5. Track all income with the zero-based indicator (Insight Card #1)',
                                    '6. Monitor fixed and variable expenses by amount and percentage (Insight Card #2)',
                                    '7. View total budgeted savings and savings rate',
                                    '8. View total budgeted expenses and expense rate',
                                ],
                                [
                                    'On the Tracker page, users can:',
                                    '1. Create, Update or Delete a transaction record',
                                    '2. Quick add Credit or Debit transaction',
                                    '3. Mark if a transaction is claimable or by default, not claimable',
                                    '4. Track days since and date of last tracked transaction (Insight Card #2)',
                                    '5. Track total claimables amount (Insight Card #3)',
                                    '6. Filter all transactions by Year and Month',
                                    '7. Filter all transactions by Income, Savings, Expenses',
                                    '8. Filter all transactions by Credit or Debit',
                                ],[
                                    'On the Dashboard page, users can:',
                                    '1. Track debit account balance and the amount required to pay credit card bills (Insight Card #1)',
                                    '2. Track credit card charges (Insight Card #2)',
                                    '3. View income and savings progress',
                                    '4. View all expense categories, along with their budgeted and actual amounts, percentage completed, and remaining or exceeded amounts.',
                                    '5. Show Actual Expenses (this will exclude claims and fixed expenses)',
                                ]
                            ],
        href:               '/projects/Tithely',
        href_livesite:      'https://jonkohjj.github.io/tithely-supabase/',
        href_github:        'https://github.com/JonKohJJ/tithely-supabase',
        technologies:       ['reactjs', 'tailwind', 'typescript', 'vite', 'supabase']
    },
    'Dojo': {
        title:              'My Dojo',
        subTitle_short:     'Project Management Web Application',
        year:               2021,
        subTitle_long:      'My Dojo is a dynamic project management web application built with React JS as the frontend framework and Firebase as the Backend-as-a-Service. Firebase streamlines user authentication, real-time database management, and hosting.',
        description:        [
                                [
                                    'Users are able to:',
                                    '1. Sign up as a new project member',
                                    '2. Create & manage projects',
                                    '3. Assign projects to other team members',
                                    '4. Add comments on projects',
                                    '5. View which users are currently online',
                                ]
                            ],
        href:               '/projects/Dojo',
        href_livesite:      'https://thedojosite-33599.firebaseapp.com',
        href_github:        'https://github.com/JonKohJJ/the-dojo',
        technologies:       ['reactjs', 'css', 'firebase'],
        concepts:           [
                                '1. Firebase Set Up',
                                '2. Custom React Hooks - Login, Signup, etc',
                                '3. useContext for User Authentication',
                                '4. React Router & Pages',
                                '5. Conditional Rendering',
                                '6. Form Handling & Signing user up',
                                '7. Redirects & Route Gaurds',
                                '8. Fetching all users & show online users',
                                '9. Fetching all projects',
                                '10. Fetching individual project details based on their unique id',
                                '11. Making Project Filters',
                                '12. Firestore Rules',
                            ],
    },
}

type projectChildrenDetails_Type = {
    [key: string] : {
        title:              string;
        subTitle_short:     string;
        year:               number;       
        subTitle_long:      string;
        description:        string[][];
        href:               string;
        href_livesite:      string;
        href_github:        string;
        technologies:       string[];
        improvements?:       string;
        children?:          string[];
        concepts?:          string[];
    }
}


export const technologiesDetails: technologiesDetails_Type = {
    'nextjs': {
        icon: <RiNextjsFill />,
        description: 'NextJS'
    },
    'reactjs': {
        icon: <FaReact />,
        description: 'ReactJS'
    },
    'vite': {
        icon: <SiVite />,
        description: 'Vite'
    },
    'typescript': {
        icon: <SiTypescript />,
        description: 'Typescript'
    },
    'tailwind': {
        icon: <RiTailwindCssFill />,
        description: 'Tailwind'
    },
    'firebase': {
        icon: <IoLogoFirebase />,
        description: 'Firebase'
    },
    'supabase': {
        icon: <RiSupabaseFill />,
        description: 'Supabase'
    },
    'css': {
        icon: <FaCss3Alt />,
        description: 'CSS'
    }
}

type technologiesDetails_Type = {
    [key: string] : {
        icon:           React.JSX.Element; 
        description:    string;
    }
}