import styles from './Button.module.css';

export default function Button({ onClick, children, title, disable = false }) {
    return (
        <button className={styles.button} onClick={onClick} title={title}
                disabled={disable}>
            {children}
        </button>
    );
}