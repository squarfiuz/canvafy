# Rankcard

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
  * [setBackground](#set-background)
  * [setBarColor](#set-bar-color)
  * [setBarOpacity](#set-bar-opacity)
  * [setBorder](#set-border)
  * [setCurrentXp](#set-current-xp)
  * [setCustomStatus](#set-custom-status)
  * [setDiscriminator](#set-discriminator)
  * [setForgroundColor](#set-forground-color)
  * [setForgroundOpacity](#set-forgound-opacity)
  * [setLevel](#set-level)
  * [setLevelColor](#set-level-color)
  * [setRank](#set-rank)
  * [setRankColor](#set-rank-color)
  * [setRequiredXp](#set-required-xp)
  * [setStatus](#set-status)
  * [setUsername](#set-username)
  
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

<h2 id="set-background">.setBackground(type, value)</h2>

Set the background color/image
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
type | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type between 'color' and 'background | background
value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Background URL or hexadecimal color | https://someimage.com/background.png

<h2 id="set-bar-color">.setBarColor(color)</h2>

Set the progressbar color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #5b58f2

<h2 id="set-bar-opacity">.setBarOpacity(opacity)</h2>

Set the progressbar opacity
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
opacity | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Number between 0 and 1 (0 and 1 included) | 1

<h2 id="set-border">.setBorder(color)</h2>

Set the border color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #70db6C

<h2 id="set-current-xp">.setCurrentXp(xp, [color])</h2>

Set the current XP
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
xp | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Current XP number | 200
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of current XP text | #000

<h2 id="set-custom-status">.setCustomStatus(color)</h2>

Set the color of the avatar's border
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of border avatar color | #ff5555

<h2 id="set-discriminator">.setDiscriminator(discriminator, [color])</h2>

Set the user discriminator
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
discriminator | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Discriminator of the user | 7777
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of discriminator | #fff

<h2 id="set-forground-color">.setForgroundColor(color)</h2>

Set the the forground color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #2a2e35

<h2 id="set-forground-opacity">.setForgroundOpacity(opacity)</h2>

Set the forground opacity
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
opacity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number between 0 and 1 (0 and 1 included) | 0.8

<h2 id="set-level">.setLevel(data, [text], [display])</h2>

Set the level
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
data | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Level Number | 1
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Level text | Level
display | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Display the text | true

<h2 id="set-level-color">.setLevelColor(text, number)</h2>

Set the level color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of level text | #fff
number | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of level number text | #fff

<h2 id="set-rank">.setRank(data, [text], [display])</h2>

Set the rank
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
data | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Rank Number | 1
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Rank text | Rank
display | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Display the text | true

<h2 id="set-rank-color">.setRankColor(text, number)</h2>

Set the rank color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of rank text | #fff
number | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of rank number text | #fff

<h2 id="set-required-xp">.setRequiredXp(xp, [color])</h2>

Set the required XP
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
xp | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Required XP number | 400
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of required XP text | #000

<h2 id="set-status">.setStatus(status)</h2>

Set the status for the avatar's border
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
status | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Discord status for set the avatar's border color | online/idle/dnd/stream/offline

<h2 id="set-username">.setUsername(username, [color])</h2>

Set the user username
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
username | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Username of the user | squarfiuz
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of username | #fff
