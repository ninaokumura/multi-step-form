import { ComponentMeta, ComponentStory } from "@storybook/react";
import NextButton from "./NextButton";

export default {
  title: "stories/Button/NextButton",
  component: NextButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NextButton>;

const Template: ComponentStory<typeof NextButton> = (args) => (
  <NextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Next step",
};
