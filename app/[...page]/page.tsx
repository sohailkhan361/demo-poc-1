import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

// Locales to test:
// const myLocale = ""
// const myLocale = "es-ES"
// const myLocale = "en-US"
// const myLocale = "fr-FR"
// const myLocale = "it-IT"
// const myLocale = "pl-PL"
const myLocale = "de-DE"

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
        locale: myLocale,
      },
      options: {
        locale: myLocale,  // For a block level localization
      },
      cachebust: true,
      cacheSeconds: 10
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}