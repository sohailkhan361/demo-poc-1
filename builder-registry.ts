"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import ProductView from "./components/ProductView/ProdusctView";

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

Builder.registerComponent(ProductView, {
  name: "ProductView",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
    },
    {
      name: "cover",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "rank",
      type: "number",
      required: true,
    },
    {
      name: "releaseDate",
      type: "string",
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
