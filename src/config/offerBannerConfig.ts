export interface OfferBannerConfig {
  visible: boolean;
  text: string;
  link: string;
  linkLabel: string;
  showOnRoutes: string[];
  hideOnRoutes?: string[];
}

export const offerBannerConfig: OfferBannerConfig = {
  visible: true,
  text: "The Semi-Annual Sale: 60% off your first box!",
  link: "/onboarding",
  linkLabel: "Try now!!!!!!",
  showOnRoutes: ["/", "/mealplan", "/faq", "/product", "/how-it-works"],
  hideOnRoutes: ["/onboarding"],
};