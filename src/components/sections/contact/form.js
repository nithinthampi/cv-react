import React, {useState} from "react";
import Zoom from "react-reveal/Zoom";
import styled from "@emotion/styled";


const InputFieldWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 12px;
  label {
    left: 0;
    font-weight: normal;
    top: ${({ active }) => {
      return active ? "-1rem" : "0.5rem";
    }};
    position: absolute;
    font-size: 1rem;
    transition: all 0.5s;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gainsboro;
    border-radius: 0;
    outline: none;
    height: 2rem;
    width: 100%;
    font-size: 1rem;
    margin: 6px 0 6px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    transition: all 0.5s;
    :focus {
      border-bottom: 1px solid #1976d2;
      box-shadow: 0 1px 0 0 #1976d2;
    }
    :focus + label {
      color: #1976d2;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #06a763;
  width: 115px;
  color: #fff;
  border-radius: 2px;
  margin-top: 7px;
  :hover {
    background: #05985a;
  }
`;

const TextArea = styled.textarea`
  overflow-y: hidden;
  resize: none;
  min-height: 5rem;
`;

const StyledTextArea = ({ id, name, label }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  return (
    <InputFieldWrapper active={active}>
      <TextArea
        id={id}
        className="materialize-textarea"
        name={name}
        onChange={e => {
          setActive(true);
          setValue(e.target.value);
        }}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          if (!value) {
            setActive(false);
          }
        }}
        required
      />
      <label htmlFor={name}>{label}</label>
    </InputFieldWrapper>
  );
};

const FormInput = ({ id, name, type, label }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  return (
    <InputFieldWrapper active={active}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={e => {
          setActive(true);
          setValue(e.target.value);
        }}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          if (!value) {
            setActive(false);
          }
        }}
        required
      />
      <label htmlFor={name}>{label}</label>
    </InputFieldWrapper>
  );
};



export default () => {
    return (
      <form id="contact-form" name="c-form">
        <Zoom>
          <FormInput
            name="first_name"
            id="first_name"
            type="text"
            label="Name"
          />
        </Zoom>
        <Zoom>
          <FormInput
            name="subject"
            id="subject"
            type="text"
            label="Subject"
          />
        </Zoom>
        <Zoom>
          <FormInput name="email" id="email" type="text" label="email" />
        </Zoom>

        <Zoom>
          <StyledTextArea name="message" id="message" label="message" />
        </Zoom>
        <Zoom>
          <div className="contact-send">
            <SubmitButton
              id="submit"
              name="contactSubmit"
              type="submit"
              value="Submit"
              className="btn"
            >
              Send
            </SubmitButton>
          </div>
        </Zoom>
      </form>
    );
}