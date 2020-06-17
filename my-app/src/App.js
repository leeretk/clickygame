import React, { Component } from "react";
import ReactDom from "react-dom";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    myScore:0,
    highScore:0,
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleFriends(this.state.friends)});
  };
  
  reShuffle = friendData => {
    const reShuffle = friendData.map(friends => ({...friends, clicked: false}));
    return this.shuffleFriends(reShuffle);
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
    let guessCorrect = false;

    const newClick = this.state.friends.map(friends => {
       const newFriend = { ...friends };
      if (newFriend.id === id) {
        if (!newFriend.clicked) {  //newFreind ID not clicked. 
          newFriend.clicked = true;
          guessCorrect = true;
        }
      }
      return newFriend;
    });
  };

  handleCorrect = newFriendData => {
    console.log("Correct Click");
    const { topScore, count } = this.state;
    const newScore = count + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
        friends: this.shuffleFriends(newFriendData),
        count: newScore,
        topScore: newTopScore
    });
};

 handleIncorrect = friendData => {
  console.log("Incorrect click");
    this.setState({
        friends: this.resetData(friendData),
        count: 0
    });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div>
    <nav myScore={this.state.count} highScore={this.state.highScore} />

      <Wrapper>       
        <Title>Friends List</Title>      
        {/* <Score />; */}
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
