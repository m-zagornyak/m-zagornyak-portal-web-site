const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav classNameName={styles.nav}>
				<div classNameName={styles.header}>
					<div classNameName={styles.navbar}>
						<div classNameName={styles.items}>
							<div classNameName="flex-shrink-0">
								<img classNameName="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
							</div>
							<div classNameName="hidden md:block">
								<div classNameName={styles.menu}>
									<Link to="/" classNameName={styles.textmenu}>Docs</Link>
									<Link to="/" classNameName={styles.textmenu}>Premium</Link>
									<Link to="/" classNameName={styles.textmenu}>Invite</Link>
									<Link to="/" classNameName={styles.textmenu}>Discord</Link>
									<Link to="/" classNameName={styles.textmenu}>Reports </Link>
									<div>
										<button classNameName={styles.login}>Login</button>
									</div>

								</div>
							</div>
						</div>
						<div classNameName="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								classNameName={styles.hamburger}
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span classNameName="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										classNameName="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										classNameName="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div classNameName="md:hidden" id="mobile-menu">
							<div ref={ref} classNameName="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<Link to="/" classNameName={styles.textmenu}>Docs</Link>
								<Link to="/" classNameName={styles.textmenu}>Premium</Link>
								<Link to="/" classNameName={styles.textmenu}>Invite</Link>
								<Link to="/" classNameName={styles.textmenu}>Discord</Link>
								<Link to="/" classNameName={styles.textmenu}>Reports </Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}
