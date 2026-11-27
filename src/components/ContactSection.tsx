import { FormEvent, useState } from "react";
import { profile } from "../data/portfolio";

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: profile.socialLinks.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.socialLinks.linkedIn,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
  },
] as const;

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    setStatus("Opening your email app with this message.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-panel">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="contact-field-message">
            Message
            <textarea name="message" rows={3} required />
          </label>
        </div>
        <button className="contact-submit" type="submit">
          <SendIcon />
          Send Message
        </button>
        <p className="contact-status" role="status">
          {status}
        </p>
        <div className="contact-social">
          {socialLinks.map(({ href, id, label }) => (
            <a
              aria-label={label}
              href={href}
              key={id}
              rel="noopener noreferrer"
              target={id === "email" ? undefined : "_blank"}
            >
              <SocialIcon id={id} />
            </a>
          ))}
        </div>
      </form>
    </div>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
      <path
        d="M3.4 11.2 20.2 4.2c.7-.3 1.4.4 1.1 1.1l-7 16.8c-.3.8-1.4.8-1.7 0l-2.6-6.3-6.3-2.6c-.8-.3-.8-1.4 0-1.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m10 14 11.2-9.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SocialIcon({ id }: { id: (typeof socialLinks)[number]["id"] }) {
  if (id === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8.9-2.5-.1-.2-.4-1.2.1-2.4 0 0 .8-.2 2.5 1a8.7 8.7 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.2.2 2.2.1 2.4.6.7.9 1.5.9 2.5 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M6.7 9.2H4.2V19h2.5V9.2ZM5.4 4.6A1.5 1.5 0 1 0 5.5 7.6 1.5 1.5 0 0 0 5.4 4.6ZM19.8 19h-2.5v-5.2c0-1.5-.6-2.5-1.9-2.5-1 0-1.6.7-1.8 1.3-.1.2-.1.6-.1.9V19h-2.5s.1-8.7 0-9.8h2.5v1.6c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4.1 1.5 4.1 4.8V19Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}
