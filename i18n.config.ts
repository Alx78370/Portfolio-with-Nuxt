export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        about: 'About',
        hello: 'Hello, I\'m',
        year: {
          prefix: 'A year ago, I set myself the challenge of becoming a',
          highlight: 'Front-End Developer',
          training: 'After an intensive training program at',
          internship: 'DonkeySchool',
          suffix: 'and successfully completing an internship for a new dating site, Aurhéa, I\'m continuing my journey as a Developer 💻.',
        },        
        meetups: {
          prefix: 'You can often find me at various',
          highlight: 'meetups in Paris',
          suffix: 'eager to learn more and connect with new people 🤝.',
        },        
        contactPrefix: 'Feel free to',
        contactLink: 'reach out',
        contactSuffix: `if you'd like to chat about tech or discuss a project ✨️.`,
        favtech: 'My favorite technologies include:',
        works: {
            aurhea: {
              description:
                "Dating site developed using Angular and Symfony. Still under development.",
            },
            techandco: {
              description:
                "Tech blog (contains fake posts for now) developed using Vite and VueJS.",
            },
            dbdecoration: {
              description:
                "Showcase website for a craftsman/painter developed with WordPress.",
            },
        },
        questions: 'Got questions? Feel free to reach out using this form or connect with me on my social media 💬.',
        form: {
            emailLabel: 'Email',
            subjectLabel: 'Subject',
            subjectPlaceholder: 'Subject',
            messageLabel: 'Message',
            messagePlaceholder: 'Message',
            sendButton: 'Send message',
            validation: {
              required: 'This field is required',
              email: 'Enter a valid email address',
            },
        },
        dev: 'Developped with Nuxt 3',
        ariaLabel: {
            toggleLang: 'Toggle language',
        }
        
      },
      fr: {
        about: 'À propos',
        hello: 'Bonjour, je m\'appelle',
        year: {
          prefix: 'Il y a un an, je me suis lancé le défi de devenir',
          highlight: 'Développeur Front-End',
          training: 'Après une formation intensive à',
          internship: 'DonkeySchool',
          suffix: 'et un stage réussi pour un nouveau site de rencontres, Aurhéa, je poursuis mon parcours en tant que Développeur 💻.',
        },        
        meetups: {
          prefix: 'Vous pouvez souvent me trouver à divers',
          highlight: 'meetups à Paris',
          suffix: 'toujours curieux d\'apprendre et de rencontrer de nouvelles personnes 🤝.',
        },
        contactPrefix: 'N\'hésitez pas à',
        contactLink: 'me contacter',
        contactSuffix: `si vous souhaitez discuter de tech ou échanger sur un projet ✨️.`,
        favtech: 'Mes technologies préférées incluent :',
        works: {
            aurhea: {
                description:
                "Site de rencontres développé avec Angular et Symfony. Toujours en cours de développement.",
            },
            techandco: {
                description:
                "Blog tech (contient pour l'instant des articles fictifs) développé avec Vite et VueJS.",
            },
            dbdecoration: {
                description:
                "Site vitrine pour un artisan/peintre développé avec WordPress.",
            },
        },
        questions: 'Des questions ? N\'hésitez pas à me contacter via ce formulaire ou à me rejoindre sur mes réseaux sociaux 💬.',
        form: {
            emailLabel: 'E-mail',
            subjectLabel: 'Objet',
            subjectPlaceholder: 'Objet',
            messageLabel: 'Message',
            messagePlaceholder: 'Votre message',
            sendButton: 'Envoyer le message',
            validation: {
              required: 'Ce champ est obligatoire',
              email: 'Entrez une adresse e-mail valide',
            },
        },
        dev: 'Développé avec Nuxt 3',
        ariaLabel: {
            toggleLang: 'Changer de langue',
        }
      }
    }
  }))
  