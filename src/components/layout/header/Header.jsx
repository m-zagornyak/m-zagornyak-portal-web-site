import { Logo } from "./Logo";
import styles from "./Header.module.scss"

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<h1>Hello</h1>
		</div>
		
	);
}

export default Header;