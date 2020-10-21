import React from "react";

function Counter() {
	const [count, setCount] = React.useState(0);

	const handleIncrement = () => {
		// We always use the setState method to update a component's state
		setCount(count + 1);
	};

	return (
		<div className="card text-center">
			<div className="card-header bg-primary text-white">
				Click Counter!
			</div>
			<div className="card-body">
				<p className="card-text">Click Count: {count}</p>
				<button className="btn btn-primary" onClick={handleIncrement}>
					Increment
				</button>
			</div>
		</div>
	);
}

export default Counter;
