Router.configure({
	layoutTemplate: 'layout'
})

Router.route('/', function () {
	this.render('wall');
})

Router.route('/form', function () {
	this.render('messageForm')
})
     