import { createSlice } from '@reduxjs/toolkit';
import image5 from '../assets/pic5.png';
import image6 from '../assets/pic6.png';

const cards = [
    { id:0, title: 'Slime', imageURL: image5, date: '2024-09-02', time: '10:00 AM', rating: 4.5 },
    { id:1, title: 'JJK', imageURL: image6, date: '2024-09-03', time: '11:00 AM', rating: 4.0 },
    { id:2, title: 'Card 3', imageURL: image5, date: '2024-09-04', time: '12:00 PM', rating: 4.2 },
    { id:3, title: 'Card 4', imageURL: image6, date: '2024-09-05', time: '01:00 PM', rating: 4.7 },
    { id:4, title: 'Card 5', imageURL: image5, date: '2024-09-06', time: '02:00 PM', rating: 4.9 },
    { id:5, title: 'Card 6', imageURL: image6, date: '2024-09-02', time: '10:00 AM', rating: 4.5 },
    { id:6, title: 'Card 7', imageURL: image5, date: '2024-09-03', time: '11:00 AM', rating: 4.0 },
    { id:7, title: 'Card 8', imageURL: image6, date: '2024-09-04', time: '12:00 PM', rating: 4.2 },
    { id:8, title: 'Card 9', imageURL: image5, date: '2024-09-05', time: '01:00 PM', rating: 4.7 },
    { id:9, title: 'Card 10', imageURL: image6, date: '2024-09-06', time: '02:00 PM', rating: 4.9 },
];

const episodes = [
    [
      { title: 'Episode 1', description: 'This is the first episode Slime', imageURL: image5 },
      { title: 'Episode 2', description: 'This is the second episode Slime', imageURL: image5 },
    ],
    [
      { title: 'Episode 1', description: 'This is the first episode JJK', imageURL: image6 },
      { title: 'Episode 2', description: 'This is the second episode JJK', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
      { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
      { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
      { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
      { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
        { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
        { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
        { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
    [
        { title: 'Episode 1', description: 'This is the first episode', imageURL: image6 },
        { title: 'Episode 2', description: 'This is the second episode', imageURL: image6 },
    ],
];

  export const bodySlice = createSlice({
    name: 'body',
    initialState: {
      page: 'home',
      content: [
        { name: 'continueWatching', title: 'Continue Watching', items: cards },
        { name: 'trending', title: 'Trending', items: cards },
        { name: 'recommended', title: 'Recommended', items: cards },
        { name: 'action', title: 'Action', items: cards },
      ],
      selectedCard: null,
      activeTab: 'Episodes',
      episodes,  
    },
    reducers: {
      setPageContent: (state, action) => {
        state.page = action.payload;
      },
      setSelectedCard: (state, action) => {
        console.log('Setting selected card:', action.payload);
        state.selectedCard = action.payload;
        state.page = 'details';
      },
      setActiveTab: (state, action) => {
        state.activeTab = action.payload;
      },
    },
  });
  
  export const { setPageContent, setSelectedCard, setActiveTab } = bodySlice.actions;
  export default bodySlice.reducer;