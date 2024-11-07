import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }
  a{
    color: black;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  :root {
  --primary: #c92071;
  --secondary: #b5b6f2;
  --tertiary: #991956;
  --error: #ee4266;
  --success: #52ca76;
  --warning: #f6aa1c;
  --dark-gray: #1f1f1f;
  --dark-gray-2: #474747;
  --dark-gray-3: #666666;
  --light-gray: #8f8f8f;
  --light-gray-2: #cccccc;
  --light-gray-3: #f5f5f5;
  --cor-background: #F9F8FE;
  --white: #ffffff;
  }
  .primary {
  color: #c92071;
  }
  .secondary {
    color: #b5b6f2;
  }
  .tertiary {
    color: #991956;
  }
  .error {
    color: #ee4266;
  }
  .success {
    color: #52ca76;
  }
  .warning {
    color: #f6aa1c;
  }

  .dark-gray {
    color: #1f1f1f;
  }

  .dark-gray-2 {
    color: #474747;
  }

  .dark-gray-3 {
    color: #666666;
  }

  .light-gray {
    color: #8f8f8f;
  }

  .light-gray-2 {
    color: #cccccc;
  }

  .light-gray-3 {
    color: #f5f5f5;
  }

  .cor-background{
    background-color: #F9F8FE;
  }

  .white {
    color: #ffffff;
  }
  .title-large {
  font: 400 4rem/4.125rem "Inter", sans-serif;
  }

  .title-medium {
    font: 400 3rem/3.125rem "Inter", sans-serif;
  }

  .title-small {
    font: 400 2rem/2.25rem "Inter", sans-serif;
  }

  .title-x-small {
    font: 400 1.75rem/2.25rem "Inter", sans-serif;
  }

  .title-large-bold {
    font: 700 4rem/4.125rem "Inter", sans-serif;
  }

  .title-medium-bold {
    font: 700 3rem/3.125rem "Inter", sans-serif;
  }

  .title-small-bold {
    font: 700 2rem/2.25rem "Inter", sans-serif;
  }

  .title-x-small-bold {
    font: 700 1.75rem/2.25rem "Inter", sans-serif;
  }

  .text-large {
    font: 400 1.5rem/2.375rem "Inter", sans-serif;
  }

  .text-medium {
    font: 400 1.125rem/2.125rem "Inter", sans-serif;
  }

  .text-small {
    font: 400 1.125rem/1.75rem "Inter", sans-serif;
  }

  .text-x-small {
    font: 500 0.875rem/1.375rem "Inter", sans-serif;
  }

  .text-tinny {
    font: 500 0.75rem/1.125rem "Inter", sans-serif;
  }

  .text-large-bold {
    font: 700 1.5rem/2.375rem "Inter", sans-serif;
  }

  .text-medium-bold {
    font: 700 1.125rem/2.125rem "Inter", sans-serif;
  }

  .text-small-bold {
    font: 700 1.125rem/1.75rem "Inter", sans-serif;
  }

  .text-x-small-bold {
    font: 700 0.875rem/1.375rem "Inter", sans-serif;
  }

  .text-tinny-bold {
    font: 700 0.75rem/1.125rem "Inter", sans-serif;
  }

`;
