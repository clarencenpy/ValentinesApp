Template.messageForm.events({
	'submit .nl-form': function(e) {
		e.preventDefault();
		var message = {
			sender: $(e.target).find('[name=sender]').val() == "" ? "anonymous" : $(e.target).find('[name=sender]').val(),
			receiver: $(e.target).find('[name=receiver]').val(),
			type: $(e.target).find('[name=type]').val(),
			message: $(e.target).find('[name=message]').val() == "" ? "I love you" : $(e.target).find('[name=message]').val()
		}
		// console.log(message)
		Messages.insert(message) 

		Router.go('/')
	}
})