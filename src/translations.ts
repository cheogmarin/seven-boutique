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
              name: "Entradas y Ensaladas",
              items: [
                { name: "Tiradito de Pulpo", price: "$22.64", description: "Láminas de pulpo sobre espejo de crema de berenjenas, bañado en chimichurri, tomates cherry, germinado de rabanito y chips de platanitos.", image: "https://i.ibb.co/Z6r9XhxW/TIRADITO-DE-PULPO.webp" },
                { name: "Ensalada Bahiana", price: "$31.32", description: "Mézclum de lechuga baby mix con reducción balsámica y sésamo, coronada con frutos del mar crispy, salsas fuji y anguila, aguacate, pepino y tomate.", image: "https://i.ibb.co/jpRPJM4/Ensalada-Bahiana.webp" }
              ]
            },
            {
              name: "Del Mar (Pescados y Mariscos)",
              items: [
                { name: "Pulpo al Grill", price: "$44.10", description: "Sellado con paprika, pesto de curry verde, salsa anguila y crotones de tocineta.", image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp" },
                { name: "Salmón en Crema de Limón", price: "$40.60", description: "Acompañado de vegetales salteados.", image: "https://i.ibb.co/Z6N7mVgM/Salmon-en-Crema-de-Limon.webp" }
              ]
            },
            {
              name: "De la Tierra (Aves y Carnes)",
              items: [
                { name: "Lomito Pimienta", price: "$34.80", description: "Centro de lomito en tres pimientas con puré rústico de papas a la albahaca, crema al vino y praliné de pistacho.", image: "https://i.ibb.co/V0cvxs3b/LOMITO-PIMIENTA.webp" },
                { name: "Filet Mignon de Pollo", price: "$31.16", description: "Envuelto en tocineta con salsa roquefort y romero.", image: "https://i.ibb.co/DP7Np3v0/FILET-MIGNON-DE-POLLO.webp" }
              ]
            },
            {
              name: "Arroces y Pastas",
              items: [
                { name: "RISOTTO SEVEN", price: "$19.00", description: "Risotto a la crema con tres quesos, coronado con escalopines de lomito con tomates secos, rúcula, pesto clásico, lajas de queso Parmigiano-Reggiano, almendras y reducción balsámica.", image: "https://i.ibb.co/vvPjpHgp/RISOTTO-SEVEN.webp" },
                { name: "Linguini Frutti di Mare", price: "$30.16", description: "En salsa roja de mariscos aromatizado con sambuca.", image: "https://i.ibb.co/v4xH08Gc/LINGUINI-A-LA-MARINERA.webp" }
              ]
            },
            {
              name: "Boutique Snacks",
              items: [
                { name: "Hamburguesa Seven", price: "$18.56", description: "Carne preparada, mozzarella, parmesano y cebolla caramelizada.", image: "https://i.ibb.co/pjs6jQ0r/burger-seven.webp" },
                { name: "Panini Seven", price: "$19.72", description: "Con chorizo español, salchichón, pepperoni y jamón serrano.", image: "https://i.ibb.co/h1fT0drB/PANINI-SEVEN.webp" }
              ]
            }
          ]
        },
        cafe: {
          title: "Cafetería",
          subtitle: "Dulce Distinción",
          description: "Dulces momentos y granos seleccionados.",
          price: "$8.00",
          image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp",
          sections: [
            {
              name: "Pastelería",
              items: [
                { name: "Torta Tronchatoro", price: "$8.00", description: "Nuestra famosa torta de chocolate húmeda con capas de fudge artesanal.", image: "https://i.ibb.co/FkzfcrFy/Tronchatoro-1.webp" },
                { name: "Cheesecake Neoyorquino", price: "$8.00", description: "Clásico estilo New York, denso y cremoso con un toque de vainilla.", image: "https://i.ibb.co/Xk2GT0kg/Cheesecake-Neoyorquino.webp" }
              ]
            },
            {
              name: "Barra de Cafés",
              items: [
                { name: "Capuccino", price: "$4.50", description: "Equilibrio perfecto entre espresso, leche vaporizada y espuma.", image: "https://i.ibb.co/hJJWk96P/capuchino.webp" },
                { name: "Latte Vainilla", price: "$5.00", description: "Espresso suave con leche cremosa y un toque de vainilla francesa.", image: "https://i.ibb.co/pvBR8xPn/latte-v.webp" },
                { name: "Mocaccino", price: "$5.50", description: "Fusión de chocolate premium, espresso y leche vaporizada.", image: "https://i.ibb.co/dwNpcrH6/mocaccino.webp" },
                { name: "Americano", price: "$3.50", description: "Espresso diluido en agua caliente para un sabor prolongado y limpio.", image: "https://i.ibb.co/5xWYtzRs/americano.webp" }
              ]
            }
          ]
        },
        gelato: {
          title: "Gelatos",
          subtitle: "Gelatería Boutique",
          description: "Fresco, artesanal y equilibrado.",
          price: "Desde $8.00",
          image: "https://i.ibb.co/0R05bchL/helados-implementos.webp",
          sections: [
            {
              name: "Gelatos Tradicionales",
              items: [
                { name: "Pistacho", price: "$8.00", description: "Elaborado con pistachos seleccionados para un sabor auténtico.", image: "https://i.ibb.co/PvDCZLcQ/pistacho.png" },
                { name: "Ferrero Rocher", price: "$8.00", description: "Producto premium que combina un cremoso helado de avellana con veteado de avellana y cacao, cubierto por una capa crujiente de chocolate con leche.", image: "https://i.ibb.co/23nPxyjX/producto.png" },
                { name: "Vainilla Borbone", price: "$8.00", description: "Vainilla premium con notas florales y cremosidad extrema.", image: "https://i.ibb.co/Q7BVSJwn/vainilla.png" }
              ]
            },
            {
              name: "Línea Bienestar (Sin Azúcar y Veganos)",
              items: [
                { name: "Gianduia (Vegano)", price: "$9.00", description: "Clásico italiano, crema helada artesanal, libre de lácteos y derivados animales, combina intensamente chocolate y pasta de avellanas.", image: "https://i.ibb.co/HfBPDDHH/Gianduia-Vegano.webp" },
                { name: "Cheesecake de Arándanos (Sin Azúcar)", price: "$9.00", description: "Todo el sabor del cheesecake con arándanos frescos, sin azúcar añadida.", image: "https://i.ibb.co/Nnnrk82C/arandano.png" }
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
      address: "Lechería 6016, Anzoátegui. Dentro del hotel Maremares, Paseo Marítimo, 77",
      phone: "0412-8388203",
      hours: "Horarios",
      days: "Lun - Dom: 12:00 PM - 12:00 AM",
      valetTitle: "Valet Parking",
      valetFriSat: "Vie - Sáb: 4:00 PM - 1:30 AM",
      valetSun: "Dom: 12:00 PM - 6:00 PM",
      closed: "Abierto todos los días frente al canal",
      rights: "© 2026 Esencia Boutique. Elegancia costera.",
      privacy: "Privacidad",
      terms: "Términos",
      whatsappMessage: "Hola, me gustaría realizar una reserva en Esencia Boutique."
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
              name: "Starters and Salads",
              items: [
                { name: "Octopus Tiradito", price: "$22.64", description: "Thinly sliced octopus on eggplant cream mirror, drizzled with chimichurri, cherry tomatoes, radish sprouts, and plantain chips.", image: "https://i.ibb.co/Z6r9XhxW/TIRADITO-DE-PULPO.webp" },
                { name: "Bahian Salad", price: "$31.32", description: "Baby lettuce mix with balsamic reduction and sesame, topped with crispy seafood, fuji and eel sauces, avocado, cucumber, and tomato.", image: "https://i.ibb.co/jpRPJM4/Ensalada-Bahiana.webp" }
              ]
            },
            {
              name: "From the Sea (Fish and Seafood)",
              items: [
                { name: "Grilled Octopus", price: "$44.10", description: "Seared with paprika, green curry pesto, eel sauce, and bacon croutons.", image: "https://i.ibb.co/PvZFwT96/PULPO-AL-GRILL.webp" },
                { name: "Salmon in Lemon Cream", price: "$40.60", description: "Accompanied by sautéed vegetables.", image: "https://i.ibb.co/Z6N7mVgM/Salmon-en-Crema-de-Limon.webp" }
              ]
            },
            {
              name: "From the Land (Poultry and Meat)",
              items: [
                { name: "Pepper Tenderloin", price: "$34.80", description: "Center of tenderloin in three peppers with rustic basil mashed potatoes, wine cream, and pistachio praline.", image: "https://i.ibb.co/V0cvxs3b/LOMITO-PIMIENTA.webp" },
                { name: "Chicken Filet Mignon", price: "$31.16", description: "Wrapped in bacon with roquefort and rosemary sauce.", image: "https://i.ibb.co/DP7Np3v0/FILET-MIGNON-DE-POLLO.webp" }
              ]
            },
            {
              name: "Rice and Pasta",
              items: [
                { name: "SEVEN RISOTTO", price: "$19.00", description: "Creamy risotto with three cheeses, topped with tenderloin escalopes with sun-dried tomatoes, arugula, classic pesto, Parmigiano-Reggiano cheese curls, almonds, and balsamic reduction.", image: "https://i.ibb.co/vvPjpHgp/RISOTTO-SEVEN.webp" },
                { name: "Linguine Frutti di Mare", price: "$30.16", description: "In red seafood sauce flavored with sambuca.", image: "https://i.ibb.co/v4xH08Gc/LINGUINI-A-LA-MARINERA.webp" }
              ]
            },
            {
              name: "Boutique Snacks",
              items: [
                { name: "Seven Burger", price: "$18.56", description: "Prepared meat, mozzarella, parmesan, and caramelized onion.", image: "https://i.ibb.co/pjs6jQ0r/burger-seven.webp" },
                { name: "Seven Panini", price: "$19.72", description: "With Spanish chorizo, salami, pepperoni, and Serrano ham.", image: "https://i.ibb.co/h1fT0drB/PANINI-SEVEN.webp" }
              ]
            }
          ]
        },
        cafe: {
          title: "Cafe",
          subtitle: "Sweet Distinction",
          description: "Sweet moments and selected grains.",
          price: "$8.00",
          image: "https://i.ibb.co/VYBXMK6r/Torta-De-Pi-a-Lim-n-Naranja-o-Marmoleada.webp",
          sections: [
            {
              name: "Pastry",
              items: [
                { name: "Tronchatoro Cake", price: "$8.00", description: "Our famous moist chocolate cake with layers of artisan fudge.", image: "https://i.ibb.co/FkzfcrFy/Tronchatoro-1.webp" },
                { name: "New York Cheesecake", price: "$8.00", description: "Classic New York style, dense and creamy with a hint of vanilla.", image: "https://i.ibb.co/Xk2GT0kg/Cheesecake-Neoyorquino.webp" }
              ]
            },
            {
              name: "Coffee Bar",
              items: [
                { name: "Capuccino", price: "$4.50", description: "Perfect balance between espresso, steamed milk, and foam.", image: "https://i.ibb.co/hJJWk96P/capuchino.webp" },
                { name: "Vanilla Latte", price: "$5.00", description: "Smooth espresso with creamy milk and a touch of French vanilla.", image: "https://i.ibb.co/pvBR8xPn/latte-v.webp" },
                { name: "Mocaccino", price: "$5.50", description: "Fusion of premium chocolate, espresso, and steamed milk.", image: "https://i.ibb.co/dwNpcrH6/mocaccino.webp" },
                { name: "Americano", price: "$3.50", description: "Espresso diluted in hot water for a clean and prolonged flavor.", image: "https://i.ibb.co/5xWYtzRs/americano.webp" }
              ]
            }
          ]
        },
        gelato: {
          title: "Gelatos",
          subtitle: "Boutique Gelateria",
          description: "Fresh, handmade, and balanced.",
          price: "From $8.00",
          image: "https://i.ibb.co/0R05bchL/helados-implementos.webp",
          sections: [
            {
              name: "Traditional Gelatos",
              items: [
                { name: "Pistachio", price: "$8.00", description: "Made with selected pistachios for an authentic flavor.", image: "https://i.ibb.co/PvDCZLcQ/pistacho.png" },
                { name: "Ferrero Rocher", price: "$8.00", description: "Premium product combining creamy hazelnut gelato with hazelnut and cocoa ripples, covered in a crunchy milk chocolate layer.", image: "https://i.ibb.co/23nPxyjX/producto.png" },
                { name: "Vainilla Borbone", price: "$8.00", description: "Premium vanilla with floral notes and extreme creaminess.", image: "https://i.ibb.co/Q7BVSJwn/vainilla.png" }
              ]
            },
            {
              name: "Wellness Line (Sugar-Free & Vegan)",
              items: [
                { name: "Gianduia (Vegan)", price: "$9.00", description: "Italian classic, artisanal ice cream, dairy-free and animal-derivative-free, intensely combining chocolate and hazelnut paste.", image: "https://i.ibb.co/HfBPDDHH/Gianduia-Vegano.webp" },
                { name: "Blueberry Cheesecake (Sugar-Free)", price: "$9.00", description: "All the cheesecake flavor with fresh blueberries, no added sugar.", image: "https://i.ibb.co/Nnnrk82C/arandano.png" }
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
      address: "Lechería 6016, Anzoátegui. Inside the Maremares Hotel, Promenade, 77",
      phone: "0412-8388203",
      hours: "Opening Hours",
      days: "Mon - Sun: 12:00 PM - 12:00 AM",
      valetTitle: "Valet Parking",
      valetFriSat: "Fri - Sat: 4:00 PM - 1:30 AM",
      valetSun: "Sun: 12:00 PM - 6:00 PM",
      closed: "Open every day by the canal",
      rights: "© 2026 Esencia Boutique. Coastal elegance.",
      privacy: "Privacy",
      terms: "Terms",
      whatsappMessage: "Hello, I would like to make a reservation at Esencia Boutique."
    }
  }
};
