import { Body, Container, Head, Heading, Html, Img, Link, Section, Text } from "@react-email/components"

interface EmailTemplateProps {
    email?: string
    fullName?: string
}

const isProduction = process.env.NODE_ENV === "production";
const baseUrl = isProduction ? `${process.env.VERCEL_URL}/logo.png` : "http://localhost:3000/logo.png";

export const EmailTemplate = ({ email, fullName }: EmailTemplateProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={baseUrl}
                    width="88"
                    height="88"
                    alt="Tukar AI Logo"
                    style={logo}
                />
                <Text style={tertiary}>Welcome {fullName}!</Text>
                <Heading style={secondary}>Thank you for your interest in Tukar App Demo</Heading>
                <Section style={codeContainer}>
                    <Link href={process.env.DEMO_DRIVE_URL} style={{ textDecoration: "none" }}>
                        <Text style={code}>Access Demo</Text>
                    </Link>
                </Section>
                <Text style={paragraph}>Ready to experience seamless translation?</Text>
                <Text style={paragraph}>
                    Contact{" "}
                    <Link href="mailto:tukar@gmail.com" style={link}>
                        tukar@gmail.com
                    </Link>{" "}
                    if you have any questions about our app.
                </Text>
            </Container>
            <Text style={footer}>Powered by Tukar AI.</Text>
        </Body>
    </Html>
)

EmailTemplate.PreviewProps = {
    email: "TUKAR",
    fullName: "Tukar User",
} as EmailTemplateProps

export default EmailTemplate

const main = {
    backgroundColor: "#ffffff",
    fontFamily: "Montserrat,HelveticaNeue,Helvetica,Arial,sans-serif", // Updated to Montserrat font
}

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #eee",
    borderRadius: "24px",
    boxShadow: "0 5px 10px rgba(67, 116, 186, 0.2)", // Updated shadow color to primary blue
    marginTop: "20px",
    maxWidth: "360px",
    margin: "0 auto",
    padding: "68px 0 130px",
}

const logo = {
    margin: "0 auto",
}

const tertiary = {
    color: "rgba(67, 116, 186, 1)", // Updated to primary blue color
    fontSize: "11px",
    fontWeight: 700,
    fontFamily: "Montserrat,HelveticaNeue,Helvetica,Arial,sans-serif", // Updated to Montserrat font
    height: "16px",
    letterSpacing: "0",
    lineHeight: "16px",
    margin: "16px 8px 8px 8px",
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
}

const secondary = {
    color: "rgba(58, 58, 60, 1)", // Updated to darkGray color
    display: "inline-block",
    fontFamily: "Montserrat,HelveticaNeue-Medium,Helvetica,Arial,sans-serif", // Updated to Montserrat font
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    marginBottom: "0",
    marginTop: "0",
    textAlign: "center" as const,
}

const codeContainer = {
    background: "rgba(112, 163, 235, 0.1)", // Updated background to primaryLight with opacity
    borderRadius: "4px",
    margin: "16px auto 14px",
    verticalAlign: "middle",
    width: "280px",
}

const code = {
    color: "rgba(67, 116, 186, 1)", // Updated to primary blue color
    fontFamily: "Montserrat,HelveticaNeue-Bold", // Updated to Montserrat font
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: "3px",
    lineHeight: "40px",
    paddingBottom: "8px",
    paddingTop: "8px",
    margin: "0 auto",
    display: "block",
    textAlign: "center" as const,
}

const paragraph = {
    color: "rgba(58, 58, 60, 1)", // Updated to darkGray color
    fontSize: "15px",
    fontFamily: "Montserrat,HelveticaNeue,Helvetica,Arial,sans-serif", // Updated to Montserrat font
    letterSpacing: "0",
    lineHeight: "23px",
    padding: "0 40px",
    margin: "0",
    textAlign: "center" as const,
}

const link = {
    color: "rgba(67, 116, 186, 1)", // Updated to primary blue color
    textDecoration: "underline",
}

const footer = {
    color: "rgba(58, 58, 60, 1)", // Updated to darkGray color
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0",
    lineHeight: "23px",
    margin: "0",
    marginTop: "20px",
    fontFamily: "Montserrat,HelveticaNeue,Helvetica,Arial,sans-serif", // Updated to Montserrat font
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
}
