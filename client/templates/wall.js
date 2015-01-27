Template.wall.helpers({
	messages: function() {
		return Messages.find({},{sort: {created_date: -1}})
	}
})