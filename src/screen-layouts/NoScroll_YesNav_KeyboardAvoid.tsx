import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
// import { View } from "../components/Themed";
import { useHeaderHeight } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

interface NoScrollYesNavKeyboardAvoidProps {
  children?: React.ReactNode;
}

export const NoScrollYesNavKeyboardAvoid: React.FC<NoScrollYesNavKeyboardAvoidProps> = ({
  children,
}) => {
  const headerHeight = useHeaderHeight();
  const KEYBOARD_VERTICAL_OFFSET =
    headerHeight + (StatusBar.currentHeight || 0);

  return (
    <KeyboardAvoidingViewContainer
      nativeID="NoScrollKeyboardAvoid"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
    >
      <SafeAreaViewContainer>{children}</SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};

const KeyboardAvoidingViewContainer = styled(KeyboardAvoidingView)`
  height: 100%;
`;

const SafeAreaViewContainer = styled(SafeAreaView)`
  height: 100%;
`;
