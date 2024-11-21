export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        about: 'About',
        hello: 'Hello, I\'m',
        year: `A year ago, I set myself the challenge of becoming a
        <span class="text-[#00DC82]">Front-End Developer</span>. After an
        intensive training program at
        <span class="text-[#00DC82]">DonkeySchool</span> and successfully
        completing an internship for a new dating site,
        <span class="text-[#00DC82]">Aurhéa</span>, I'm continuing my journey
        as a <span class="text-[#00DC82]">Developer</span> 💻.`,
        meetups: `
        You can often find me at various
        <span class="text-[#00DC82]">meetups in Paris</span>, eager to learn
        more and connect with new people 🤝.`,
        contact: `
        Feel free to
        <a
            href="#contact"
            class="text-[#00DC82] cursor-pointer underline underline-offset-2 hover:text-[#00dc8089]"
        >reach out</a>
        if you'd like to chat about
        <span class="text-[#00DC82]">tech</span> or discuss a
        <span class="text-[#00DC82]">project</span> ✨️.
        `,
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
        year: `Il y a un an, je me suis lancé le défi de devenir
        <span class="text-[#00DC82]">Développeur Front-End</span>. Après une
        formation intensive à
        <span class="text-[#00DC82]">DonkeySchool</span> et un stage réussi pour
        un nouveau site de rencontres,
        <span class="text-[#00DC82]">Aurhéa</span>, je poursuis mon parcours en
        tant que <span class="text-[#00DC82]">Développeur</span> 💻.`,
        meetups: `
        Vous pouvez souvent me trouver à divers
        <span class="text-[#00DC82]">meetups à Paris</span>, toujours curieux
        d'apprendre et de rencontrer de nouvelles personnes 🤝.`,
        contact: `
        N'hésitez pas à
        <a
          href="#contact"
          class="text-[#00DC82] cursor-pointer underline underline-offset-2 hover:text-[#00dc8089]"
        >me contacter</a>
        si vous souhaitez discuter
        <span class="text-[#00DC82]">tech</span> ou échanger sur un
        <span class="text-[#00DC82]">projet</span> ✨️.
        `,
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
  