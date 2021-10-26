import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface NoScrollKeyboardAvoidProps {
  children?: React.ReactNode;
  topColor?: string;
  bottomColor?: string;
}

export const NoScrollKeyboardAvoid: React.FC<NoScrollKeyboardAvoidProps> = ({
  children,
  topColor,
  bottomColor,
}) => {
  return (
    <KeyboardAvoidingViewContainer
      nativeID="NoScrollKeyboardAvoid"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView
        style={{ flex: 0, backgroundColor: topColor || 'transparent' }}
      />
      <SafeAreaViewContainer bottomColor={bottomColor}>
        {children}
      </SafeAreaViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};

const KeyboardAvoidingViewContainer = styled(KeyboardAvoidingView)`
  height: 100%;
`;

const SafeAreaViewContainer = styled(SafeAreaView)<{ bottomColor?: string }>`
  height: 100%;
  flex: 1;
  background-color: ${({ bottomColor }) =>
    bottomColor ? bottomColor : 'transparent'};
`;
