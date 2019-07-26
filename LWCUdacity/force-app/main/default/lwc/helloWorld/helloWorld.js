import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
	@track dynamicGreeting = 'World';
	@track displayDiv = false;
	@track cityList = [ 'Sydney', 'Dublin', 'London', 'Berlin' ];

	greetingChangeHandler(event) {
		this.dynamicGreeting = event.target.value;
	}
	showDivHandler(event) {
		this.displayDiv = event.target.checked;
	}
}
