export function getContactUsHtml(
  userName: string,
  recipient: string,
  phone: string,
  subject?: string,
  message?: string
) {
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Pawtful Contact</title>
</head>
<body style="margin:0;padding:0;background:#f6f7fb;font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(16,24,40,0.06);">
    
    <!-- Header -->
    <tr>
      <td style="padding:0;background:#028391;border-bottom:4px solid #EE9422;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:20px 24px;text-align:left;width:50%;">
              <img src="https://ik.imagekit.io/funlogic/pawfull/logo_round.png?updatedAt=1758787756399" alt="Pawtful" width="70" style="display:block;max-width:140px;height:auto;">
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:28px 24px 10px 24px;text-align:left;background-image:url('https://ik.imagekit.io/funlogic/pawfull/paw_watermark.png');background-repeat:no-repeat;background-position:bottom right;background-size:80px auto;">
        <h1 style="margin:0;font-size:24px;line-height:1.15;color:#028391;">Hi ${userName},</h1>
        <p style="margin:12px 0 0 0;color:#475569;font-size:15px;line-height:1.5;">
          Thanks for reaching out to Pawtful! Here are the details we captured:
        </p>
        <p style="margin:12px 0 0 0;color:#475569;font-size:14px;line-height:1.5;">
          Contact: ${recipient}${phone ? `, Phone: ${phone}` : ""}
        </p>
        <h2 style="font-size:18px;color:#028391;margin-top:24px;">Message Details:</h2>
        <ul style="padding-left:18px;color:#475569;font-size:14px;line-height:1.5;">
          <li>Subject: ${subject || ""}</li>
          <li>Message: ${message || ""}</li>
        </ul>
        <p style="margin-top:12px;color:#475569;font-size:14px;">
        <p style="margin-top:20px;color:#475569;font-size:14px;">— Team Pawtful</p>
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
