"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "headerText",
      type: "string",
    },
  ],
});
