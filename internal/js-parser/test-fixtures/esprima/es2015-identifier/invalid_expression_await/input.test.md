# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-identifier > invalid_expression_await`

### `ast`

```javascript
JSRoot {
	body: [
		JSExportLocalDeclaration {
			exportKind: "value"
			declaration: JSVariableDeclarationStatement {
				declaration: JSVariableDeclaration {
					kind: "var"
					declarations: [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "answer"
								loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:11-1:17 (answer)
							}
							init: JSBinaryExpression {
								operator: "+"
								left: JSReferenceIdentifier {
									name: "await"
									loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:20-1:25 (await)
								}
								right: JSNumericLiteral {
									value: 1
									loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:28-1:29
								}
								loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:20-1:29
							}
							loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:11-1:29
						}
					]
					loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:7-1:30
				}
				loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:7-1:30
			}
			loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:0-1:30
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Change the extension to <emphasis>.mjs</emphasis> to turn this file into a module"}
					}
					log {
						category: "info"
						text: RAW_MARKUP {value: "Add <emphasis>\"type\": \"module\"</emphasis> to your <filelink emphasis target=\"<dim>undefined</dim>\" />"}
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "<emphasis>import</emphasis> and <emphasis>export</emphasis> can only appear in a module"}
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-identifier/invalid_expression_await/input.js>
				end: Position 1:30
				start: Position 1:0
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-identifier/invalid_expression_await/input.js>
	loc: SourceLocation esprima/es2015-identifier/invalid_expression_await/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-identifier/invalid_expression_await/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ import and export can only appear in a module

    export var answer = await + 1;
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Change the extension to .mjs to turn this file into a module

  ℹ Add "type": "module" to your <dim>undefined</dim>


```
