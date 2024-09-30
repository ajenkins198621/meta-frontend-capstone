const Button = ({ onClick, children, asLink = false, href = "" }) => {
	if (asLink) {
		return (
			<a className="button" href={href}>
				{children}
			</a>
		);
	}
	return <button onClick={onClick}>{children}</button>;
};

export default Button;
