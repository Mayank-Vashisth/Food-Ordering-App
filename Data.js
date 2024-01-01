const resList = [
    {
        name: "Pastry",
        cusine: "Burger, Fast-food",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Meghna Food",
        cusine: "Biryani,dhokla",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Burger King",
        cusine: "chopstick, Burger, Fast-food",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
    },
    {
        name: "Raja Dhaba",
        cusine: "Roti, Daal",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Sushi Haven",
        cusine: "Sushi, Japanese",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Pizza Paradise",
        cusine: "Pizza, Italian",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Paneer Tikka",
        cusine: "Marinated and grilled cubes of paneer (Indian cottage cheese).",
        price: "$6.99",
        image:
          "https://www.carolinescooking.com/wp-content/uploads/2021/09/paneer-tikka-photo.jpg",
        rating: 4.3,
      },
      {
        name: "Chana Masala",
        cusine: "Spiced chickpeas cooked in a flavorful tomato-based sauce.",
        price: "$5.49",
        image:
          "https://as2.ftcdn.net/v2/jpg/02/97/69/65/1000_F_297696576_s8k3pGepliFhN2oILIzLUAkQuukKalDI.jpg",
        rating: 4.0,
      },
      
      {
        name: "Samosa",
        cusine:
          "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
        price: "$2.99",
        image:
          "https://as2.ftcdn.net/v2/jpg/03/22/27/21/1000_F_322272181_7BpAXEVU6K279QLgOUKzUATdne8VW35U.jpg",
        rating: 4.1,
      },
      {
        name: "Palak Paneer",
        cusine: "Creamy spinach curry with cubes of paneer.",
        price: "$8.49",
        image:
          "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D",
        rating: 4.5,
      },
      {
        name: "Raw Vegitables",
        cusine: "Stir-fried cauliflower and potatoes with spices.",
        price: "$5.99",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.2,
      },
      {
        name: "Dhokla",
        cusine:
          "Steamed and spongy cake made from fermented rice and chickpea flour.",
        price: 4.49,
        image:
          "https://media.istockphoto.com/id/1481105014/photo/indian-chana-dal-dhokla-khaman-dhokla-is-a-famous-dish-of-gujarat-made-using-rice-a-healthy.jpg?s=612x612&w=0&k=20&c=ug0VhzwcKKAxzOFeC3G3HPDJSo7Vm026MrpcZ2_u53g=",
        rating: 3.9,
      },
      {
        name: "Mushroom Masala",
        cusine: "Mushrooms cooked in a spiced tomato-based curry.",
        price: 6.99,
        image:
          "https://media.istockphoto.com/id/166752725/photo/mushroom-masala-curry-indian-dish.jpg?s=1024x1024&w=is&k=20&c=fWfRaTJZutPVMIeJ3TZtVZwd0KzIypLMjVBEOjX5n-M=",
        rating: 4.3,
      },
      {
        name: "Vegetable Korma",
        cusine:
          "Mixed vegetables cooked in a creamy and aromatic coconut-based curry.",
        price: 7.99,
        image:
          "https://holycowvegan.net/wp-content/uploads/2013/12/vegetable-korma-kurma-mixed-vegetable-curry-10.jpg",
        rating: 3.4,
      },
      {
        name: "Masala Dosa",
        cusine:
          "Thin rice crepe filled with spiced mashed potatoes, served with coconut chutney.",
        price: "$6.49",
        image:
          "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
        rating: 4.6,
      },
      {
        name: "Roti",
        cusine: "A traditional Indian flatbread made from whole wheat flour.",
        price: "$2.49",
        image:
          "https://cdn.mos.cms.futurecdn.net/z9yrzoMFd7hcFnvjzNjv5P-1024-80.jpg.webp",
        rating: 3.9,
      },
      {
        name: "Daal",
        cusine: "A flavorful lentil curry made with a blend of spices.",
        price: "$3.99",
        image: "https://maayeka.com/wp-content/uploads/2023/01/urad-daal-fry.jpg",
        rating: 3.5,
      },
      {
        name: "Mixed Vegetable Curry",
        cusine:
          "A delicious medley of fresh vegetables cooked in a savory curry sauce.",
        price: "$4.99",
        image:
          "https://vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg",
        rating: 4.2,
      },
      {
        name: "Mango Lassi",
        cusine: "Refreshing yogurt-based drink blended with sweet mango pulp.",
        price: "$3.49",
        image:
          "https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg",
        rating: 4.6,
      },
    
      {
        name: "Classic Cheeseburger",
        cusine:
          "Juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomatoes, pickles, and a special sauce on a toasted sesame seed bun.",
        price: "$5.99",
        image: "https://iambaker.net/wp-content/uploads/2019/05/cheeseburger-1.jpg",
        rating: 4.2,
      },
    
      {
        name: "Loaded Nachos",
        cusine:
          "Tortilla chips topped with melted cheese, black beans, salsa, guacamole, and sour cream.",
        price: "$6.99",
        image:
          "https://www.savorynothings.com/wp-content/uploads/2020/01/sheet-pan-nachos-image-1-1.jpg",
        rating: 4.0,
      },
      {
        name: "Margherita Pizza",
        cusine:
          "Traditional Italian pizza with a thin crust, topped with fresh tomato sauce, mozzarella cheese, and basil leaves.",
        price: "$8.99",
        image:
          "https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=",
        rating: 4.6,
      },
      {
        name: "French Fries",
        cusine: "Crispy golden fries seasoned to perfection.",
        price: "$3.49",
        image:
          "https://www.simplyrecipes.com/thmb/dYnEz9rF4gsf3t8usnqjGjoPSOU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Fries-LEAD-08-aafb4546b5b641b1bb6d96b4d3740d3d.jpg",
        rating: 4.3,
      },
      {
        name: "Chocolate Shake",
        cusine: "Creamy chocolate shake topped with whipped cream.",
        price: "$4.49",
        image:
          "https://i2.wp.com/bakingmischief.com/wp-content/uploads/2019/07/chocolate-milkshake-image-1025x1536.jpg",
        rating: 4.4,
      },
      {
        name: "Vanilla Milkshake",
        cusine: "Smooth vanilla shake made with premium vanilla ice cream.",
        price: "$4.49",
        image:
          "https://www.southernliving.com/thmb/98jbXox0t91To5mCGhTV3VLeni0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla_Milkshake_008-4fd1cd15785a40a6bd17ae42758cdaf4.jpg",
        rating: 4.2,
      },
      {
        name: "Strawberry Smoothie",
        cusine: "Refreshing smoothie blended with fresh strawberries and yogurt.",
        price: "$4.99",
        image:
          "https://www.thespruceeats.com/thmb/O63-xJAHLab8aWBugI4UKgmAc5o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/strawberry-breakfast-smoothie-recipe-2097149-hero-02-5c1d4b2a46e0fb00014bf2ec.jpg",
        rating: 4.6,
      },
      {
        name: "Banana Caramel Shake",
        cusine:
          "Rich caramel flavor combined with ripe bananas in a delightful shake.",
        price: "$5.49",
        image:
          "https://cdn.lemonsforlulu.com/wp-content/uploads/2019/07/Banana-Milkshake-5-720x720.jpg",
        rating: 4.3,
      },
    
      {
        name: "Peanut Butter Bliss Shake",
        cusine:
          "Indulgent shake featuring the rich taste of peanut butter and chocolate.",
        price: "$5.99",
        image:
          "http://www.key360nutrition.com/wp-content/uploads/2019/10/My-KEY360-Story-Peanut-Butter-Bliss-Yogurt-Smoothie-300x200px.jpg",
        rating: 4.7,
      },
      {
        name: "Oreo Delight Shake",
        cusine: "Crushed Oreo cookies blended into a deliciously sweet shake.",
        price: "$5.49",
        image:
          "https://pinchofwellness.com/wp-content/uploads/2023/02/oreo-protein-shake-1-2.jpg",
        rating: 4.5,
      },
      {
        name: "Green Tea Matcha Smoothie",
        cusine:
          "Healthy and refreshing smoothie featuring green tea matcha and a hint of sweetness.",
        price: "$5.99",
        image:
          "https://www.jessicagavin.com/wp-content/uploads/2016/12/healthy-matcha-green-tea-smoothie-with-greens-600x900.jpg",
        rating: 4.2,
      },
      {
        name: "Blueberry Blast Shake",
        cusine: "Antioxidant-rich blueberries blended into a flavorful shake.",
        price: "$5.49",
        image:
          "https://experiencelife.lifetime.life/wp-content/uploads/2023/04/MicrosoftTeams-image-10-3.jpg",
        rating: 4.6,
      },
    
      {
        name: "Vegetarian Burger",
        cusine:
          "Plant-based burger patty with lettuce, tomato, onion, and special sauce on a whole-grain bun.",
        price: "$6.99",
        image: "https://i.ytimg.com/vi/a19EY3YNStA/maxresdefault.jpg",
        rating: 4.1,
      },
      {
        name: "Vegetarian Spring Rolls",
        cusine:
          "Crispy spring rolls filled with a mix of vegetables, served with sweet chili sauce.",
        price: "$5.99",
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Spring-Rolls%2FVegetarian_Spring_Rolls-2",
        rating: 4.0,
      },
      {
        name: "Cheesy Garlic Breadsticks",
        cusine: "Baked breadsticks topped with garlic, butter, and melted cheese.",
        price: "$4.99",
        image: "https://grandbaby-cakes.com/wp-content/uploads/2015/01/Garlic-Cheese-Breadsticks-1-683x1024.jpg",
        rating: 3.8,
      },
      {
        name: "Falafel Sandwich",
        cusine:
          "Crispy falafel patties with lettuce, tomatoes, and tahini sauce in a soft pita bread.",
        price: "$8.49",
        image: "https://www.heynutritionlady.com/wp-content/uploads/2023/07/Falafel-Sandwich-Recipe-SQ.jpg",
        rating: 4.3,
      }
];



module.exports = resList;