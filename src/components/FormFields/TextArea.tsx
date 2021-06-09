import React, { ReactElement } from 'react';
import * as Constants from '../../constants';
import styled, { Keyframes } from 'styled-components';
import { ErrorMessage, Field } from 'formik';

// This is everything the text field is except its an area instead

interface Props {
  name: string;
  as: string;
  label?: string;
  border?: string;
  minWidth?: string;
  maxWidth?: string;
  placeholder?: string;
  fontSize?: string;
}

const FieldType = <Field as="textarea"></Field>;

const FullField = styled(FieldType)`
  && {
    display: block;
    border-radius: 5px;
    min-width: ${(props: Props) => props.minWidth};
    max-width: ${(props: Props) => props.maxWidth};
    border: ${(props: Props) => props.border};
    font-size: ${(props: Props) => props.fontSize};
    justify-content: center;
    margin: auto;
    margin-bottom: 15px;
  }

  &:active {
    outline: 2px solid ${Constants.OLD_BLUE};
  }

  &:focus {
    outline: 2px solid ${Constants.OLD_BLUE};
  }
`;

FullField.defaultProps = {
  border: `2.2px solid ${Constants.BLUE}`,
  minWidth: '100%',
};

const StyledError = styled.p`
  color: red;
  font-family: newsreader;
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  display: block;
  margin: auto;
  text-align: center;
`;

const Label = styled.p`
  text-align: center;
  font-family: belmont;
`;

export default function TextField({
  minWidth,
  name,
  placeholder,
  fontSize,
  border,
  label,
  as,
}: Props): ReactElement {
  return (
    <div>
      <Label>{label}</Label>
      <FullField
        id={name}
        name={name}
        placeholder={placeholder}
        minWidth={minWidth}
        fontSize={fontSize}
        border={border}
      />
      <Field as="input"></Field>
      <ErrorMessage
        name={name}
        render={(msg) => <StyledError>{msg}</StyledError>}
      ></ErrorMessage>
    </div>
  );
}
