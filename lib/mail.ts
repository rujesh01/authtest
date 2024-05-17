import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "confirm you mail",
    html: ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">
    <tr>
      <td style="padding: 20px; background-color: #f2f2f2; text-align: center;">
        <h2>Welcome to Our Platform!</h2>
        <p>Please verify your email address to complete your signup process.</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p>Click the button below to verify your email:</p>
        <p style="text-align: center;">
          <a href="${confirmLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Verify Email</a>
        </p>
        <p>If you have trouble clicking the button, you can also copy and paste the following link into your browser:</p>
        <p style="text-align: center;">${confirmLink}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; background-color: #f2f2f2; text-align: center;">
        <p>If you did not sign up for our platform, please ignore this email.</p>
      </td>
    </tr>
  </table>`,
  });
};
