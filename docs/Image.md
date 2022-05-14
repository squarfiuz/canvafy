<h1 id="image">Image</h1>
<h3>Image build</h3>

```js
canvafy.Image
```

<table>
  <thead>
    <tr>
      <td>METHODS</td>
    </tr>
  </thead>
  <tbody>
  <tr><td width=100% valign=top>

  * [affect](#affect)
  * [darkness](#darkness)
  * [greyscale](#greyscale)
  * [invert](#invert)
  
  </td></tr>
  </tbody>
</table>

<h2 id="affect">.affect(image)</h2>
<h3>Affect meme with the image</h3>

PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
image | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - [Buffer](https://developer.mozilla.org/en-US/docs/Glossary/buffer) - [Canvas.Image](https://www.tabnine.com/code/javascript/functions/canvas/loadImage) | Image to darkness | https://someimage.com/image.png

Scope: `ASYNC`

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Buffer>

<h2 id="darkness">.darkness(image, amount)</h2>
<h3>Darkness theme on the image</h3>

PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
image | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - [Buffer](https://developer.mozilla.org/en-US/docs/Glossary/buffer) - [Canvas.Image](https://www.tabnine.com/code/javascript/functions/canvas/loadImage) | Image to darkness | https://someimage.com/image.png
amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Darkness amount | https://someimage.com/image.png

Scope: `ASYNC`

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Buffer>

<h2 id="greyscale">.greyscale(image)</h2>
<h3>Greyscale theme on the image</h3>

PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
image | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - [Buffer](https://developer.mozilla.org/en-US/docs/Glossary/buffer) - [Canvas.Image](https://www.tabnine.com/code/javascript/functions/canvas/loadImage) | Image to greyscale | https://someimage.com/image.png

Scope: `ASYNC`

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Buffer>

<h2 id="invert">.invert(image)</h2>
<h3>Invert theme on the image</h3>

PARAMETER | TYPE | DESCRIPTION | EXEMPLE
--- | --- | --- | ---
image | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - [Buffer](https://developer.mozilla.org/en-US/docs/Glossary/buffer) - [Canvas.Image](https://www.tabnine.com/code/javascript/functions/canvas/loadImage) | Image to invert | https://someimage.com/image.png

Scope: `ASYNC`

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Buffer>