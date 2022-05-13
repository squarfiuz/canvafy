# Rankcard

<table>
  <!-- <thead>
    <tr>
      <th>METHODS</th>
    </tr>
  </thead>
  <tbody> -->
    <tr>
      <td width=100% valign=top>
        * [build](#.build())
      </td>
    </tr>
</table>

## .buil()
Build the rankcard

## .setAvatar(url)
Set the user avatar
PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | URL of the avatar | https://someimage.com/avatar.png

## .setBackground(type, value)
Set the background color/image
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
type | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type between 'color' and 'background | background
value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Background URL or hexadecimal color | https://someimage.com/background.png

## .setBarColor(color)
Set the progressbar color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #5b58f2

## .setBarOpacity(opacity)
Set the progressbar opacity
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
opacity | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Number between 0 and 1 (0 and 1 included) | 1

## .setBorder(color)
Set the border color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #70db6C

## .setCurrentXp(xp, [color])
Set the current XP
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
xp | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Current XP number | 200
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of current XP text | #000

## .setCustomStatus(color)
Set the color of the avatar's border
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of border avatar color | #ff5555

## .setDiscriminator(discriminator, [color])
Set the user discriminator
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
discriminator | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Discriminator of the user | 7777
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of discriminator | #fff

## .setForgroundColor(color)
Set the the forground color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color | #2a2e35

## .setForgroundOpacity(opacity)
Set the forground opacity
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
opacity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number between 0 and 1 (0 and 1 included) | 0.8

## .setLevel(data, [text], [display])
Set the level
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
data | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Level Number | 1
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Level text | Level
display | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Display the text | true

## .setLevelColor(text, number)
Set the level color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of level text | #fff
number | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of level number text | #fff

## .setRank(data, [text], [display])
Set the rank
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
data | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Rank Number | 1
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Rank text | Rank
display | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Display the text | true

## .setRankColor(text, number)
Set the rank color
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of rank text | #fff
number | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of rank number text | #fff

## .setRequiredXp(xp, [color])
Set the required XP
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
xp | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Required XP number | 400
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of required XP text | #000

## .setStatus(status)
Set the status for the avatar's border
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
status | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Discord status for set the avatar's border color | online/idle/dnd/stream/offline

## .setUsername(username, [color])
Set the user username
PARAMETER | TYPE | DESCRIPTION | EXAMPLE
--- | --- | --- | ---
username | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Username of the user | squarfiuz
color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Hexadecimal color of username | #fff
