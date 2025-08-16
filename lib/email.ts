import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(name: string, email: string) {
  try {
    // Mock implementation - in production, uncomment the actual send
    // const { data, error } = await resend.emails.send({
    //   from: 'Tukar <noreply@tukar.app>',
    //   to: [email],
    //   subject: 'Welcome to Tukar - Your Early Access is Ready!',
    //   react: WelcomeEmail({ name }),
    // })

    // Mock success response for demo
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    return {
      success: true,
      data: { id: "mock-email-id" },
      error: null,
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      data: null,
      error: "Failed to send email",
    }
  }
}
