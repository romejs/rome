# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > categorized > regex-after-block`

### `ast`

```javascript
JSRoot {
	body: [
		JSIfStatement {
			consequent: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation core/categorized/regex-after-block/input.js 1:10-2:1
			}
			test: JSBooleanLiteral {
				value: true
				loc: SourceLocation core/categorized/regex-after-block/input.js 1:4-1:8
			}
			loc: SourceLocation core/categorized/regex-after-block/input.js 1:0-2:1
		}
		JSExpressionStatement {
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: false
				expression: JSRegExpSubExpression {
					body: [
						JSRegExpCharacter {
							value: "f"
							loc: SourceLocation core/categorized/regex-after-block/input.js 4:1-4:2
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/categorized/regex-after-block/input.js 4:2-4:3
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/categorized/regex-after-block/input.js 4:3-4:4
						}
					]
					loc: SourceLocation core/categorized/regex-after-block/input.js 4:1-4:4
				}
				loc: SourceLocation core/categorized/regex-after-block/input.js 4:0-4:5
			}
			loc: SourceLocation core/categorized/regex-after-block/input.js 4:0-4:5
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/categorized/regex-after-block/input.js>
	loc: SourceLocation core/categorized/regex-after-block/input.js 1:0-4:5
}
```

### `diagnostics`

```

```
