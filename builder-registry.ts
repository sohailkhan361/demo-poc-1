import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductsGrid from "./components/ProductGrid/ProductGrid";
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

Builder.registerComponent(ProductsGrid, {
  name: "ProductsGrid",
  inputs: [
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          defaultValue: "Default Title",
        },
        {
          name: "description",
          type: "string",
          defaultValue: "Default Description",
        },
        {
          name: "author",
          type: "string",
          defaultValue: "Default Author",
        },
        {
          name: "salesrank",
          type: "number",
          defaultValue: 999,
        },
        {
          name: "image",
          type: "string",
          defaultValue:
            "https://podiumaudio.com/wp-content/uploads/2022/09/Book-Cover-default-768x768.jpeg",
        },
        {
          name: "releaseDate",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: 'Navbar',
  inputs: [
    {
      name: 'links',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string',
        },
      ],
    },
  ],
});
