import './register.scss';

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="right">
					<h1>Hello World.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis molestiae perferendis
						maiores magnam vel tempore vitae. Totam aspernatur aut ratione eveniet quasi ipsa voluptatem
						debitis autem quae! Eaque, vero!
					</p>
					<span>Don't you have an account?</span>
					<button>Register</button>
				</div>
				<div className="left">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
