# Welcome And Leave

<table>
  <thead>
    <tr>
      <td>METHODS</td>
    </tr>
  </thead>
  <tbody>
  <tr><td width=100% valign=top>

  * [build](#build)
  * [setAvatar](#set-avatar)
  * [setAvatarBorder](#set-avatar-border)
  * [setBackground](#set-background)
  * [setBorder](#set-border)
  * [setDescription](#set-description)
  * [setOverlayOpacity](#set-overlay-opacity)
  * [setTitle](#set-title)
  
  </td></tr>
  </tbody>
</table>

<h2 id="build">.build()</h2>

Build the rankcard

<h2 id="set-avatar">.setAvatar(url)</h2>

Set the user avatar
PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | URL of the avatar | https://someimage.com/avatar.png

<h2 id="set-avatar-border">.setAvatarBorder(color)</h2>

Set the avatar's border color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #2a2e35

<h2 id="set-background">.setBackground(type, value)</h2>

Set the background color/image
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
type | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type between 'color' and 'background | background
value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Background URL or hexadecimal color | https://someimage.com/background.png

<h2 id="set-border">.setBorder(color)</h2>

Set the border color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #2a2e35

<h2 id="set-description">.setDescription(text, [color])</h2>

Set the card's description
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Description of the card | Welcome to you!
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #a7b9c5

<h2 id="set-overlay-opacity">.setOverlayOpacity(opacity)</h2>

Set the card's description
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
opacity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number between 0 and 1 (0 and 1 included) | 0

<h2 id="set-title">.setTitle(text, [color])</h2>

Set the card's title
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Title of the card | Welcome
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #fff