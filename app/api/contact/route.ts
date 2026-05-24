import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper regex for standard email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, botTrap } = body;

    // 1. Honeypot Spam Protection Check
    // If 'botTrap' field is populated, we suspect a bot.
    // We return a mock success response immediately to trick the bot while ignoring the submission.
    if (botTrap) {
      console.warn("[SPAM CAUGHT] Bot submission detected via honeypot field 'botTrap'. Submitting payload:", { name, email, phone, subject, botTrap });
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been successfully transmitted. A confirmation email has been dispatched.",
        spamBlocked: true,
      });
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Subject must be at least 3 characters long." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long to provide sufficient detail." },
        { status: 400 }
      );
    }

    // Sanitize input strings
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedPhone = phone ? phone.trim() : "Not provided";
    const sanitizedSubject = subject.trim();
    const sanitizedMessage = message.trim();

    // 3. Environment Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Target Admin Inbox to receive submissions
    const adminEmail = "info@advancefood.in";

    // Graceful Fallback if SMTP is not fully configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("-----------------------------------------");
      console.log("[SMTP DEV MOCK MODE] Contact submission received:");
      console.log("Name:", sanitizedName);
      console.log("Email:", sanitizedEmail);
      console.log("Phone:", sanitizedPhone);
      console.log("Subject:", sanitizedSubject);
      console.log("Message:", sanitizedMessage);
      console.log("SMTP Environment variables are missing. Configure SMTP details to send real emails.");
      console.log("-----------------------------------------");

      return NextResponse.json({
        success: true,
        message: "Submission received successfully (Mock Mode). Configure SMTP variables to send real emails.",
        mock: true,
      });
    }

    // 4. Configure Nodemailer Transporter
    // Port 465 uses SSL/TLS (secure: true)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Timeout settings to ensure fast API responses or clean fails
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 10000,
    });

    // 5. Branded HTML Email Templates
    
    // Email Subject for Admin
    const adminEmailSubject = `[Website Contact] New Inquiry: ${sanitizedSubject}`;

    // Premium Branded Admin Email Layout
    const adminEmailBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eef2f6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
        <div style="background: #bc4f24; color: white; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">Advance Food</h2>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">New Website Form Submission Received</p>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <h3 style="margin-top: 0; color: #bc4f24; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px; font-size: 16px;">Inquiry Metadata</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #777; width: 30%; font-size: 14px;">Full Name:</td>
              <td style="padding: 8px 0; color: #333; font-size: 14px;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #777; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0; color: #333; font-size: 14px;"><a href="mailto:${sanitizedEmail}" style="color: #bc4f24; text-decoration: none;">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #777; font-size: 14px;">Phone/WhatsApp:</td>
              <td style="padding: 8px 0; color: #333; font-size: 14px;">${sanitizedPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #777; font-size: 14px;">Subject:</td>
              <td style="padding: 8px 0; color: #333; font-weight: 600; font-size: 14px;">${sanitizedSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #777; font-size: 14px;">Timestamp:</td>
              <td style="padding: 8px 0; color: #777; font-size: 13px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)</td>
            </tr>
          </table>

          <h3 style="color: #bc4f24; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px; font-size: 16px; margin-top: 0;">Detailed Message</h3>
          <div style="background: #fdf6f0; border-left: 4px solid #bc4f24; padding: 18px; margin: 15px 0; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #444; white-space: pre-wrap;">${sanitizedMessage.replace(/\n/g, "<br/>")}</div>
        </div>
        <div style="background: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #eef2f6; font-size: 12px; color: #94a3b8;">
          This message was safely processed and validated by the Advance Food website API.
        </div>
      </div>
    `;

    // Email Subject for Client
    const clientThankYouSubject = `We have received your message - Advance Food`;

    // Premium Branded Client Thank-You Email Layout
    const clientThankYouBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eef2f6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
        <div style="background: #bc4f24; color: white; padding: 28px; text-align: center;">
          <h2 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 0.5px;">Advance Food</h2>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.95;">Celebrating 5 Years of Excellence in Food Export & Import</p>
        </div>
        <div style="padding: 28px; background: #ffffff; line-height: 1.6;">
          <p style="margin-top: 0; font-size: 15px; color: #333;">Dear <strong>${sanitizedName}</strong>,</p>
          <p style="font-size: 15px; color: #555;">Thank you for contacting Advance Food! We have successfully received your inquiry regarding <strong>"${sanitizedSubject}"</strong>.</p>
          <p style="font-size: 15px; color: #555;">Our dedicated logistics and sales team is already reviewing your requirements. We will get back to you with detailed specifications, technical options, and a pricing structure within 24 hours.</p>
          
          <div style="background: #fdf6f0; border-left: 4px solid #bc4f24; padding: 18px; margin: 24px 0; border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color: #bc4f24; font-size: 14px; text-transform: uppercase; tracking-wider: 0.5px;">Submission Summary:</h4>
            <p style="margin: 4px 0; font-size: 13.5px;"><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p style="margin: 4px 0; font-size: 13.5px; color: #666; font-style: italic;">"${sanitizedMessage.length > 150 ? sanitizedMessage.substring(0, 150) + "..." : sanitizedMessage}"</p>
          </div>

          <p style="font-size: 15px; color: #555;">For immediate assistance or to speed up your trade quote, feel free to chat with us directly via our <strong>Official WhatsApp Support</strong> link:</p>
          <p style="text-align: center; margin: 28px 0;">
            <a href="https://wa.me/917622942202" target="_blank" style="background: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.25); transition: transform 0.2s ease;">Chat with us on WhatsApp</a>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0; line-height: 1.5;">
            Advance Food | APMC Marketing Yard, Mahuva, Gujarat, India - 364290<br/>
            Email: <a href="mailto:info@advancefood.in" style="color: #bc4f24; text-decoration: none;">info@advancefood.in</a> | Phone: +91 7622942202
          </p>
        </div>
      </div>
    `;

    // 6. Execute Emails Transmission
    // Send Alert to Admin from the authenticated SMTP user, setting Reply-To to user's real email
    await transporter.sendMail({
      from: `"Advance Food Website" <${smtpUser}>`,
      replyTo: sanitizedEmail,
      to: adminEmail,
      subject: adminEmailSubject,
      html: adminEmailBody,
    });

    // Send thank-you receipt to client
    await transporter.sendMail({
      from: `"Advance Food" <${smtpUser}>`,
      to: sanitizedEmail,
      subject: clientThankYouSubject,
      html: clientThankYouBody,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully transmitted. A confirmation email has been dispatched.",
    });

  } catch (error: any) {
    console.error("Error in contact form SMTP API endpoint:", error);
    
    // Provide clean production-ready error response
    return NextResponse.json(
      { error: "We experienced an error dispatching your message. Please try again or chat via WhatsApp." },
      { status: 500 }
    );
  }
}

