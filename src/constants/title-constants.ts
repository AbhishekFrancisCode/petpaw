import { Subtitles } from "lucide-react";
import { describe } from "node:test";

export const TITLES = {
  home: "Pawtful",
  product: "Product",
  mealplan: "Meal Plan",
  howitworks: "How it Works"
};

export const STRINGS = {
  invite: "Invite & Get\n100% of what we earn",
  shareLink: "Share your link",
  vipText: "Your friends get\nVIPlaunch on our\nsocials and website",
  gurantee: "You get 100% of whatever\nwe earn from your\nfriends for 3 months"
};

export const URL_PATHS = {
  LOGIN: "/login",
  ACCOUNT: "/account"
};

export enum ServiceType {
  STANDARD = "Standard",
  POPULAR = "Popular",
  PREMIUM = "Premium",
  CAREERTIP = "Career tips",
  CLIENTMANAGEMENT = "Client management"
}

export const HomePageStrings = {
  title: "Pawtful",
  description: "Formulated by a Nutritionist, our meals are made with 100% human-grade ingredients",
  askPetname: "What's your dog's name?",
  secondSection: {
    title: "Freshly Cooked, Wholesome Meals For Dogs",
    sub_title: "",
    description: "",
    data: [
      {
        title: "100% Human Grade & Ingredients",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/Freshly%20Cooked,%20Wholesome%20Meals%20For%20Dogs/1.png?updatedAt=1751740278859",
        link_to: "https://example.com/sunset",
        color: "",
        title_color: "#028391"
      },
      {
        title: "Cooked Daily in Hygienic Kitchens",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/Freshly%20Cooked,%20Wholesome%20Meals%20For%20Dogs/2.png?updatedAt=1751740278802",
        link_to: "https://example.com/forest",
        color: "",
        title_color: "#028391"
      },
      {
        title: "Nutritionist Formulated Recipes",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/Freshly%20Cooked,%20Wholesome%20Meals%20For%20Dogs/3.png?updatedAt=1751740278977",
        link_to: "https://example.com/city",
        color: "",
        title_color: "#028391"
      },
      {
        title: "Delivered Daily",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/Freshly%20Cooked,%20Wholesome%20Meals%20For%20Dogs/4.png?updatedAt=1751740279093",
        link_to: "https://example.com/city",
        color: "",
        title_color: "#028391"
      }
    ]
  },
  thirdSection: {
    title: "Personalized meal plans for your dogs' needs",
    sub_title: "Starting Prices. Rates will vary based on your plan and your dog’s size",
    description:
      "*All pricing shown is  price based on the starting price for plan type and dog size",
    data: [
      {
        title: "FOR SMALL DOGS\n(5-15 Kgs)",
        image_link: "https://ik.imagekit.io/funlogic/for_small_dogs.png?updatedAt=1745683429764",
        link_to: "https://example.com/sunset",
        color: "",
        title_color: "#028391",
        description: "Monthly Subscription:\n₹139 /meal On Demand Pricing:\n ₹189/meal"
      },
      {
        title: "FOR MEDIUM DOGS\n(15-25Kgs)",
        image_link: "https://ik.imagekit.io/funlogic/for_medium_dogs.png?updatedAt=1745683482134",
        link_to: "https://example.com/forest",
        color: "",
        title_color: "#028391",
        description: "Monthly Subscription:\n₹189 /meal On Demand Pricing:\n ₹249/meal"
      },
      {
        title: "FOR LARGE DOGS\n(Above 25Kgs)",
        image_link: "https://ik.imagekit.io/funlogic/for_large_dogs.png?updatedAt=1745683376669",
        link_to: "https://example.com/city",
        color: "",
        title_color: "#028391",
        description: "Monthly Subscription:\n₹279 /meal On Demand Pricing:\n ₹349/meal"
      }
    ]
  },
  fourthSection: [
    {
      title: "Strong Gut Health",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Pawftul_s%20Promise/1.png?updatedAt=1751740200750",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: ""
    },
    {
      title: "Firm Poop",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Pawftul_s%20Promise/2.png?updatedAt=1751740200747",
      link_to: "https://example.com/forest",
      color: "",
      title_color: ""
    },
    {
      title: "Lustrous Coat",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Pawftul_s%20Promise/3.png?updatedAt=1751740200781",
      link_to: "https://example.com/city",
      color: "",
      title_color: ""
    },
    {
      title: "Ideal Weight",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Pawftul_s%20Promise/4.png?updatedAt=1751740200754",
      link_to: "https://example.com/city",
      color: "",
      title_color: ""
    }
  ],
  fifthSection: [
    {
      title: "All Natural",
      sub_title: "Treats",
      description:
        "The pinnacle of quality and nutrition, Pawtful's Fresh recipes are made from real meat, fruits, veggies, and grains, so you can give your pup the best of the best each and every day.",
      image_link: "https://ik.imagekit.io/funlogic/pawfull/banners/D.png?updatedAt=1750957798388",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422"
    }
  ],
  sixthSection: [
    {
      title: "Tell Us About Your Dog",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/How%20it%20works_/1.png?updatedAt=1751740245696",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description: "Fill out a quick and easy questionnaire to help us understand your dog's needs."
    },
    {
      title: "Personalized Meal Plan & Pricing",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/How%20it%20works_/2.png?updatedAt=1751740245842",
      link_to: "https://example.com/forest",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description:
        "Based on expert nutritionist recommendations, we’ll suggest the perfect portion size and meal options tailored to your dog."
    },
    {
      title: "Try a Free Sample",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/How%20it%20works_/3.png?updatedAt=1751740245974",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description: "Give your dog a taster and see how they respond to it."
    },
    {
      title: "Get Started",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/How%20it%20works_/4.png?updatedAt=1751740246028",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description: "Subscribe and feed your dog nourishing meals every day."
    }
  ],
  seventhSection: [
    {
      title: "Explore Pricing Plans",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Promise%20Image.jpg?updatedAt=1745681546143",
      link_to: "/product",
      color: "#028391",
      title_color: "#ffffff"
    }
  ],
  eighthSection: [
    {
      title: "Get Started",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Promise%20Image.jpg?updatedAt=1745681546143",
      link_to: "/onboarding",
      color: "#EE9422",
      title_color: "#ffffff"
    },
    {
      title: "Know More",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Promise%20Image.jpg?updatedAt=1745681546143",
      link_to: "/mealplan",
      color: "#EE9422",
      title_color: "#ffffff"
    }
  ]
};

export const MealPlanPageStrings = {
  title: "Meal Plan",
  sub_title: "Meal Plan",
  description: "",
  firstSection: {
    title: "A Healthy Choice",
    sub_title:
      "Our vet-formulated, human-grade recipes are made to mix and match, giving your pup endless options.",
    mealdata: [
      {
        id: "0",
        name: "Empty",
        value: "empty",
        imageUrl:
          "https://ik.imagekit.io/funlogic/meal/empty-bowl-1300.webp?updatedAt=1737923515178?tr=w-600,h-600"
      },
      {
        id: "1",
        name: "Chicken",
        value: "chicken",
        imageUrl:
          "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/chicken%20bowl_1.png?updatedAt=1744913914651"
      },
      {
        id: "2",
        name: "Mutton",
        value: "mutton",
        imageUrl:
          "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/mutton%20bowl_1.png?updatedAt=1744913914655"
      },
      {
        id: "3",
        name: "Fish",
        value: "fish",
        imageUrl:
          "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/fish%20bowl_1.png?updatedAt=1744913914541"
      },
      {
        id: "4",
        name: "Veg",
        value: "veg",
        imageUrl:
          "https://ik.imagekit.io/funlogic/pawfull/bowl-cutouts/veg%20bowl_1.png?updatedAt=1744913914683"
      },
      {
        id: "5",
        name: "Treat",
        value: "treat",
        imageUrl: "https://ik.imagekit.io/funlogic/pawfull/chicken%20barks%20bowl%20cutout.png"
      }
    ]
  },
  secondSection: {
    title: "100% Human Grade & Fresh Ingredients",
    sub_title:
      "Our responsibly sourced food delivers vitamins and minerals that are as delicious as they are essential to your dog’s health.",
    data: [
      {
        title: "100% Human-Grade Meat",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/100_%20Human-Grade%20Ingredients/1.png?updatedAt=1751739589093",
        link_to: "",
        color: "",
        title_color: "#333"
      },
      {
        title: "High Quality Veggies",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/100_%20Human-Grade%20Ingredients/2.png?updatedAt=1751739589066",
        link_to: "",
        color: "",
        title_color: "#333"
      },
      {
        title: "Healthy Ad-ons. Coconut oil, eggshell powder, grains & others",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/100_%20Human-Grade%20Ingredients/3.png?updatedAt=1751739589045",
        link_to: "",
        color: "",
        title_color: "#333"
      },
      {
        title: "Sustainable packaging",
        image_link:
          "https://ik.imagekit.io/funlogic/pawfull/100_%20Human-Grade%20Ingredients/4.png?updatedAt=1751739589100",
        link_to: "",
        color: "",
        title_color: "#333"
      }
    ]
  }
};
