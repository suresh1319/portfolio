export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_h65ba1n',  
  TEMPLATE_ID: 'template_pdqphrn',
  PUBLIC_KEY: 'Iz4gUeUb3s7YiuX1k'   
};

export const EMAIL_TEMPLATE = {
  subject: 'Portfolio Contact: {{subject}}',
  body: `
Hi Suresh,

You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
  `
};