export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        developer: 'Front-End Developer',
        about: 'About',
        hello: 'Hello, I\'m',
        challenge: 'A year ago, I took on the challenge of becoming a Front-End Developer. After training at DonkeySchool and completing a successful internship at Aurhéa, I’m continuing my journey. You’ll often find me at Paris meetups, eager to learn and connect!',       
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
            emailSent: 'Email sent successfully!',
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
        developer: 'Développeur Front-End',
        about: 'À propos',
        challenge: 'Il y a un an, j’ai relevé le défi de devenir Développeur Front-End. Après une formation à DonkeySchool et un stage réussi chez Aurhéa, je poursuis mon parcours. Vous me croiserez souvent à des meetups parisiens, prêt à apprendre et à échanger !',
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
            emailSent: 'E-mail envoyé avec succès !',
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
  