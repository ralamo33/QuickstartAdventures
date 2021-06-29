import React, { ReactElement } from 'react';
import * as Constants from '../../constants';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

interface Props {
  name: string;
  as: string;
  label?: string;
  border?: string;
  minwidth?: string;
  maxwidth?: string;
  placeholder?: string;
  fontSize?: string;
}

const FullField = styled(Field)`
  && {
    display: block;
    border-radius: 5px;
    min-width: ${(props: Props) => props.minwidth};
    max-width: ${(props: Props) => props.maxwidth};
    border: ${(props: Props) => props.border};
    font-size: ${(props: Props) => props.fontSize};
    justify-content: center;
    margin: auto;
    margin-bottom: 15px;
  }
  &:active {
    outline: 2px solid #33ff77;
  }
  &:focus {
    outline: 2px solid #33ff77;
  }
`;

FullField.defaultProps = {
  border: `2.2px solid ${Constants.BLUE}`,
  minwidth: '100%',
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
  -webkit-text-stroke: 0.3px black;
`;

const Label = styled.p`
  text-align: center;
  font-family: belmont;
`;

export default function TextField({
  minwidth,
  name,
  placeholder,
  fontSize,
  border,
  label,
  maxwidth,
  as,
}: Props): ReactElement {
  return (
    <div>
      <Label>{label}</Label>
      <FullField
        id={name}
        name={name}
        placeholder={placeholder}
        minwidth={minwidth}
        maxwidth={maxwidth}
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
