export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      essence: "La Esencia",
      environments: "Ambientes",
      menu: "Menú",
      reservations: "Reservas"
    },
    hero: {
      subtitle: "Restaurant Boutique",
      title: "Cocina de autor",
      titleAccent: "con excelencia",
      ctaReserve: "Reservar Mesa",
      ctaMenu: "Explorar Menú",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2048&auto=format&fit=crop"
    },
    essence: {
      subtitle: "La Esencia",
      title: "El Chef Ramos fusiona la frescura del océano con la sofisticación de la alta cocina.",
      description: "La brisa marina se encuentra con la excelencia culinaria.",
      image: "https://i.ibb.co/8DRc1r7w/ambt-2.webp"
    },
    environments: {
      subtitle: "Galería",
      title: "Nuestros Espacios",
      items: [
        {
          name: "La Terraza Infinita",
          description: "Almuerzos al aire libre, rodeados por un mágico ambiente caribeño.",
          image: "https://i.ibb.co/YTTJdHSy/terraza.webp"
        },
        {
          name: "Salón Vip",
          description: "Espacio cerrado, equipado con baño y barra interna. Ideal para reuniones de trabajo.",
          image: "https://i.ibb.co/zV2s7yc9/ambt-3.webp"
        },
        {
          name: "Restaurant",
          description: "Salón más privado, clásico y elegante, con vista a la piscina del hotel y un aforo de 50 personas.",
          image: "https://i.ibb.co/Q7gh7p8k/ambt-1.webp"
        }
      ]
    },
    menu: {
      subtitle: "Menú",
      title: "Gastro-Boutique",
      description: "Una experiencia sensorial dividida en tres pilares de excelencia.",
      categories: {
        restaurant: {
          title: "Restaurante",
          subtitle: "Cocina de Autor - Chef Francisco Ramos",
          description: "La cumbre de la gastronomía costera.",
          price: "$44.10",
          image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp",
          sections: [
            {
              name: "Entradas",
              items: [
                { name: "Tiradito de Pulpo", price: "$22.64", image: "https://images.unsplash.com/photo-1534604973900-c41ab4c3c3c0?q=80&w=200&auto=format&fit=crop" },
                { name: "Carpaccio de Mero", price: "$18.50", image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Mar",
              items: [
                { name: "Pulpo al Grill", price: "$44.10", image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp" },
                { name: "Langosta del Canal", price: "$55.00", image: "https://images.unsplash.com/photo-1559740038-191f4505f737?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Aves y Carnes",
              items: [
                { name: "Lomito Pimienta", price: "$34.80", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop" },
                { name: "Pollo Orgánico al Romero", price: "$28.00", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Pastas",
              items: [
                { name: "Fettuccine Mare Mondo", price: "$32.00", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        },
        cafe: {
          title: "Cafetería",
          subtitle: "Pastelería Fina & Café de Especialidad",
          description: "Dulces momentos y granos seleccionados.",
          price: "$8.00",
          image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp",
          sections: [
            {
              name: "Pastelería",
              items: [
                { name: "Torta Tronchatoro", price: "$8.00", image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp" },
                { name: "Cheesecake Clásico", price: "$8.00", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=200&auto=format&fit=crop" },
                { name: "Cheesecake de Arándanos", price: "$8.50", image: "https://images.unsplash.com/photo-1505913413112-793b680cb86d?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Café de Especialidad",
              items: [
                { name: "Espressos & Lattes", price: "Desde $3.50", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        },
        gelato: {
          title: "Gelatos",
          subtitle: "Gelatería Artesanal (Tradicional y Bienestar)",
          description: "Fresco, artesanal y equilibrado.",
          price: "Desde $8.00",
          image: "https://i.ibb.co/0R05bchL/helados-implementos.webp",
          sections: [
            {
              name: "Línea Premium",
              items: [
                { name: "Gelato de Pistacho", price: "$8.00", image: "https://i.ibb.co/0R05bchL/helados-implementos.webp" },
                { name: "Chocolate Belga", price: "$8.00", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Sin Azúcar & Veganos",
              items: [
                { name: "Gianduia (Vegano)", price: "$9.00", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&auto=format&fit=crop" },
                { name: "Arándanos (Sin Azúcar)", price: "$9.00", image: "https://images.unsplash.com/photo-1505913413112-793b680cb86d?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        }
      },
      items: [] // Keeping for backward compatibility if needed, but categories is the new primary
    },
    footer: {
      description: "Una oda al mar y a la alta gastronomía. Experimente el lujo costero en su máxima expresión.",
      location: "Ubicación",
      address: "Paseo Marítimo, 77",
      hours: "Horarios",
      days: "Lun - Dom: 12:00 - 00:00",
      valetTitle: "Valet Parking",
      valetFriSat: "Vie - Sáb: 16:00 - 01:30",
      valetSun: "Dom: 12:00 - 18:00",
      closed: "Abierto todos los días frente al canal",
      rights: "© 2026 Seven Boutique. Elegancia costera.",
      privacy: "Privacidad",
      terms: "Términos",
      whatsappMessage: "Hola, me gustaría realizar una reserva en Seven Boutique."
    }
  },
  en: {
    nav: {
      essence: "The Essence",
      environments: "Environments",
      menu: "Menu",
      reservations: "Reservations"
    },
    hero: {
      subtitle: "Restaurant Boutique",
      title: "Signature Cuisine",
      titleAccent: "with excellence",
      ctaReserve: "Book a Table",
      ctaMenu: "Explore Menu",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2048&auto=format&fit=crop"
    },
    essence: {
      subtitle: "The Essence",
      title: "Chef Ramos fuses ocean freshness with the sophistication of haute cuisine.",
      description: "The sea breeze meets culinary excellence.",
      image: "https://i.ibb.co/8DRc1r7w/ambt-2.webp"
    },
    environments: {
      subtitle: "Gallery",
      title: "Our Spaces",
      items: [
        {
          name: "The Infinite Terrace",
          description: "Outdoor lunches, surrounded by a magical Caribbean atmosphere.",
          image: "https://i.ibb.co/YTTJdHSy/terraza.webp"
        },
        {
          name: "VIP Lounge",
          description: "Enclosed space, equipped with a private bathroom and internal bar. Ideal for business meetings.",
          image: "https://i.ibb.co/zV2s7yc9/ambt-3.webp"
        },
        {
          name: "Restaurant",
          description: "More private, classic, and elegant room, overlooking the hotel pool and with a capacity for 50 people.",
          image: "https://i.ibb.co/Q7gh7p8k/ambt-1.webp"
        }
      ]
    },
    menu: {
      subtitle: "Menu",
      title: "Gastro-Boutique",
      description: "A sensory experience divided into three pillars of excellence.",
      categories: {
        restaurant: {
          title: "Restaurant",
          subtitle: "Signature Cuisine - Chef Francisco Ramos",
          description: "The pinnacle of coastal gastronomy.",
          price: "$44.10",
          image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp",
          sections: [
            {
              name: "Starters",
              items: [
                { name: "Octopus Tiradito", price: "$22.64", image: "https://images.unsplash.com/photo-1534604973900-c41ab4c3c3c0?q=80&w=200&auto=format&fit=crop" },
                { name: "Grouper Carpaccio", price: "$18.50", image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Sea",
              items: [
                { name: "Grilled Octopus", price: "$44.10", image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp" },
                { name: "Channel Lobster", price: "$55.00", image: "https://images.unsplash.com/photo-1559740038-191f4505f737?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Poultry & Meat",
              items: [
                { name: "Pepper Tenderloin", price: "$34.80", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop" },
                { name: "Organic Rosemary Chicken", price: "$28.00", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Pastas",
              items: [
                { name: "Fettuccine Mare Mondo", price: "$32.00", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        },
        cafe: {
          title: "Cafe",
          subtitle: "Fine Pastry & Specialty Coffee",
          description: "Sweet moments and selected grains.",
          price: "$8.00",
          image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp",
          sections: [
            {
              name: "Pastry",
              items: [
                { name: "Tronchatoro Cake", price: "$8.00", image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp" },
                { name: "Classic Cheesecake", price: "$8.00", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=200&auto=format&fit=crop" },
                { name: "Blueberry Cheesecake", price: "$8.50", image: "https://images.unsplash.com/photo-1505913413112-793b680cb86d?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Specialty Coffee",
              items: [
                { name: "Espressos & Lattes", price: "From $3.50", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        },
        gelato: {
          title: "Gelatos",
          subtitle: "Artisan Gelateria (Traditional and Wellness)",
          description: "Fresh, handmade, and balanced.",
          price: "From $8.00",
          image: "https://i.ibb.co/0R05bchL/helados-implementos.webp",
          sections: [
            {
              name: "Premium Line",
              items: [
                { name: "Pistachio Gelato", price: "$8.00", image: "https://i.ibb.co/0R05bchL/helados-implementos.webp" },
                { name: "Belgian Chocolate", price: "$8.00", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&auto=format&fit=crop" }
              ]
            },
            {
              name: "Sugar-Free & Vegan",
              items: [
                { name: "Gianduia (Vegan)", price: "$9.00", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&auto=format&fit=crop" },
                { name: "Blueberry (Sugar-Free)", price: "$9.00", image: "https://images.unsplash.com/photo-1505913413112-793b680cb86d?q=80&w=200&auto=format&fit=crop" }
              ]
            }
          ]
        }
      },
      items: []
    },
    footer: {
      description: "An ode to the sea and haute cuisine. Experience coastal luxury at its finest.",
      location: "Location",
      address: "Promenade, 77",
      hours: "Opening Hours",
      days: "Mon - Sun: 12:00 - 00:00",
      valetTitle: "Valet Parking",
      valetFriSat: "Fri - Sat: 4:00 PM - 1:30 AM",
      valetSun: "Sun: 12:00 PM - 6:00 PM",
      closed: "Open every day by the canal",
      rights: "© 2026 Seven Boutique. Coastal elegance.",
      privacy: "Privacy",
      terms: "Terms",
      whatsappMessage: "Hello, I would like to make a reservation at Seven Boutique."
    }
  }
};
