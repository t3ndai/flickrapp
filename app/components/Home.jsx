import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';
import React from 'react';
import View from 'reapp-ui/views/View';

class Home extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="flickrapp">
          <p>Hello, World!</p>

          <Button onTap={() => this.router().transitionTo('sub')}>
            Go to sub view
          </Button>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);



export default React.createClass({
  render() {

    var {photos } = this.state;

    return (
      <View title = "Flicker Search" styles{{ inner: {padding: 20} }}>
      <p>Hello World</p>
      </View>
    );
  }
});



/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/