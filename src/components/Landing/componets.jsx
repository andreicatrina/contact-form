import { styled } from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #c7f9cc;
  display: flex;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 200px auto;
  padding: 24px 32px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 12px;
  background-color: #fff;
  padding: 24px;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
`;

export const FirstNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  input {
    border: 1px solid #8a8989;
    width: 100%;
    max-width: 280px;
    height: 32px;
    border-radius: 6px;
  }
`;

export const LastNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  input {
    border: 1px solid #8a8989;
    width: 100%;
    max-width: 280px;
    height: 32px;
    border-radius: 6px;
  }
`;

export const EmailContainer = styled.div``;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    border: 1px solid #8a8989;
    width: 100%;
    height: 32px;
    border-radius: 6px;
  }
`;

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Query = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const GeneralEnquiry = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #8a8989;
  padding: 4px 8px;
  border-radius: 6px;
  width: 100%;
  height: 40px;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const Support = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #8a8989;
  padding: 4px 8px;
  border-radius: 6px;
  width: 100%;
  height: 40px;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const MessageContainer = styled.div``;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  textarea {
    width: 100%;
    max-width: 552px;
  }
`;

export const ConsentContainer = styled.div``;

export const Consent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;
