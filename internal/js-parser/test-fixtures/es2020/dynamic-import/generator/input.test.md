# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > generator`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation es2020/dynamic-import/generator/input.js 1:10-1:11 (a)
			}
			body: JSBlockStatement {
				body: [
					JSExpressionStatement {
						expression: JSYieldExpression {
							delegate: false
							argument: JSImportCall {
								argument: JSStringLiteral {
									value: "http"
									loc: SourceLocation es2020/dynamic-import/generator/input.js 2:15-2:21
								}
								loc: SourceLocation es2020/dynamic-import/generator/input.js 2:14-2:22
							}
							loc: SourceLocation es2020/dynamic-import/generator/input.js 2:2-2:22
						}
						loc: SourceLocation es2020/dynamic-import/generator/input.js 2:2-2:23
					}
				]
				directives: []
				loc: SourceLocation es2020/dynamic-import/generator/input.js 1:14-3:1
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: []
				loc: SourceLocation es2020/dynamic-import/generator/input.js 1:11-1:13
			}
			loc: SourceLocation es2020/dynamic-import/generator/input.js 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2020/dynamic-import/generator/input.js>
	loc: SourceLocation es2020/dynamic-import/generator/input.js 1:0-4:0
}
```

### `diagnostics`

```

```
