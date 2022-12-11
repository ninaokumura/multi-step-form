import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "stories/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
};

export const With_ErrorMessage = Template.bind({});
With_ErrorMessage.args = {
  label: "Name",
  errorMessage: "Field required",
};
