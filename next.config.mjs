/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        APP_ENV : process.env.APP_ENV,
        SMTP_MAIL: process.env.SMTP_MAIL,
        SMTP_PASS: process.env.SMTP_PASS,
        MAIL_TO: process.env.MAIL_TO,
        API_URL : process.env.API_URL
    },
};

export default nextConfig;
