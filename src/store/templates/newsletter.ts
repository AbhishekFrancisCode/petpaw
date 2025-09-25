export function getNewsletterHtml({
  name,
  email,
  phone
}: {
  name: string;
  email: string;
  phone?: string;
}) {
  const userName = name;
  const recipient = email;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pawtful Newsletter</title>
    </head>
    <body style="margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial,sans-serif;background:#f6f7fb;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(16,24,40,0.06);">
        <tr>
          <td style="background:#028391;padding:20px 24px;text-align:left;border-bottom:4px solid #EE9422;">
            <img src="https://ik.imagekit.io/funlogic/pawfull/logo_round.png?updatedAt=1758787756399" alt="Pawtful" width="140" style="display:block;max-width:140px;height:auto;">
          </td>
        </tr>
        <tr>
          <td style="padding:28px 24px;text-align:left;">
            <h1 style="margin:0;font-size:24px;color:#028391;">Hi ${userName ? userName : recipient},</h1>
            <p style="margin:12px 0 0 0;font-size:15px;color:#475569;line-height:1.5;">
              Thanks for subscribing to Pawtful’s newsletter!
            </p>
            <p style="margin:12px 0 0 0;font-size:14px;color:#475569;line-height:1.5;">
              You’ll now receive updates, tips, and exclusive recipes tailored for your dog.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;text-align:center;">
            <a href="https://www.pawtful.com/get-started" style="display:inline-block;background:#EE9422;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:600;">
              Explore Pawtful
            </a>
          </td>
        </tr>
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
