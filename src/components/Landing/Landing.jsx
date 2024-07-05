import React from "react";
import {
  Consent,
  ConsentContainer,
  Email,
  EmailContainer,
  FirstNameDiv,
  Form,
  GeneralEnquiry,
  LandingContainer,
  LandingSection,
  LastNameDiv,
  Message,
  MessageContainer,
  NameContainer,
  Query,
  QueryContainer,
  Support,
} from "./componets";

export const Landing = () => {
  return (
    <LandingSection>
      <LandingContainer>
        <Form action="">
          <h2>CONTACT FORM</h2>
          <NameContainer>
            <FirstNameDiv>
              <label htmlFor="">First Name *</label>
              <input type="text" />
            </FirstNameDiv>
            <LastNameDiv>
              <label htmlFor="">Last Name *</label>
              <input type="text" />
            </LastNameDiv>
          </NameContainer>
          <EmailContainer>
            <Email>
              <label htmlFor="">E-mail Address *</label>
              <input type="text" />
            </Email>
          </EmailContainer>
          <QueryContainer>
            <label htmlFor="">Query Type *</label>
            <Query>
              <GeneralEnquiry>
                <input type="checkbox" name="generalQuery" id="" />
                <label htmlFor="">General Enquiry</label>
              </GeneralEnquiry>
              <Support>
                <input type="checkbox" name="supportRequest" id="" />
                <label htmlFor="">Support Request</label>
              </Support>
            </Query>
          </QueryContainer>
          <MessageContainer>
            <Message>
              <label htmlFor="">Message *</label>
              <textarea name="" id="" cols="26" rows="6"></textarea>
            </Message>
          </MessageContainer>
          <ConsentContainer>
            <Consent>
              <input type="checkbox" name="" id="" />
              <span>I consent to being informed by the team *</span>
            </Consent>
          </ConsentContainer>
        </Form>
      </LandingContainer>
    </LandingSection>
  );
};
