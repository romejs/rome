# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/transforms/compile/index.test.ts --update-snapshots` to update.

## `css-handler > prefix > pseudo-selectors > multiple-elements`

### `Diagnostics`

```css

```

### `Input`

```css
/* Multiple pseudo elements */
.parent2 > .child2::placeholder, .example2::selection {
	width: 10px;
}
```

### `Output`

```css
/* Multiple pseudo elements */
.parent2 > .child2::placeholder,
.example2::selection {
	width: 10px;
}
.parent2 > .child2::-moz-placeholder,
.example2::-moz-selection {
	width: 10px;
}
.parent2 > .child2::-webkit-input-placeholder,
.example2::selection {
	width: 10px;
}

```
