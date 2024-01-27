import { PlopTypes } from "@turbo/gen";
import { exec } from "child_process";
import { resolve } from "path";
import { promisify } from "util";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setActionType("gen:cti", async () => {
    await promisify(exec)("bun run gen:cti", {
      cwd: `${resolve(__dirname, "../../")}`,
    }).catch((e) => {
      console.log(e);
    });

    return "Indexes for UI generated";
  });

  plop.setGenerator("Api: endpoint", {
    description: "Api endpoint in api and frontend",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Type?",
        choices: ["mutation", "query"],
      },
      {
        type: "input",
        name: "namespace",
        message: "Namespace?",
      },
      {
        type: "input",
        name: "name",
        message: "Name?",
      },
      {
        type: "input",
        name: "frontendRootDir",
        message: "Frontend root dir",
        default: "apps/client",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{ turbo.paths.root }}",
        templateFiles: "templates/api/endpoint/**/*",
        base: "templates/api/endpoint",
      },
      {
        type: "gen:cti",
      },
    ],
  });

  plop.setGenerator("UI: Component", {
    description: "An UI component, element or container with types and stories",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Type?",
        choices: ["element", "component", "container", "util"],
      },
      {
        type: "input",
        name: "name",
        message: "Name?",
      },
      {
        type: "input",
        name: "dir",
        message: "Directory",
        default: "",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination:
          "{{ turbo.paths.root }}/packages/ui/src/{{ kebabCase type}}s/{{ dir }}/{{ kebabCase name }}",
        templateFiles: "templates/ui/component/**/*",
        base: "templates/ui/component",
      },
      {
        type: "gen:cti",
      },
    ],
  });
}
