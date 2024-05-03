import { Image } from "./Image.js"
import { TextBlock } from "./TextBlock.js"

export function Avatar({ title, subtitle, url }) {
  return {
    $template: /* HTML */ `
      <div
        class="p-4 bg-gray-100 t bg-opacity-10 hover:bg-opacity-20 text-white shadow rounded-lg m-4"
        style="min-width: 180px;"
      >
        ${TextBlock({ title, subtitle }).$template} ${Image({ url }).$template}
      </div>
    `,
  }
}
