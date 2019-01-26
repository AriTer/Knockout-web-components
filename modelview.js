ko.components.register('name-editor', {
    template: "<p> First name: <input placeholder= 'Name' data-bind='value: firstName' /></p><p> Last name: <input placeholder= 'Surname'data-bind='value: lastName' /></p><h2> Hello <span data-bind='text: fullName()' ></span>!</h2>",
    viewModel: function (first, last) {
        this.firstName = ko.observable(first='');
        this.lastName = ko.observable(last = '');
        this.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
});

ko.components.register("friend-list", {
  template:
    "<p> Friends name: <input placeholder= 'Friends Name' data-bind='value: friend' /></p><h3>Add some friends to the list below...</h3><button data-bind='click: addfriend'>Add friend</button><ul data-bind='foreach: friends'><li data-bind='text:  friend'></li><span id='del' class='fa fa-minus-circle' data-bind='click: removeF, value:friend'>  Delete</span></ul><div class='log'data-bind='text:'></div>",
  viewModel: function() {
    this.friends = ko.observableArray((friends=[]));
    friend='';
    addfriend = () =>this.friends.push((friend)); 
    removeF = (value) => this.friends.remove(value);
  }
});

ko.applyBindings(); // This makes Knockout get to work