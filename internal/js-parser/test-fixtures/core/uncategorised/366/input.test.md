# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 366`

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
							name: "x"
							loc: SourceLocation core/uncategorised/366/input.js 1:4-1:5 (x)
						}
						init: JSRegExpLiteral {
							global: false
							insensitive: false
							multiline: false
							noDotNewline: false
							sticky: false
							unicode: false
							expression: JSRegExpSubExpression {
								body: [
									JSRegExpCharSet {
										body: [
											JSRegExpCharSetRange {
												end: JSRegExpCharacter {
													value: "z"
													loc: SourceLocation core/uncategorised/366/input.js 1:12-1:13
												}
												loc: SourceLocation core/uncategorised/366/input.js 1:10-1:13
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation core/uncategorised/366/input.js 1:10-1:11
												}
											}
										]
										invert: false
										loc: SourceLocation core/uncategorised/366/input.js 1:9-1:13
									}
								]
								loc: SourceLocation core/uncategorised/366/input.js 1:9-1:13
							}
							loc: SourceLocation core/uncategorised/366/input.js 1:8-1:18
						}
						loc: SourceLocation core/uncategorised/366/input.js 1:4-1:18
					}
				]
				loc: SourceLocation core/uncategorised/366/input.js 1:0-1:18
			}
			loc: SourceLocation core/uncategorised/366/input.js 1:0-1:18
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
				message: RAW_MARKUP {value: "Bad character escape sequence"}
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/366/input.js>
				end: Position 1:17
				start: Position 1:17
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/366/input.js>
	loc: SourceLocation core/uncategorised/366/input.js 1:0-1:18
}
```

### `diagnostics`

```

 core/uncategorised/366/input.js:1:17 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Bad character escape sequence

    var x = /[a-z]/\ux
                     ^


```
