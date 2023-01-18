import React from "react";
import styled from "styled-components";
import confirmationIcon from "../../assets/icon-thank-you.svg";

type Props = {};

const IconWrapper = styled.div`
  display: flex;
`;

const ConfirmationIcon = (props: Props) => {
  return (
    <IconWrapper>
      <img src={confirmationIcon} alt="confirmation icon" />
    </IconWrapper>
  );
};

export default ConfirmationIcon;
