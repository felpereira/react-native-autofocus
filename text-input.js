import React from 'react';
import { TextInput as Input } from 'react-native';

const TextInput = ({ onSubmitEditing, onEnter, inputRef, ...props }) => (
  <Input
    ref={ref => inputRef(ref)}
    onSubmitEditing={() => {
      if (onEnter) onEnter();
      if (onSubmitEditing) onSubmitEditing();
    }}
    {...props}
  />
);

export default TextInput;
