import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Primary } from "../Button.stories";
import Button from "./Button";

export default {
  title: "stories/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "sm",
  children: "Go Back",
};

export const NextButton = Template.bind({});
NextButton.args = {
  variant: "secondary",
  size: "md",
  children: "Next Step",
};

export const RoundButton = Template.bind({});
RoundButton.args = {
  shape: "round",
  children: "1",
};
