import { FeedbackMessage, User } from "@/store/interfaces/user";
import { sbToasterSuccess } from "./sb-toaster";
import { getNewsletterHtml } from "@/store/templates/newsletter";
import { getContactUsHtml } from "@/store/templates/contact-us";
import { buildOnboardingHtml } from "@/store/templates/onboarding";

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
    const html = buildOnboardingHtml(userName, recipient, phone, pet);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: recipient,
        subject: `Pawtful onboarding started for ${pet?.petname || "your pet"}`,
        html
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

export async function sendNewsLetterEmail(payload: any) {
  try {
    const recipient = payload?.email || "";
    console.log("Sending newsletter email to:", recipient);
    if (!recipient) {
      console.warn("No recipient email available; skipping onboarding email.");
      return;
    }

    const userName = payload?.name || "User";
    const phone = payload?.contact?.phone || "";

    // const emailText = [
    //   `Hi ${userName},`,
    //   "",
    //   "Thanks for subscribing to our newsletter! Here are the details we captured:",
    //   "",
    //   `Contact: ${recipient}${phone ? `, Phone: ${phone}` : ""}`,
    //   ""
    // ].join("\n");
    const html = getNewsletterHtml({ name: payload?.name, email: recipient });

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: recipient,
        subject: `Pawtful newsletter subscribed`,
        // text: emailText
        html
      })
    });

    const result = await response.json();

    if (result.success) {
      sbToasterSuccess("Successfully Added");
    } else {
      sbToasterSuccess("Something went wrong");
    }
  } catch (error) {
    console.error("Email sending failed, but continuing with the flow:", error);
  }
}

export async function sendContactEmail(payload: FeedbackMessage) {
  try {
    const recipient = payload?.email || "";

    if (!recipient) {
      console.warn("No recipient email available; skipping onboarding email.");
      return;
    }

    const userName = payload?.name || "User";
    const phone = payload?.phone || "";
    const message = payload?.message || "";
    const subject = payload?.subject || "No Subject";
    const html = getContactUsHtml(userName, recipient, phone, subject, message);
    // const emailText = [
    //   `Hi ${userName},`,
    //   "",
    //   "Thanks for reaching out to Pawtful! Here are the details we captured:",
    //   "",
    //   `Contact: ${recipient}${phone ? `, Phone: ${phone}` : ""}`,
    //   "",
    //   "Pet Details:",
    //   `- Subject: ${subject || ""}`,
    //   `- Message: ${message || ""}`,
    //   "",
    //   "If anything looks off, you can continue adjusting these in the next steps.",
    //   "",
    //   "— Team Pawtful"
    // ].join("\n");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: recipient,
        subject: `Pawtful contact form submitted`,
        // text: emailText
        html
      })
    });

    const result = await response.json();

    if (result.success) {
      sbToasterSuccess("Successfully Submitted");
    } else {
      sbToasterSuccess("Something went wrong");
    }
  } catch (error) {
    console.error("Email sending failed, but continuing with the flow:", error);
  }
}
