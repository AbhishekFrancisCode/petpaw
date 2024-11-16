"use client";
import OnboardingPage from "@/components/onboarding/onboarding";
import AuthProvider from "@/contexts/auth-context";
import UserDataProvider from "@/contexts/leader-data-context";

export default function Onboarding() {
  return (
    <div>
      <AuthProvider>
        <UserDataProvider>
          <OnboardingPage />
        </UserDataProvider>
      </AuthProvider>
    </div>
  );
}
