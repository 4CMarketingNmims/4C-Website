"use client";

import styles from "./Contact.module.css";

const contacts = [
  {
    name: "Aniha Khajanchi",
    phone: "+91 89898 63170",
    whatsapp: "https://wa.me/918989863170",
  },
  {
    name: "Kapeesh Godiyal",
    phone: "+91 7977068753",
    whatsapp: "https://wa.me/917977068753",
  },
];

export default function Contact() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.layout}>

          <div className={styles.contacts}>

            {contacts.map((person) => (

              <div
                key={person.phone}
                className={styles.person}
              >

                <div>

                  <h3>{person.name}</h3>

                  <p>{person.phone}</p>

                </div>

                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  WhatsApp
                  <span>↗</span>
                </a>

              </div>

            ))}

          </div>

          <div className={styles.heading}>

            <h2>

              <span>HAVE A</span>

              <span>QUESTION?</span>

            </h2>

            <p>

              Need help? We're just a message away.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}