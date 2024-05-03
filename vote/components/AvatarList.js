import { Avatar } from "./Avatar/index.js"

export function AvatarList(avatars) {
  return {
    avatars,
    $template: /* HTML */ `
      <div class="flex flex-wrap justify-center">
        ${avatars.map(avatar => Avatar(avatar).$template).join("")}
      </div>
    `,
  }
}
