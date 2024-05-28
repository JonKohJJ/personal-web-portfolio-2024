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
        subTitle:           'Finance Budgeting and Tracking Web Application',
        description:        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem quibusdam blanditiis nesciunt cum, sit itaque eos atque repellat totam modi facilis beatae, provident explicabo quaerat deleniti quia nemo ut?',
        href:               '/projects/Tithely',
        href_livesite:      'https://jonkohjj.github.io/tithely-supabase/',
        href_github:        'https://github.com/JonKohJJ/tithely-supabase',
        technologies:       ['nextjs', 'firebase', 'tailwindcss'],
        improvements:       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem quibusdam blanditiis nesciunt cum, sit itaque eos atque repellat totam modi facilis beatae, provident explicabo quaerat deleniti quia nemo ut?',
    },
    'Dojo': {
        title:              'Dojo',
        subTitle:           'Project Management Web Application',
        description:        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem quibusdam blanditiis nesciunt cum, sit itaque eos atque repellat totam modi facilis beatae, provident explicabo quaerat deleniti quia nemo ut?',
        href:               '/projects/Dojo',
        href_livesite:      'https://thedojosite-33599.firebaseapp.com',
        href_github:        'https://github.com/JonKohJJ/the-dojo',
        technologies:       ['reactjs', 'firebase'],
        improvements:       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem quibusdam blanditiis nesciunt cum, sit itaque eos atque repellat totam modi facilis beatae, provident explicabo quaerat deleniti quia nemo ut?',
    },
}

type projectChildrenDetails_Type = {
    [key: string] : {
        title:              string;
        subTitle:           string;
        description:        string;
        href:               string;
        href_livesite:      string;
        href_github:        string;
        technologies:       string[];
        improvements:       string;
        children?:          string[];
    }
}


export const technologiesDetails: technologiesDetails_Type = {
    'nextjs': {
        icon: 'nextjs icon',
        description: 'nextjs description'
    },
    'reactjs': {
        icon: 'reactjs icon',
        description: 'reactjs description'
    },
    'tailwind': {
        icon: 'tailwind icon',
        description: 'tailwind description'
    },
    'firebase': {
        icon: 'firebase icon',
        description: 'firebase description'
    },
}

type technologiesDetails_Type = {
    [key: string] : {
        icon:           string; 
        description:    string;
    }
}