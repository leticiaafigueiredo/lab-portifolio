import emailjs from '@emailjs/browser';

export interface SendEmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  targetProfileName: string;
  targetEmail: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  needsActivation?: boolean;
}

/**
 * Envia mensagem real para o e-mail do destinatário.
 * Suporta:
 * 1. FormSubmit.co (Zero-config, envia direto para o e-mail do perfil ativo)
 * 2. Web3Forms (se VITE_WEB3FORMS_ACCESS_KEY estiver configurado)
 * 3. EmailJS (se VITE_EMAILJS_SERVICE_ID estiver configurado)
 */
export async function sendContactEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const formattedSubject = payload.subject && payload.subject.trim() !== ''
    ? `[Portfólio Lab] ${payload.subject} (Para: ${payload.targetProfileName})`
    : `[Portfólio Lab] Nova mensagem de ${payload.name} (Para: ${payload.targetProfileName})`;

  // 1. Verificar se EmailJS está configurado
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: payload.name,
          from_email: payload.email,
          to_name: payload.targetProfileName,
          to_email: payload.targetEmail,
          subject: formattedSubject,
          message: payload.message,
        },
        emailJsPublicKey
      );

      return {
        success: true,
        message: `Mensagem enviada com sucesso para ${payload.targetEmail}!`,
      };
    } catch (err) {
      console.warn('[EmailService] Falha no envio via EmailJS, tentando FormSubmit...', err);
    }
  }

  // 2. Verificar se Web3Forms está configurado
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3FormsKey && web3FormsKey.trim() !== '' && web3FormsKey !== 'sua_chave_do_web3forms_aqui') {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: payload.name,
          email: payload.email,
          subject: formattedSubject,
          message: payload.message,
          from_name: `${payload.name} (Portfólio Lab)`,
          destinatario: payload.targetProfileName,
          email_destinatario: payload.targetEmail,
        }),
      });

      const data = await res.json();
      if (res.ok && (data.success || data.message === 'Form submitted successfully')) {
        return {
          success: true,
          message: `Mensagem enviada com sucesso para ${payload.targetEmail}!`,
        };
      }
    } catch (err) {
      console.warn('[EmailService] Falha no Web3Forms, tentando FormSubmit...', err);
    }
  }

  // 3. Provedor Padrão Imediato: FormSubmit.co (Zero-config, envia direto para payload.targetEmail)
  try {
    const target = encodeURIComponent(payload.targetEmail);
    const response = await fetch(`https://formsubmit.co/ajax/${target}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _replyto: payload.email,
        _subject: formattedSubject,
        message: payload.message,
        destinatario: `${payload.targetProfileName} (${payload.targetEmail})`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await response.json();

    // Se o serviço do FormSubmit responder sucesso
    if (data.success === 'true' || data.success === true || response.status === 200) {
      return {
        success: true,
        message: `Mensagem enviada com sucesso para ${payload.targetEmail}!`,
      };
    }

    // Se for o primeiro envio, o FormSubmit envia um e-mail de ativação
    if (data.message && data.message.toLowerCase().includes('activation')) {
      return {
        success: true,
        needsActivation: true,
        message: `O FormSubmit enviou um e-mail de ativação para ${payload.targetEmail}. Basta clicar no link de confirmação no seu e-mail para ativar de vez!`,
      };
    }

    return {
      success: false,
      message: data.message || 'Não foi possível enviar a mensagem no momento.',
    };
  } catch (error) {
    console.error('[EmailService] Erro ao conectar ao servidor de e-mails:', error);
    return {
      success: false,
      message: 'Falha de conexão ao enviar o formulário.',
    };
  }
}
