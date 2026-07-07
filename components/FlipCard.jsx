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
  return (
    <div className={styles.flipCard} tabIndex={0}>
      <div className={styles.flipInner}>
        <div className={`${styles.face} ${styles.front}`}>
          {member.image && (
            <img src={member.image} alt={member.name} className={styles.memberImage} />
          )}
          <div className={styles.textOverlay}>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <span className={styles.backLabel}>{groupLabel}</span>
          <h3 className={styles.backRole}>{member.role}</h3>
          {member.contact ? (
            <div className={styles.contactList}>
              {member.contact.map((line) => (
                <p key={line} className={styles.contactLine}>
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.backCopy}>
              Part of the {groupLabel.toLowerCase()} team at 4C, helping bring
              campus events to the audience they deserve.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
