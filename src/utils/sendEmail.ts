import { User } from "@/store/interfaces/user";

export async function sendOnboardingEmail(payload: User) {
  try {
    const recipient = payload?.contact?.email || "";

    if (!recipient) {
      console.warn("No recipient email available; skipping onboarding email.");
      return;
    }

    const userName = payload?.name || "User";
    const phone = payload?.contact?.phone || "";
    const pet = payload?.pets || {};

    const emailText = [
      `Hi ${userName},`,
      "",
      "Thanks for starting your Pawtful onboarding! Here are the details we captured:",
      "",
      `Contact: ${recipient}${phone ? `, Phone: ${phone}` : ""}`,
      "",
      "Pet Details:",
      `- Name: ${pet?.petname || ""}`,
      `- Gender: ${pet?.gender || ""}`,
      `- Age: ${pet?.age ?? ""}`,
      `- Weight: ${pet?.weight || ""}`,
      `- Breed: ${pet?.breed || ""}`,
      `- Body Shape: ${pet?.body_shape || ""}`,
      `- Activity Level: ${pet?.activity_level || ""}`,
      `- Preferred Foods: ${(pet?.preferred_foods || []).join(", ")}`,
      `- Allergies: ${(pet?.allergies || []).join(", ")}`,
      "",
      "If anything looks off, you can continue adjusting these in the next steps.",
      "",
      "— Team Pawtful"
    ].join("\n");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "support@pawtful.com",
        subject: `Pawtful onboarding started for ${pet?.petname || "your pet"}`,
        text: emailText
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log("Email sent successfully:", result);
    } else {
      console.error("Email sending failed:", result.error);
    }
  } catch (error) {
    console.error("Email sending failed, but continuing with the flow:", error);
  }
}
