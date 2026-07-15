import styles from './FlipCard.module.css';

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function FlipCard({ member, groupLabel }) {
  const hasImage = Boolean(member.image);
  const words = member.name ? member.name.split(' ') : [];
  // Find the longest word length to size all lines equally
  const maxLen = words.length > 0 ? Math.max(...words.map((w) => w.length)) : 1;

  return (
    <div className={styles.flipCard} tabIndex={0}>
      <div className={styles.flipInner}>
        <div className={`${styles.face} ${styles.front} ${!hasImage ? styles.frontIntro : ''}`}>
          {hasImage ? (
            member.coverOnly ? (
              <img src={member.image} alt={member.name} className={styles.coverImage} />
            ) : (
              <>
                <img src={member.image} alt={member.name} className={styles.memberImage} />
                <div className={styles.textOverlay}>
                  <h3 className={styles.name}>{member.name}</h3>
                  {member.role && <p className={styles.role}>{member.role}</p>}
                </div>
              </>
            )
          ) : (
            <div className={styles.stackedTitle} style={{ '--max-len': maxLen }}>
              {words.map((word, i) => (
                <span key={i} className={styles.stackedWord}>
                  {word}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <span className={styles.backLabel}>{groupLabel}</span>
          {member.role && <h3 className={styles.backRole}>{member.role}</h3>}
          <p className={styles.backCopy}>
            {member.introCopy ||
              `Part of the ${groupLabel.toLowerCase()} team at 4C, helping bring
            campus events to the audience they deserve.`}
          </p>
          {member.contact && (
            <div className={styles.contactList}>
              {member.contact.map((line) => (
                <p key={line} className={styles.contactLine}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}