const inputConstraints = {
	email: {
    presence: {
    	allowEmpty: false,
    	message: "Field is required"
    }
	}
};

const formValidate = () => {
	const demoForm = document.getElementById('demo-form');
	demoForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const inputData = {
			firstName: event.target.firstName.value.trim(),
			lastName: event.target.lastName.value.trim(),
			email: event.target.email.value.trim()
		};
		const errorReport = validate(inputData, inputConstraints);
		if(errorReport) {
			console.log(errorReport);
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	formValidate();
});

