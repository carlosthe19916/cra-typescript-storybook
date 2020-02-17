import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MyComponent } from "./MyComponent";

storiesOf("Select | Catalog", module).add("Default", () => <MyComponent />);
