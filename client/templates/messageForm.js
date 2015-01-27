Template.messageForm.events({
	'submit .nl-form': function(e) {
		e.preventDefault();
		var message = {
			gender: $(e.target).find('[name=gender]').val(),
			sender: $(e.target).find('[name=sender]').val() == "" ? "anonymous" : $(e.target).find('[name=sender]').val(),
			recipient: $(e.target).find('[name=recipient]').val() == "" ? "everyone" : $(e.target).find('[name=recipient]').val(),
			type: $(e.target).find('[name=type]').val(),
			message: $(e.target).find('[name=message]').val() == "" ? "I love you" : $(e.target).find('[name=message]').val(),
			created_date: new Date()
		}
		Messages.insert(message)

		Router.go('/')
	}
})