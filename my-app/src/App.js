import React from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Nav from "./components/Nav/Nav";
import Alert from "./components/Alerts/Alert";
import Quote from "./components/Quote/Quote";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    myscore:0,
    highscore:0,
    clicked:[],
    quote:"",
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleFriends(this.state.friends)});
  };
 
  shuffleFriends = shuffleFriendsArray => {
    let i = shuffleFriendsArray.length -1; 
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffleFriendsArray[i];
      shuffleFriendsArray[i] = shuffleFriendsArray[j];
      shuffleFriendsArray[j] = temp;
      i--;
    }
    return shuffleFriendsArray;
  }

  resetFriend = resetFriendArray => {
    const resetFriend = resetFriendArray.map(friends => ({...friends, clicked: false}));
    return this.shuffleFriends(resetFriend);
  };

  handleCorrect = correctClick => {
    console.log("Correct Click" + this.state.message + this.state.quote);
    const { highscore, myscore } = this.state;
    const myNewScore = myscore + 1;
    const newHighScore = Math.max(myNewScore, highscore);

    this.setState({
        friends: this.shuffleFriends(correctClick),
        myscore: myNewScore,
        highscore: newHighScore
    });
  };

  handleIncorrect = incorrectClick => {
    console.log("Sorry, you already clicked that one!");
      this.setState({
          friends: this.resetFriend(incorrectClick),
          myscore: 0,
      });
  };

  handleClick = id => {
    let correct = false;
    const friendClicked = this.state.friends.map(friends => {
      const newFriendArray = { ...friends };
      
        if (newFriendArray.id === id) {
            if (!newFriendArray.clicked) {
              newFriendArray.clicked = true;
              correct = true;
            }
          }
          return newFriendArray;
        });
        correct
          ? this.handleCorrect(friendClicked)
          : this.handleIncorrect(friendClicked);
      };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

    <div className="container fluid">
     <Title fluid>INCONCEIVABLE!</Title>
      <Nav>      
        <p><span > Princess Bride Clicky Game!&nbsp;</span></p>
        <p><span >MyScore: {this.state.myscore}&nbsp;</span>{"       "}&nbsp;
        <span >HighScore: {this.state.highscore}&nbsp;</span> 
        </p>
      </Nav>
      <Alert className="alert"></Alert>
      <Quote className="quote" handleClick={this.handleClick}></Quote>
      <Wrapper fluid>
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
