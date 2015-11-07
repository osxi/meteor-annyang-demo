if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter() {
      return Session.get('counter');
    }
  });

  Template.hello.onRendered(() => {
    let commands = {
      hello() {
        console.log('Hello world!');
      },

      click() {
        Session.set('counter', Session.get('counter') + 1);
      }
    };

    annyang.addCommands(commands);

    annyang.start();
  });
}
