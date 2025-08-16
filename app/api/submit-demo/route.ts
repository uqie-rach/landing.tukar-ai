import { type NextRequest, NextResponse } from "next/server"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json()

    if (!fullName || !email) {
      return NextResponse.json({ error: "Full name and email are required" }, { status: 400 })
    }

    // Send welcome email
    const emailResult = await sendWelcomeEmail(fullName, email)

    if (!emailResult.success) {
      return NextResponse.json({ error: "Failed to send welcome email" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
      emailId: emailResult.data?.id,
    })
  } catch (error) {
    console.error("Demo submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
