import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, Copy, Check, MessageSquare, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ProfileData } from '../types';
import type { Translations } from '../data/translations';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';
import { sendContactEmail } from '../services/emailService';

interface ContactProps {
  profile: ProfileData;
  onToast: (msg: string) => void;
  t: Translations['contact'];
}

export const Contact: React.FC<ContactProps> = ({ profile, onToast, t }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    soundManager.playPop();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onToast(t.toastCopied(label));
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      onToast(t.toastValidation);
      return;
    }

    // Validação básica de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      onToast(t.emailInvalid);
      return;
    }

    setIsSubmitting(true);
    soundManager.playPaperRustle();

    try {
      const result = await sendContactEmail({
        name: trimmedName,
        email: trimmedEmail,
        subject: formData.subject.trim(),
        message: trimmedMessage,
        targetProfileName: profile.fullName,
        targetEmail: profile.contact.email,
      });

      if (result.success) {
        setSubmitted(true);
        soundManager.playPop();

        confetti({
          particleCount: 90,
          spread: 65,
          origin: { y: 0.7 },
          colors: [profile.theme.yellow, profile.theme.red, profile.theme.blue, '#221F1B'],
        });

        if (result.needsActivation) {
          onToast(t.activationNotice(profile.contact.email));
        } else {
          onToast(t.toastSuccess(profile.name));
        }
      } else {
        setErrorMessage(result.message || t.emailError);
        onToast(result.message || t.emailError);
      }
    } catch {
      setErrorMessage(t.emailError);
      onToast(t.emailError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
    formData.subject || `Contato de ${formData.name || 'Visitante'}`
  )}&body=${encodeURIComponent(formData.message || '')}`;

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20"
      id="contato"
      style={{ borderTop: `2px dashed ${profile.theme.line}` }}
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-sm font-bold" style={{ color: profile.theme.pencil }}>
          {t.sectionNum}
        </span>
        <h2 className="font-caveat font-bold m-0 leading-tight text-4xl sm:text-5xl" style={{ color: profile.theme.ink }}>
          {t.sectionTitle}
        </h2>
      </div>

      {/* Cartão Postal Vintage com Divisão Central */}
      <div
        className="sketchy p-0 overflow-hidden relative"
        style={{
          backgroundColor: profile.theme.paper2,
          border: `2.5px solid ${profile.theme.ink}`,
          boxShadow: '6px 10px 0px rgba(0,0,0,0.12)',
        }}
      >
        {/* Selo Postal no Canto Superior */}
        <div
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-20 flex flex-col items-center justify-center font-mono text-[0.62rem] text-center rotate-3 border-2 border-dashed z-10 shadow-xs"
          style={{
            borderColor: profile.theme.pencil,
            backgroundColor: profile.theme.paper,
            color: profile.theme.pencil,
          }}
        >
          <span className="font-bold text-[0.7rem] uppercase">{t.stampTitle}</span>
          <span className="text-base my-0.5">☕</span>
          <span className="opacity-70">{t.stampSubtitle}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Lado Esquerdo do Cartão Postal: Formulário de Mensagem */}
          <div
            className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r-2 border-dashed"
            style={{ borderColor: profile.theme.line }}
          >
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl m-0 mb-2" style={{ color: profile.theme.ink }}>
              {t.formTitle}
            </h3>
            <p className="font-roboto text-sm leading-relaxed max-w-[44ch] mb-6" style={{ color: profile.theme.pencil }}>
              {t.formSubtitle}
            </p>

            {/* Alerta de erro com fallback mailto se falhar */}
            {errorMessage && (
              <div
                className="p-3.5 mb-5 rounded-xs border flex items-start gap-2.5 text-xs font-mono"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: '#ef4444',
                  color: '#991b1b',
                }}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="m-0 font-bold">{errorMessage}</p>
                  <a
                    href={mailtoFallbackUrl}
                    className="inline-flex items-center gap-1 mt-1.5 underline font-bold"
                    style={{ color: profile.theme.blue }}
                  >
                    <span>{t.fallbackMailto}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {submitted ? (
              <div
                className="p-6 rounded-xs border-2 text-center my-6"
                style={{
                  backgroundColor: profile.theme.paper,
                  borderColor: profile.theme.ink,
                }}
              >
                <span className="text-3xl block mb-2">🎉</span>
                <h4 className="font-caveat font-bold text-2xl m-0" style={{ color: profile.theme.ink }}>
                  {t.formSuccessTitle}
                </h4>
                <p className="font-architects text-sm mt-2" style={{ color: profile.theme.pencil }}>
                  {t.formSuccessSubtitle(formData.name, formData.email)}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 font-mono text-xs underline cursor-pointer font-bold"
                  style={{ color: profile.theme.blue }}
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 opacity-75" style={{ color: profile.theme.ink }}>
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full p-2.5 rounded-xs border font-roboto text-sm outline-none transition-colors disabled:opacity-50"
                      style={{
                        backgroundColor: profile.theme.paper,
                        borderColor: profile.theme.ink,
                        color: profile.theme.ink,
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1 opacity-75" style={{ color: profile.theme.ink }}>
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full p-2.5 rounded-xs border font-roboto text-sm outline-none transition-colors disabled:opacity-50"
                      style={{
                        backgroundColor: profile.theme.paper,
                        borderColor: profile.theme.ink,
                        color: profile.theme.ink,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 opacity-75" style={{ color: profile.theme.ink }}>
                    {t.subjectLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full p-2.5 rounded-xs border font-roboto text-sm outline-none transition-colors disabled:opacity-50"
                    style={{
                      backgroundColor: profile.theme.paper,
                      borderColor: profile.theme.ink,
                      color: profile.theme.ink,
                    }}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 opacity-75" style={{ color: profile.theme.ink }}>
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full p-2.5 rounded-xs border font-roboto text-sm outline-none transition-colors resize-y disabled:opacity-50"
                    style={{
                      backgroundColor: profile.theme.paper,
                      borderColor: profile.theme.ink,
                      color: profile.theme.ink,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sketchy px-6 py-3 font-mono text-xs font-bold cursor-pointer transition-all active:scale-95 inline-flex items-center gap-2 disabled:opacity-60"
                  style={{
                    backgroundColor: profile.theme.ink,
                    color: profile.theme.paper,
                    border: `2px solid ${profile.theme.ink}`,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Lado Direito do Cartão Postal: Dados Diretos e Redes */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest font-bold block mb-4" style={{ color: profile.theme.pencil }}>
                {t.directChannelsTitle}
              </span>

              <div className="space-y-4 font-mono text-xs">
                {/* Linha E-mail */}
                <div
                  className="p-3 rounded-xs border flex items-center justify-between gap-2"
                  style={{
                    backgroundColor: profile.theme.paper,
                    borderColor: profile.theme.line,
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-4 h-4 shrink-0" style={{ color: profile.theme.red }} />
                    <span className="truncate">{profile.contact.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.contact.email, 'E-mail')}
                    className="p-1.5 rounded-xs hover:bg-black/10 transition-colors cursor-pointer shrink-0"
                    title={t.copyEmailTitle}
                  >
                    {copiedField === 'E-mail' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                  </button>
                </div>

                {/* Linha Telefone / WhatsApp */}
                <div
                  className="p-3 rounded-xs border flex items-center justify-between gap-2"
                  style={{
                    backgroundColor: profile.theme.paper,
                    borderColor: profile.theme.line,
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-4 h-4 shrink-0" style={{ color: profile.theme.blue }} />
                    <span className="truncate">{profile.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <a
                      href={profile.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xs hover:bg-black/10 transition-colors no-underline text-inherit"
                      title={t.whatsappTitle}
                      onClick={() => soundManager.playClick()}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-green-600" />
                    </a>
                    <button
                      onClick={() => handleCopy(profile.contact.phone, 'Telefone')}
                      className="p-1.5 rounded-xs hover:bg-black/10 transition-colors cursor-pointer"
                      title={t.copyPhoneTitle}
                    >
                      {copiedField === 'Telefone' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                    </button>
                  </div>
                </div>

                {/* Linha GitHub */}
                <a
                  href={profile.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="p-3 rounded-xs border flex items-center justify-between gap-2 no-underline text-inherit hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: profile.theme.paper,
                    borderColor: profile.theme.line,
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <GithubIcon size={16} />
                    <span className="truncate">{profile.contact.github}</span>
                  </div>
                  <span className="opacity-50 text-[0.65rem]">↗</span>
                </a>

                {/* Linha LinkedIn */}
                <a
                  href={profile.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="p-3 rounded-xs border flex items-center justify-between gap-2 no-underline text-inherit hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: profile.theme.paper,
                    borderColor: profile.theme.line,
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <LinkedinIcon size={16} className="text-blue-600" />
                    <span className="truncate">{profile.contact.linkedin}</span>
                  </div>
                  <span className="opacity-50 text-[0.65rem]">↗</span>
                </a>
              </div>
            </div>

            {/* Aviso de Disponibilidade */}
            <div
              className="mt-6 p-3 rounded-xs border-l-3 text-xs font-architects"
              style={{
                backgroundColor: profile.theme.paper,
                borderColor: profile.theme.red,
                color: profile.theme.pencil,
              }}
            >
              🟢 <strong>{t.statusPrefix}</strong> {profile.status}. {t.statusSuffix}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};