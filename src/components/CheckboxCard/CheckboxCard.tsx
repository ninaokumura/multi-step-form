import { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import checkIcon from "../../assets/icon-checkmark.svg";

type Props = {
  checked: boolean;
  value?: string;
  id?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  description: string;
  price: string;
  active: boolean;
};

const VARIANTS = {
  active: css`
    outline: 1px solid ${({ theme }) => theme.colors["purplish-blue"]};
    transition: outline 0.1s linear;
    background-color: ${({ theme }) => theme.colors.alabaster};
  `,
};

const Wrapper = styled.div<{
  active?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  padding: 20px;
  padding-left: 0;
  border-radius: 10px;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.active ? VARIANTS.active : null)}

  :hover {
    ${VARIANTS.active}
  }
`;

const InputCheckbox = styled.input<{
  checked?: boolean;
}>`
  opacity: 0;
`;

const CustomCheckbox = styled.div<{
  checked?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  background-color: ${(props) =>
    props.checked ? "hsl(243, 100%, 62%)" : "white"};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const CardTitle = styled.h5`
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const CardDescription = styled.p`
  font-size: 13px;
  padding-top: 4px;
  color: ${({ theme }) => theme.colors["cool-gray"]};
`;

const Price = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors["purplish-blue"]};
`;

const Icon = styled.img<{
  checked?: boolean;
}>`
  color: ${(props) => (props.checked ? "white" : "hidden")};
`;

const CheckboxCard = (props: Props) => {
  return (
    <Wrapper active={props.active}>
      <Label>
        <InputCheckbox
          type="checkbox"
          value={props.value}
          id={props.id}
          onChange={props.onChange}
        />

        <CustomCheckbox checked={props.checked}>
          <Icon src={checkIcon} alt="check icon" checked={props.checked} />
        </CustomCheckbox>

        <div>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </div>
      </Label>
      <div>
        <Price>{props.price}</Price>
      </div>
    </Wrapper>
  );
};

export default CheckboxCard;
