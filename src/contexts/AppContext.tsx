import { useState } from "react";
import { createContainer } from "unstated-next";

export type SubscriptionType = "monthly" | "yearly";

const useAppState = () => {
  const [selectedPlan, setSelectedPlan] = useState({ title: "", price: "" });
  const [selectedAddons, setSelectedAddons] = useState<
    { title: string; price: string }[]
  >([]);
  const [subscriptionType, setSubscriptionType] =
    useState<SubscriptionType>("monthly");
  const [submitted, setSubmitted] = useState(false);

  return {
    selectedPlan,
    setSelectedPlan,
    selectedAddons,
    setSelectedAddons,
    subscriptionType,
    setSubscriptionType,
    submitted,
    setSubmitted,
  };
};

const container = createContainer(useAppState);

export const AppStateProvider = container.Provider;
export const useAppStateContainer = container.useContainer;
