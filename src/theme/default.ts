// src/theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Extracted directly from your CSS :root variables
    colorPrimary: '#5B8C51',     // --theme-color
    colorInfo: '#5B8C51',
    colorWarning: '#EDDD5E',     // --theme-color-2
    colorTextBase: '#5C6672',    // --text
    colorTextHeading: '#0A2803', // --header
    colorBgBase: '#ffffff',      // --body
    colorBorder: '#CAD2D2',      // --border
    
    // Global Typography
    fontFamily: '"Nunito", sans-serif',
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 24,
    
    // Container metrics
    borderRadius: 8,
    wireframe: false,
  },
  components: {
    Button: {
      controlHeightLG: 58, // Matches your custom .theme-btn height
      borderRadiusLG: 82,  // Matches your rounded pill buttons
      fontWeight: 800,
    },
    Card: {
      colorBgContainer: '#EDF2EC', // --bg
      borderRadiusLG: 12,
    }
  },
};

export default theme;