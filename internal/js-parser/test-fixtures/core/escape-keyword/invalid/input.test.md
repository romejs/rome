# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > escape-keyword > invalid`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: SourceLocation core/escape-keyword/invalid/input.js 1:4-1:5 (a)
						}
						init: JSObjectExpression {
							properties: [
								JSObjectProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "break"
											loc: SourceLocation core/escape-keyword/invalid/input.js 2:2-2:12 (break)
										}
										loc: SourceLocation core/escape-keyword/invalid/input.js 2:2-2:12
									}
									value: JSReferenceIdentifier {
										name: "break"
										loc: SourceLocation core/escape-keyword/invalid/input.js 2:2-2:12 (break)
									}
									loc: SourceLocation core/escape-keyword/invalid/input.js 2:2-2:12
								}
							]
							loc: SourceLocation core/escape-keyword/invalid/input.js 1:8-3:1
						}
						loc: SourceLocation core/escape-keyword/invalid/input.js 1:4-3:1
					}
				]
				loc: SourceLocation core/escape-keyword/invalid/input.js 1:0-3:2
			}
			loc: SourceLocation core/escape-keyword/invalid/input.js 1:0-3:2
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Escape sequence in keyword <emphasis>"}, "break", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<core/escape-keyword/invalid/input.js>
				end: Position 2:4
				start: Position 2:4
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<core/escape-keyword/invalid/input.js>
	loc: SourceLocation core/escape-keyword/invalid/input.js 1:0-4:0
}
```

### `diagnostics`

```

 core/escape-keyword/invalid/input.js:2:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Escape sequence in keyword break

    1 │ var a = {
  > 2 │   br\u{65}ak
      │     ^
    3 │ };


```
