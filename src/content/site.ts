// Central practice configuration. Update these values to change site content.
// Anything not yet confirmed by Lea is marked with TODO.

export const site = {
  name: 'Lea Forster',
  title: 'Therapist',
  // TODO: confirm credentials/licensure to display (e.g. "LCSW", "LMHC")
  credentials: '',
  yearsOfExperience: 11,
  tagline: 'Compassionate, evidence-informed therapy for adolescents and adults on the North Shore and across Massachusetts.',
  shortBio:
    'I’m a therapist based in Beverly, Massachusetts, with 11 years of experience supporting adolescents and adults navigating anxiety, depression, and substance use. I work both in-person at my Beverly office and virtually with clients across the state.',

  // Practice details
  location: {
    // TODO: decide whether to publish full street address publicly
    street: '234 Cabot Street',
    city: 'Beverly',
    region: 'MA',
    postalCode: '01915',
    country: 'US',
    showStreetAddress: true, // toggle to false to hide the street address
  },
  sessionLength: '60 minutes',
  modalities: ['Virtual', 'In-person'],
  language: 'English',
  populations: ['Adults', 'Adolescents'],
  // TODO: confirm full specialty list with Lea (Headway card was truncated)
  specialties: [
    { title: 'Anxiety', blurb: 'Therapy for generalized anxiety, panic, social anxiety, and the chronic worry that makes day-to-day life feel heavier than it should.' },
    { title: 'Depression', blurb: 'Support for low mood, loss of motivation, and the persistent fog of depression — for adults and adolescents alike.' },
    { title: 'Substance use & addiction', blurb: 'Non-judgmental, recovery-informed care for substance use, harm reduction, and the relationships that get caught up in it.' },
  ],

  // Areas served (used in footer + structured data) — drives local SEO
  areasServed: [
    'Beverly, MA',
    'Salem, MA',
    'Marblehead, MA',
    'Danvers, MA',
    'Boston, MA',
    'Cambridge, MA',
    'North Andover, MA',
    'Hingham, MA',
    'Arlington, MA',
    'Quincy, MA',
    'Brookline, MA',
    'Lawrence, MA',
    'Lexington, MA',
    'Braintree, MA',
    'Newton, MA',
  ],

  // Booking
  headwayUrl: 'https://care.headway.co/providers/lea-forster',
  // When Lea has her embed snippet from Headway, paste it here and the widget renders inline.
  // Leave empty string to show only the fallback "Book on Headway" CTA.
  headwayEmbedHtml: '',

  // Contact
  // TODO: add professional email when Lea has one she wants public
  email: '',

  // SEO
  siteUrl: 'https://leaforster.com', // update once final domain is chosen
  defaultDescription:
    'Lea Forster is a Beverly, MA therapist with 11 years of experience helping adolescents and adults with anxiety, depression, and substance use. Virtual & in-person sessions across Massachusetts.',
  ogImage: '/og.png',

  // Crisis line shown in footer
  crisisLine: {
    label: '988 Suicide & Crisis Lifeline',
    description:
      'This site is not a crisis service. If you are in crisis or thinking about harming yourself, call or text 988 (US) — you can talk to someone right now.',
  },
} as const;

export type SiteConfig = typeof site;
