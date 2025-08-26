import EmailTemplate from '@/components/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);
const isProduction = process.env.NODE_ENV === 'production';

export async function POST(req: NextRequest) {
  try {
    const { email, fullName } = await req.json();

    const from = process.env.RESEND_FROM!;
    const to = process.env.RESEND_TO!;

    console.log(process.env.DEMO_DRIVE_URL)

    const { data, error } = await resend.emails.send({
      from,
      to: !isProduction ? to : email, // kirim ke user di production, ke developer di non-production
      subject: isProduction
        ? 'Tukar - Welcome!' 
        : '[DEV] Tukar - Welcome!',
      react: EmailTemplate({ email, fullName }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({ error }, { status: 500 });
  }
}
