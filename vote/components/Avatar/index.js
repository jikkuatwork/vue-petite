import { Image } from "./Image.js"
import { TextBlock } from "./TextBlock.js"

export function Avatar({ title, subtitle, url, ballot }) {
  return {
    ballot: ballot,
    $template: /* HTML */ `
      <div
        class="p-4 bg-gray-100 t bg-opacity-10 text-white shadow rounded-lg my-4 border border-yellow-300 border-opacity-10 hover:border-opacity-60"
        style="min-width: 180px;"
      >
        ${TextBlock({ title, subtitle }).$template} ${Image({ url }).$template}
        <div v-scope="ballot"></div>
      </div>
    `,
  }
}
