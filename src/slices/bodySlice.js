import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cardsUrl } from '../urls';
import BackendClient from "../BackendClient";

// Fetch cards from backend
export const fetchCards = createAsyncThunk('body/fetchCards', async (_, { rejectWithValue }) => {
  try {
    const response = await BackendClient.get(`${cardsUrl()}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'An error occurred');
  }
});

export const bodySlice = createSlice({
  name: 'body',
  initialState: {
    page: 'home',
    content: [
      { name: 'continueWatching', title: 'Continue Watching', items: [] },
      { name: 'trending', title: 'Trending', items: [] },
      { name: 'recommended', title: 'Recommended', items: [] },
      { name: 'action', title: 'Action', items: [] },
    ],
    selectedCard: null,
    activeTab: 'Episodes',
    episodes: [],
    status: 'idle', // Initial status
    error: null, // To track errors
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const data = action.payload;
        console.log("pay",data);
        state.content[0].items = data;
        state.content[1].items = data;
        state.content[2].items = data;
        state.content[3].items = data;
        console.log("lol",state.content[1]);
      })
      .addCase(fetchCards.rejected, (state, action) => {
        console.log(action);
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPageContent, setSelectedCard, setActiveTab } = bodySlice.actions;
export default bodySlice.reducer;