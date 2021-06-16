import React, { ReactElement } from 'react';
import * as Constants from '../../constants';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

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

const FullField = styled(Field)`
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
  font-size: 1.8rem;
  font-family: newsreader;
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  display: block;
  margin: auto;
  text-align: center;
  -webkit-text-stroke: 0.2px red;
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
  maxWidth,
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
        maxWidth={maxWidth}
        fontSize={fontSize}
        border={border}
        component={as}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <StyledError>{msg}</StyledError>}
      ></ErrorMessage>
    </div>
  );
}
