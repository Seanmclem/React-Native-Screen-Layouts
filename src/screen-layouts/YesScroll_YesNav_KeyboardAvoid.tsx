import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
// import { View } from "../components/Themed";
import { useHeaderHeight } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

interface YesScrollYesNavKeyboardAvoidProps {
  children?: React.ReactNode;
}

export const YesScrollYesNavKeyboardAvoid: React.FC<YesScrollYesNavKeyboardAvoidProps> = ({
  children,
}) => {
  const headerHeight = useHeaderHeight();
  const KEYBOARD_VERTICAL_OFFSET =
    headerHeight + (StatusBar.currentHeight || 0);

  return (
    <KeyboardAvoidingViewContainer
      nativeID="NoScrollKeyboardAvoid"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
    >
      <SafeAreaViewContainer>
        <ScrollViewContainer>{children}</ScrollViewContainer>
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};

const KeyboardAvoidingViewContainer = styled(KeyboardAvoidingView)`
  height: 100%;
`;

const SafeAreaViewContainer = styled(SafeAreaView)`
  height: 100%;
`;

const ScrollViewContainer = styled(ScrollView)`
  /* height: 100%; */
  background-color: green;
`;
