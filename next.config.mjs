/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SMTP_MAIL: process.env.SMTP_MAIL,
        SMTP_PASS: process.env.SMTP_PASS,
        MAIL_TO: process.env.MAIL_TO,
        NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_URL,
        API_URL : process.env.API_URL
    },
    output: 'export',
};

export default nextConfig;
