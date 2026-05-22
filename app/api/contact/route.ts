import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, productType, isQuote } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || "contact@advancefood.co.in";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const emailSubject = isQuote 
      ? `[Get Quote Request] New inquiry from ${name}` 
      : `[Contact Form] New message from ${name}`;

    const emailBody = `
      <h3>New Submission from Advance Food Website</h3>
      <p><strong>Form Type:</strong> ${isQuote ? "Get Quote Request" : "General Contact Enquiry"}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      ${productType ? `<p><strong>Product Interest:</strong> ${productType}</p>` : ""}
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #bc4f24;">
        ${message.replace(/\n/g, "<br/>")}
      </blockquote>
    `;

    const clientThankYouSubject = `Thank you for contacting Advance Food - Celebrating 5 Years of Excellence`;
    const clientThankYouBody = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #bc4f24; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">Advance Food</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Celebrating 5 Years of Excellence in Food Export & Import</p>
        </div>
        <div style="padding: 24px; line-height: 1.6;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to Advance Food! We have successfully received your request for <strong>${isQuote ? "a business quote" : "general information"}</strong>.</p>
          <p>Our dedicated global logistics and sales team is already reviewing your details and will get back to you with the required specifications and pricing structure within 24 hours.</p>
          
          <div style="background: #fdf6f0; border-left: 4px solid #bc4f24; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #bc4f24;">Your Request Summary:</h4>
            <p style="margin: 5px 0;"><strong>Product:</strong> ${productType || "General Inquiry"}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
          </div>

          <p>Should you need immediate assistance, please feel free to chat with us directly via our <strong>official WhatsApp Support</strong> using the link below:</p>
          <p style="text-align: center; margin: 25px 0;">
            <a href="https://wa.me/917622942202" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Chat with us on WhatsApp</a>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777; text-align: center; margin: 0;">
            Advance Food | APMC Marketing Yard, Mahuva, Gujarat, India - 364290<br/>
            Email: sales@advancefood.co.in | Phone: +91 7622942202
          </p>
        </div>
      </div>
    `;

    // Graceful Fallback if SMTP is not configured yet
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("-----------------------------------------");
      console.log("[SMTP DEV MOCK MODE] Form submission received:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Product:", productType);
      console.log("Message:", message);
      console.log("SMTP Environment variables are missing. Skipping real email delivery.");
      console.log("-----------------------------------------");

      return NextResponse.json({
        success: true,
        message: "Submission received successfully (Mock Mode). Configure SMTP variables to send real emails.",
        mock: true,
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for 465, false for other ports like 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Send Alert Email to Admin
    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`, // SMTP username as sender to prevent authorization errors
      replyTo: email, // Direct reply back to client
      to: adminEmail,
      subject: emailSubject,
      html: emailBody,
    });

    // 2. Send Thank-You Confirmation Email to Client
    await transporter.sendMail({
      from: `"Advance Food" <${smtpUser}>`,
      to: email,
      subject: clientThankYouSubject,
      html: clientThankYouBody,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully transmitted. A confirmation email has been dispatched.",
    });
  } catch (error: any) {
    console.error("Error in contact form submission endpoint:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to process contact request." },
      { status: 500 }
    );
  }
}
