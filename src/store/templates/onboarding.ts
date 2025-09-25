export function buildOnboardingHtml(userName: string, recipient: string, phone: string, pet: any) {
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Pawtful Onboarding</title>
</head>
<body style="margin:0;padding:0;background:#f6f7fb;font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(16,24,40,0.06);">
    <!-- Header -->
    <tr>
      <td style="padding:20px 24px;border-bottom:4px solid #EE9422;text-align:left;background:#028391;">
        <img src="https://ik.imagekit.io/funlogic/pawfull/logo_round.png?updatedAt=1758787756399" alt="Pawtful" width="70" style="display:block;max-width:140px;height:auto;">
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding:28px 24px 10px 24px;text-align:left;">
        <h1 style="margin:0;font-size:24px;line-height:1.15;color:#028391;">Hi ${userName},</h1>
        <p style="margin:12px 0 0 0;color:#475569;font-size:15px;line-height:1.5;">
          Thanks for starting your Pawtful onboarding! Here are the details we captured:
        </p>
        <p style="margin:12px 0 0 0;color:#475569;font-size:14px;line-height:1.5;">
          Contact: ${recipient}${phone ? `, Phone: ${phone}` : ""}
        </p>
        <h2 style="font-size:18px;color:#028391;margin-top:24px;">Pet Details:</h2>
        <ul style="padding-left:18px;color:#475569;font-size:14px;line-height:1.5;">
          <li>Name: ${pet?.petname || ""}</li>
          <li>Gender: ${pet?.gender || ""}</li>
          <li>Age: ${pet?.age ?? ""}</li>
          <li>Weight: ${pet?.weight || ""}</li>
          <li>Breed: ${pet?.breed || ""}</li>
          <li>Body Shape: ${pet?.body_shape || ""}</li>
          <li>Activity Level: ${pet?.activity_level || ""}</li>
          <li>Preferred Foods: ${(pet?.preferred_foods || []).join(", ")}</li>
          <li>Allergies: ${(pet?.allergies || []).join(", ")}</li>
        </ul>
        <p style="margin-top:12px;color:#475569;font-size:14px;">
           We’ll be in touch with you soon with the latest updates and relevant information.
        </p>
        <p style="margin-top:20px;color:#475569;font-size:14px;">— Team Pawtful</p>
        <a href="https://www.pawtful.com/product" style="display:inline-block;background:#EE9422;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:600;margin-top:16px;">
          Browse Our Products
        </a>
      </td>
    </tr>
    <!-- Footer -->
        <tr>
          <td style="padding:20px 24px;text-align:center;background:#f6f7fb;font-size:12px;color:#94a3b8;line-height:1.5;">
            <p style="margin:0;">Pawtful © 2024. All Rights Reserved</p>
            <p style="margin-top:8px;">
              Pawtful, Whitefield Bangalore India<br/>
              Email us at info@pawtful.com | <a href="https://www.pawtful.com" style="color:#EE9422;text-decoration:none;">www.pawtful.com</a>
            </p>
            <p style="margin-top:8px;">
              Follow us: 
              <a href="https://instagram.com/pawtful" style="color:#028391;text-decoration:none;">Instagram</a> • 
              <a href="https://facebook.com/pawtful" style="color:#028391;text-decoration:none;">Facebook</a>
            </p>
          </td>
        </tr>
  </table>
</body>
</html>
`;
}
