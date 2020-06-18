import React from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Nav from "./components/Nav/Nav";
import Alert from "./components/Alerts/Alert";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    myscore:0,
    highscore:0,
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleFriends(this.state.friends)});
  };
  
  resetFriend = friendData => {
    const resetFriend = friendData.map(friends => ({...friends, clicked: false}));
    return this.shuffleFriends(resetFriend);
  };

  shuffleFriends = friends => {
    let i = friends.length -1; 
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  }

  handleClick = id => {
    let correctGuess = false;
    const newClick = this.state.friends.map(friends => {
      const newFriend = { ...friends };
      if (newFriend.id === id) {
        if (!newFriend.clicked) {
          newFriend.clicked = true;
          correctGuess = true;
        }
      }
      return newFriend;
    });
    correctGuess
      ? this.handleCorrect(newClick)
      : this.handleIncorrect(newClick);
  };

  handleCorrect = newFriendData => {
    console.log("Correct Click");
    const { highscore, myscore } = this.state;
    const myNewScore = myscore + 1;
    const newhighscore = Math.max(myNewScore, highscore);

    this.setState({
        friends: this.resetFriend(newFriendData),
        myscore: myNewScore,
        highscore: newhighscore
    });
  };

  handleIncorrect = friendData => {
    console.log("Incorrect click");
      this.setState({
          friends: this.resetFriend(friendData),
          myscore: 0
      });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

    <div className="container fluid">
     <Title>INCONCEIVABLE</Title>
      <Nav>      
        <p><span > Princess Bride Clicky Game!&nbsp;</span></p>
        <p><span >Score: {this.state.myscore}&nbsp;</span>{"       "}&nbsp;
        <span >HighScore: {this.state.highscore}&nbsp;</span> 
        </p>
        <Alert>Message Here</Alert>
      </Nav>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div> 
    );
  }
}

export default App;
