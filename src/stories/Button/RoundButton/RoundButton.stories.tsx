import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundButton from "./RoundButton";

export default {
  title: "stories/Button/RoundButton",
  component: RoundButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <div
    style={{
      backgroundColor: "blue",
      padding: "10px",
    }}
  >
    <RoundButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "1",
};
