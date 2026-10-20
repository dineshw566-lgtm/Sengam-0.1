/**
 * Editable Data Store for Snegam Decorations Catalogue Website.
 * Contains proposed services, catalogue collections, and verified contact points.
 * All entries can be edited or expanded when real assets are confirmed.
 */

export const COMPANY_CONTACT = {
  brandName: 'Snegam Decorations',
  tagline: 'Creating Beautiful Spaces for Unforgettable Celebrations',
  phoneDisplay: '+91 98765 43210',
  phoneCall: '+919876543210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Snegam%20Decorations!%20I%20am%20browsing%20your%20catalogue%20and%20would%20like%20to%20enquire%20about%20event%20styling.',
  email: 'decorations@snegam.com',
  location: 'Tamil Nadu, India',
  workingHours: 'Monday – Sunday: 8:00 AM – 8:30 PM (Consultations by Appointment)',
  catalogueEdition: 'Official Client Catalogue • Volume 2026'
};

export const DECORATION_CATEGORIES = [
  {
    id: 'wedding',
    catNumber: 'CAT. 01',
    title: 'Wedding Decoration',
    tag: 'Muhurtham & Sacred Mandaps',
    description: 'Traditional temple-inspired mandaps, sacred floral thoranams, carved brass accents, and sacred dais architecture for auspicious morning rituals.',
    highlight: 'Sacred Mandap Architecture'
  },
  {
    id: 'reception',
    catNumber: 'CAT. 02',
    title: 'Reception Decoration',
    tag: 'Grand Evening Stages',
    description: 'Contemporary stage backdrops, sculptural floral arches, statement crystal accents, and ambient illumination tailored to large banquet halls.',
    highlight: 'Statement Stage Backdrops'
  },
  {
    id: 'engagement',
    catNumber: 'CAT. 03',
    title: 'Engagement Decoration',
    tag: 'Ring Ceremony & Dais',
    description: 'Intimate stage styling featuring bespoke monograms, delicate pastel draperies, candlelit floral pedestals, and romantic photo focal points.',
    highlight: 'Intimate Floral Settings'
  },
  {
    id: 'birthday',
    catNumber: 'CAT. 04',
    title: 'Birthday Decoration',
    tag: 'Thematic Celebrations',
    description: 'Custom thematic arches, marquee lettering, modern balloon installations, and immersive dessert table backdrops for milestone birthdays.',
    highlight: 'Custom Theme Concepts'
  },
  {
    id: 'baby-shower',
    catNumber: 'CAT. 05',
    title: 'Baby Shower Decoration',
    tag: 'Seemantham & Valakaappu',
    description: 'Auspicious cradle decor, traditional marigold carpets, brass oil lamp accents, and soft pastel floral themes honoring family traditions.',
    highlight: 'Traditional Cradle Artistry'
  },
  {
    id: 'corporate',
    catNumber: 'CAT. 06',
    title: 'Corporate Events',
    tag: 'Galas & Annual Meets',
    description: 'Sophisticated conference staging, company gala backdrops, registration lounges, and formal banquet floral centerpieces.',
    highlight: 'Professional Corporate Styling'
  },
  {
    id: 'other-events',
    catNumber: 'CAT. 07',
    title: 'Other Event Decorations',
    tag: 'Pooja, Grihapravesam & Gatherings',
    description: 'Intimate doorstep thoranams, traditional housewarming dais styling, festive anniversary decor, and custom private celebrations.',
    highlight: 'Home & Cultural Celebrations'
  }
];

export const CATALOGUE_COLLECTIONS = [
  {
    id: 'col-01',
    collectionCode: 'COLLECTION NO. W-01',
    category: 'wedding',
    categoryLabel: 'Wedding Decoration',
    title: 'The Royal Lotus & Jasmine Mandap Concept',
    specs: 'Handwoven natural jasmine canopy, brass uruli pedestals, and temple-pillar geometry.',
    dimensions: 'Stage Footprint: 24ft x 16ft'
  },
  {
    id: 'col-02',
    collectionCode: 'COLLECTION NO. W-02',
    category: 'wedding',
    categoryLabel: 'Wedding Decoration',
    title: 'Auspicious South Indian Muhurtham Dais',
    specs: 'Cascading marigold and tuberose garlands, antique bronze finishes, and silk drapery folds.',
    dimensions: 'Stage Footprint: 20ft x 14ft'
  },
  {
    id: 'col-03',
    collectionCode: 'COLLECTION NO. R-01',
    category: 'reception',
    categoryLabel: 'Reception Decoration',
    title: 'Emerald Botanical Arch & Chandeliers',
    specs: 'Exotic imported foliage, ivory roses, suspended crystal chandeliers, and warm architectural uplighting.',
    dimensions: 'Stage Footprint: 32ft x 18ft'
  },
  {
    id: 'col-04',
    collectionCode: 'COLLECTION NO. R-02',
    category: 'reception',
    categoryLabel: 'Reception Decoration',
    title: 'Contemporary Minimalist Monogram Backdrop',
    specs: 'Curved textured paneling, soft warm backlight, asymmetric floral clusters, and velvet lounge dais.',
    dimensions: 'Stage Footprint: 28ft x 16ft'
  },
  {
    id: 'col-05',
    collectionCode: 'COLLECTION NO. E-01',
    category: 'engagement',
    categoryLabel: 'Engagement Decoration',
    title: 'Pastel Dream Floral Ring Stage',
    specs: 'Blush pink hydrangeas, cream delphiniums, brushed gold pedestals, and personalized lettering.',
    dimensions: 'Stage Footprint: 18ft x 12ft'
  },
  {
    id: 'col-06',
    collectionCode: 'COLLECTION NO. B-01',
    category: 'birthday',
    categoryLabel: 'Birthday Decoration',
    title: 'Milestone Golden Jubilee / Thematic Arch',
    specs: 'Organic matte balloon garland, customized neon lettering, cake pedestal trio, and spotlight accents.',
    dimensions: 'Setup Footprint: 16ft x 10ft'
  },
  {
    id: 'col-07',
    collectionCode: 'COLLECTION NO. S-01',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower Decoration',
    title: 'Traditional Floral Cradle & Brass Lamp Setting',
    specs: 'Handcrafted floral cradle garland, hanging bell motifs, brass deepams, and yellow silk backdrop.',
    dimensions: 'Setup Footprint: 15ft x 12ft'
  },
  {
    id: 'col-08',
    collectionCode: 'COLLECTION NO. H-01',
    category: 'other-events',
    categoryLabel: 'Other Event Decorations',
    title: 'Grihapravesam Entrance & Pooja Mantap Decor',
    specs: 'Intricate mango leaf thoranam, marigold floor rangoli, banana stem entrance pillars, and deity dais styling.',
    dimensions: 'Setup Footprint: Flexible'
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'proj-01',
    plateNumber: 'PLATE 01',
    title: 'Grand Convention Center Muhurtham Mandap',
    category: 'Wedding Decoration',
    venueType: 'Convention Auditorium, Tamil Nadu',
    note: 'Large-scale floral mandap with integrated tiered stage illumination.'
  },
  {
    id: 'proj-02',
    plateNumber: 'PLATE 02',
    title: 'Contemporary Banquet Reception Stage',
    category: 'Reception Decoration',
    venueType: 'Luxury Hotel Ballroom',
    note: 'Sculptural metallic arches paired with white orchid and rose installations.'
  },
  {
    id: 'proj-03',
    plateNumber: 'PLATE 03',
    title: 'Heritage Courtyard Evening Celebration',
    category: 'Traditional & Festive',
    venueType: 'Traditional Heritage Home',
    note: 'Open-air courtyard lighting, brass kuthuvilakku displays, and marigold canopies.'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Thoughtful Decoration Concepts',
    description: 'Every design begins with an understanding of your family traditions, venue proportions, and desired aesthetic mood, ensuring an intentional concept.'
  },
  {
    number: '02',
    title: 'Attention to Detail',
    description: 'From the freshness of individual floral blooms to the symmetry of drapery folds and clean cable management, precision is preserved at every angle.'
  },
  {
    number: '03',
    title: 'Personalized Event Styling',
    description: 'We believe no two celebrations should look identical. Every stage backdrop and floral combination is tailored specifically to your chosen palette.'
  },
  {
    number: '04',
    title: 'Professional Coordination',
    description: 'Structured timelines, careful logistics, and punctual on-site execution ensure your venue is fully ready hours before the first guest arrives.'
  }
];
