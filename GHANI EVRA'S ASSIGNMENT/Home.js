        const { createApp, ref, computed } = Vue;

        createApp({
            setup() {
                const activeSection = ref('about');
                
                const profile = ref({
                    name: "GHANI GHANI EVRA",
                    title: "Software Developer",
                    tagline: "Building digital experiences with Vue.js & modern web technologies",
                    bio: "Passionate web developer with 2+ years of experience in creating responsive and user-friendly websites. Currently focused on Vue.js ecosystem and modern JavaScript frameworks. Always eager to learn new technologies and take on challenging projects.",
                    image: "IMG-20250505-WA0007.jpg",
                    quickInfo: [
                        { label: "Location", value: "Yaounde, CAMEROON", icon: "fas fa-map-marker-alt" },
                        { label: "Education", value: "Year 3 Software Engineer at Siantou University", icon: "fas fa-graduation-cap" },
                        { label: "Availability", value: "Open to opportunities and take challenges", icon: "fas fa-briefcase" }
                    ]
                });

                const sections = ref([
                    { id: 'about', name: 'About', icon: 'fas fa-user' },
                    { id: 'skills', name: 'Skills', icon: 'fas fa-code' },
                    { id: 'projects', name: 'Projects', icon: 'fas fa-project-diagram' },
                    { id: 'contact', name: 'Contact', icon: 'fas fa-envelope' }
                ]);

                const skills = ref([
                    {
                        name: "Frontend",
                        items: [
                            { name: "Vue.js", },
                            { name: "JavaScript", },
                            { name: "HTML/CSS"},
                        ]
                    },
                    {
                        name: "Backend",
                        items: [
                            { name: "Php", },
                            { name: "Sql", },
                        ]
                    },
                    {
                        name: "Tools",
                        items: [
                            { name: "Git/GitHub", },
                            { name: "VS Code", },
                            { name: "Figma", },
                            { name: "Canva", },
                            { name: "Intellij Idea"}
                        ]
                    }
                ]);

                const projects = ref([
                    {
                        id: 1,
                        title: "An Online Reservation System",
                        description: "Design and implementation of an Online Reservation sytemfor a digital Company",
                        technologies: ["Html", "Css", "Php", "Javascript", "Sql"],
                        icon: "fas fa-shopping-cart",
                    },
                    {
                        id: 2,
                        title: "Weather App",
                        description: "Real-time weather application with location-based forecasts and interactive maps.",
                        technologies: ["JavaScript", "OpenWeather API", "CSS Grid"],
                        icon: "fas fa-cloud-sun",
                        link: "#"
                    },

                ]);

                const contacts = ref([
                    { type: "Email", value: "evraghanighani@gmail.com", icon: "fas fa-envelope" },
                    { type: "Phone", value: "+237 689-56-29-44", icon: "fas fa-phone" },
                    { type: "GitHub", value: "https://github.com/GhaniEvra", icon: "fab fa-github" },
                    { type: "LinkedIn", value: "https://www.linkedin.com/in/ghani-evra", icon: "fab fa-linkedin" }
                ]);

                const currentYear = computed(() => new Date().getFullYear());

                const setActiveSection = (sectionId) => {
                    activeSection.value = sectionId;

                    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                };

                return {
                    activeSection,
                    profile,
                    sections,
                    skills,
                    projects,
                    contacts,
                    currentYear,
                    setActiveSection
                };
            }
        }).mount('#app');