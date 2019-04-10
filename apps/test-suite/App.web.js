'use strict';
import { createBrowserApp } from '@react-navigation/web';
import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import TestScreen from './screens/TestScreen.js';
import BlurView from './screens/BlurView';
import LinearGradient from './screens/LinearGradient';
import ImageManipulator from './screens/ImageManipulator';
import ViewShot from './screens/ViewShot';
import Font from './screens/Font';
import SVG from './screens/SVG/examples.js';

import { getTestModules } from './TestUtils';

export default createBrowserApp(
  createSwitchNavigator({
    // We don't need the initial URL on web.
    App: { screen: () => <TestScreen selected={getTestModules()} /> },
    LinearGradient,
    BlurView,
    ImageManipulator,
    ViewShot,
    Font,
    ...SVG,
  })
);
