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
      image: "https://i.ibb.co/pBJz0p3z/ambt-2.jpg"
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
          image: "https://i.ibb.co/qMqZSvjV/ambt-3.jpg"
        },
        {
          name: "Restaurant",
          description: "Salón más privado, clásico y elegante, con vista a la piscina del hotel y un aforo de 50 personas.",
          image: "https://i.ibb.co/tp3HmQ2f/ambt-5.jpg"
        }
      ]
    },
    menu: {
      subtitle: "Menú",
      title: "DELICIAS DEL MAR",
      description: "Pesca del día y productos orgánicos seleccionados para una experiencia inigualable.",
      items: [
        {
          title: "Langostinos en Salsa Criolla Caliente",
          ingredients: "Langostinos premium salteados en una vibrante salsa criolla con toques cítricos y especias regionales.",
          category: "DELICIAS DEL MAR",
          price: "$25",
          image: "https://i.ibb.co/C5qR7hdP/LANGOSTINOS-EN-SALSA-CRIOLLA-CALIENTE.webp"
        },
        {
          title: "Torta De Piña, Limón, Naranja o Marmoleada",
          ingredients: "Deliciosa torta casera disponible en varios sabores: piña, limón, naranja o marmoleada.",
          category: "Postres",
          price: "",
          image: "https://i.ibb.co/s932SsfG/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp"
        }
      ]
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
      image: "https://i.ibb.co/pBJz0p3z/ambt-2.jpg"
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
          image: "https://i.ibb.co/qMqZSvjV/ambt-3.jpg"
        },
        {
          name: "Restaurant",
          description: "More private, classic, and elegant room, overlooking the hotel pool and with a capacity for 50 people.",
          image: "https://i.ibb.co/tp3HmQ2f/ambt-5.jpg"
        }
      ]
    },
    menu: {
      subtitle: "Menu",
      title: "OCEAN DELIGHTS",
      description: "Catch of the day and selected organic products for an unparalleled experience.",
      items: [
        {
          title: "Shrimp in Hot Criolla Sauce",
          ingredients: "Premium shrimp sautéed in a vibrant criolla sauce with citrus touches and regional spices.",
          category: "OCEAN DELIGHTS",
          price: "$25",
          image: "https://i.ibb.co/C5qR7hdP/LANGOSTINOS-EN-SALSA-CRIOLLA-CALIENTE.webp"
        },
        {
          title: "Pineapple, Lemon, Orange or Marbled Cake",
          ingredients: "Delicious homemade cake available in various flavors: pineapple, lemon, orange, or marbled.",
          category: "Desserts",
          price: "",
          image: "https://i.ibb.co/s932SsfG/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp"
        }
      ]
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
