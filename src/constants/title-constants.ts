import { Subtitles } from "lucide-react";
import { describe } from "node:test";

export const TITLES = {
  home: "Pwatful",
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
  title: "Pwatful",
  description:
    "Pwatful is a platform that connects you with the best meal plans, workout plans, and nutrition advice tailored to your needs. Join us today and start your journey towards a healthier lifestyle.",
  askPetname: "Put your dogs name",
  secondSection: [
    {
      title: "100% Human Grade & Fresh Ingredients",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/all%20ingredients%20with%20dog%20looking%20at%20them.JPG?updatedAt=1744556294455",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Cooked Daily in hygienic kitchens",
      image_link: "https://ik.imagekit.io/funlogic/hygienic.png?updatedAt=1745681734861",
      link_to: "https://example.com/forest",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Nutritionist Formulated Recipes",
      image_link: "https://ik.imagekit.io/funlogic/nutritious.png?updatedAt=1745681663652",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#028391"
    },
    {
      title: "Delivered daily",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Try%20IT%20for%20Free_Delivery%20Pic.jpg?updatedAt=1745681546143",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#028391"
    }
  ],
  thirdSection: [
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
  ],
  fourthSection: [
    {
      title: "Good Gut Health",
      image_link: "https://ik.imagekit.io/funlogic/gut_health.png?updatedAt=1745681925897",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: ""
    },
    {
      title: "Good Poops",
      image_link: "https://ik.imagekit.io/funlogic/Good%20Poop.png?updatedAt=1745682273463",
      link_to: "https://example.com/forest",
      color: "",
      title_color: ""
    },
    {
      title: "Healthier Skin & Coat",
      image_link: "https://ik.imagekit.io/funlogic/dog_poop.png?updatedAt=1745681983038",
      link_to: "https://example.com/city",
      color: "",
      title_color: ""
    },
    {
      title: "Healthy Weight",
      image_link: "https://ik.imagekit.io/funlogic/healthy_weight.png?updatedAt=1745682023440",
      link_to: "https://example.com/city",
      color: "",
      title_color: ""
    }
  ],
  fifthSection: [
    {
      title: "Benefits of Eating ,",
      sub_title: "Fresh Food",
      description:
        "IMPROVED DIGESTION & ENERGY \n More digestible than kibble, giving your pup more nutrients and pep in their step. ALLERGY & WEIGHT CONTROL Our food helps maintain your pup's ideal weight and is great for allergies and sensitivities. MORE MEALTIMES TOGETHER A fresh, whole food diet has been proven to help dogs live up to 2.5 years longer.",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/dog%20eating%20food%20with%20all%20ingredients.JPG?updatedAt=1744556300649",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422"
    }
  ],
  sixthSection: [
    {
      title: "Tell Us About Your Pup",
      image_link: "https://ik.imagekit.io/funlogic/about_your_pup.jpg?updatedAt=1739015868088",
      link_to: "https://example.com/sunset",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description: "Fill out a quick and easy questionnaire to help us understand your dog's needs."
    },
    {
      title: "Personalized Meal Plan & Pricing",
      image_link: "https://ik.imagekit.io/funlogic/meal_plan.png?updatedAt=1745683022143",
      link_to: "https://example.com/forest",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description:
        "Based on expert nutritionist recommendations, we’ll suggest the perfect portion size and meal options tailored to your dog."
    },
    {
      title: "Try It for Free!",
      image_link:
        "https://ik.imagekit.io/funlogic/pawfull/Try%20IT%20for%20Free_Delivery%20Pic.jpg?updatedAt=1745681546143",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description:
        "Get a complimentary trial pack to see if your pup loves the meals and digests them well."
    },
    {
      title: "Subscribe & Serve",
      image_link: "https://ik.imagekit.io/funlogic/serve-food.webp?updatedAt=1739015868258",
      link_to: "https://example.com/city",
      color: "",
      title_color: "#EE9422",
      sub_title_color: "#999999",
      description:
        "Choose a meal plan from our carefully crafted recipes and start feeding your furry friend fresh, nutritious meals!"
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
