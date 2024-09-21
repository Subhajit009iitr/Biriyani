import { createSlice } from '@reduxjs/toolkit';


const dummyPosts=[];
// Initial state for the community slice
const initialState = {
  page: "community",
  nextId: 3,
  polls: [
    // {
    //   id: 3,
    //   user: "Subhajit Biswas",
    //   animeName: "Naruto",
    //   Date: "",
    //   Theories: [],
    // }

  ],
  posts: [
    {
      id: 1,
      user: "Subhajit Biswas",
      postDate: "4th October, 2023",
      title: "Post Title 1",
      description: "This is a description of post 1.",
      image: null,
    },
    {
      id: 2,
      user: "John Doe",
      postDate: "5th October, 2023",
      title: "Post Title 2",
      description: "This is a description of post 2.",
      image: null,
    },
  ],
  userTokenBalance: 100,
};

// Community slice
export const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    // Action to add a new poll
    addPoll: (state, action) => {
      state.polls.push({
        id: action.payload.id,
        animeName: action.payload.animeName,
        season: action.payload.season,
        episode: action.payload.episode,
        options: [],
        selectedOption: null,
        staked: false, // Whether user has already staked tokens on this poll
      });
    },
    // Action to add a theory (poll option)
    addTheoryToPoll: (state, action) => {
      const { pollId, theory } = action.payload;
      const poll = state.polls.find(p => p.id === pollId);
      if (poll) {
        poll.options.push(theory);
      }
    },
    // Action to stake tokens on a poll option
    stakeTokens: (state, action) => {
      const { pollId, optionIndex } = action.payload;
      const poll = state.polls.find(p => p.id === pollId);
      if (poll && !poll.staked) {
        poll.selectedOption = optionIndex;
        poll.staked = true;
        state.userTokenBalance -= 1; // Deduct 1 token for staking
      }
    },
    // Action to add a new post
    addPost: (state, action) => {
      state.posts.push({
        id: state.posts.length + 1,
        creatorName: action.payload.creatorName,
        postDate: action.payload.postDate,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image || null,
      });
    },
    // Action to update token balance
    updateTokenBalance: (state, action) => {
      state.userTokenBalance = action.payload.balance;
    }
  },
});

// Exporting actions to be used in components
export const { addPoll, addTheoryToPoll, stakeTokens, addPost, updateTokenBalance } = communitySlice.actions;

export default communitySlice.reducer;
