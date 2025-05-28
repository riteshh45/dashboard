import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  theme: localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      // Update localStorage and document class
      localStorage.setItem('theme', state.theme);
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
    },
  },
});

export const { toggleSidebar, toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
