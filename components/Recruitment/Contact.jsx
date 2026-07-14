"use client";

import styles from "./Contact.module.css";

const contacts = [
  {
    name: "Aniha Khajanchi",
    phone: "+91 89898 63170",
    link: "https://wa.me/918989863170",
  },
  {
    name: "Kapeesh Godiyal",
    phone: "+91 79770 68753",
    link: "https://wa.me/917977068753",
  },
];

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.right}>

          <h2 className={styles.heading}>
            HAVE
            <br />
            A
            <br />
            QUESTION?
          </h2>

          <p className={styles.subtitle}>
            Need help? Reach out to us directly on WhatsApp and we'll get back
            to you as soon as possible.
          </p>

        </div>

        <div className={styles.left}>

          {contacts.map((contact) => (
            <article
              key={contact.name}
              className={styles.contact}
            >

              <div className={styles.details}>

                <h3>{contact.name}</h3>

                <p>{contact.phone}</p>

                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >

                  <svg
                    className={styles.whatsapp}
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.01 3C8.84 3 3 8.74 3 15.82c0 2.27.61 4.48 1.77 6.42L3 29l6.97-1.82a13.1 13.1 0 0 0 6.04 1.48C23.17 28.66 29 22.92 29 15.84 29 8.74 23.17 3 16.01 3Zm0 23.43a10.9 10.9 0 0 1-5.56-1.53l-.4-.24-4.13 1.08 1.1-4.01-.26-.42a10.63 10.63 0 0 1-1.64-5.49c0-5.88 4.89-10.66 10.89-10.66s10.89 4.78 10.89 10.66-4.89 10.61-10.89 10.61Zm5.97-8.02c-.33-.16-1.95-.95-2.25-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.21-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.58-.97-.84-1.63-1.88-1.82-2.2-.19-.32-.02-.49.14-.65.15-.15.33-.38.49-.57.16-.19.22-.32.33-.53.11-.21.05-.4-.03-.56-.08-.16-.74-1.76-1.01-2.41-.27-.64-.55-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.11-1.15 2.7 0 1.58 1.18 3.12 1.35 3.34.16.21 2.32 3.63 5.62 5.08.78.34 1.39.54 1.86.69.78.24 1.49.21 2.05.13.63-.09 1.95-.8 2.22-1.58.27-.77.27-1.43.19-1.58-.08-.13-.3-.21-.63-.37Z" />
                  </svg>

                  <span>Chat on WhatsApp</span>

                  <svg
                    className={styles.arrow}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}