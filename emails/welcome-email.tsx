import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"

interface WelcomeEmailProps {
  name: string
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Tukar - Your translation app is ready!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img src="https://tukar.app/logo.png" width="80" height="80" alt="Tukar Logo" style={logo} />
        </Section>

        <Heading style={heading}>Welcome to Tukar, {name}!</Heading>

        <Text style={paragraph}>
          Thank you for joining our early access program! We're excited to have you as one of the first users to
          experience Tukar's revolutionary AI-powered translation technology.
        </Text>

        <Text style={paragraph}>
          Tukar is designed specifically for Brunei's unique linguistic landscape, featuring:
        </Text>

        <Text style={listItem}>• PDF translation with layout preservation</Text>
        <Text style={listItem}>• Contextual chat AI with Bruneian dialects</Text>
        <Text style={listItem}>• Instant image translation</Text>

        <Section style={buttonSection}>
          <Link style={button} href="https://tukar.app/download">
            Download Tukar Now
          </Link>
        </Section>

        <Text style={paragraph}>
          If you have any questions or feedback, feel free to reach out to us at{" "}
          <Link href="mailto:tukar@gmail.com" style={link}>
            tukar@gmail.com
          </Link>
        </Text>

        <Text style={footer}>
          Best regards,
          <br />
          The Tukar Team
        </Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#ffffff",
  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
}

const logoSection = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const logo = {
  borderRadius: "12px",
}

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "rgba(67, 116, 186, 1)",
  textAlign: "center" as const,
  margin: "30px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "rgba(58, 58, 60, 1)",
  margin: "16px 0",
}

const listItem = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "rgba(58, 58, 60, 1)",
  margin: "8px 0",
  paddingLeft: "20px",
}

const buttonSection = {
  textAlign: "center" as const,
  margin: "32px 0",
}

const button = {
  backgroundColor: "rgba(67, 116, 186, 1)",
  borderRadius: "12px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "16px 32px",
  boxShadow: "0 4px 15px 0 rgba(112, 163, 235, 0.4)",
}

const link = {
  color: "rgba(67, 116, 186, 1)",
  textDecoration: "underline",
}

const footer = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "rgba(58, 58, 60, 0.7)",
  margin: "32px 0 0",
}

export default WelcomeEmail
