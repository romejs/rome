# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 1:15-1:17 (fn)
			}
			body: JSBlockStatement {
				body: [
					JSExpressionStatement {
						expression: JSArrowFunctionExpression {
							body: JSBlockStatement {
								body: []
								directives: []
								loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:36-2:38
							}
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								params: [
									JSBindingAssignmentPattern {
										operator: "="
										left: JSBindingIdentifier {
											name: "x"
											loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:9-2:10 (x)
										}
										right: JSCallExpression {
											arguments: [
												JSAssignmentExpression {
													operator: "="
													left: JSAssignmentIdentifier {
														name: "y"
														loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:19-2:20 (y)
													}
													right: JSAwaitExpression {
														argument: JSNumericLiteral {
															value: 2
															loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:29-2:30
														}
														loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:23-2:30
													}
													loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:19-2:30
												}
											]
											callee: JSReferenceIdentifier {
												name: "async"
												loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:13-2:18 (async)
											}
											loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:13-2:31
										}
										loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:9-2:31
									}
								]
								loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:2-2:35
							}
							loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:2-2:38
						}
						loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 2:2-2:39
					}
				]
				directives: []
				loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 1:20-3:1
			}
			head: JSFunctionHead {
				async: true
				generator: false
				hasHoistedVars: false
				params: []
				loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 1:17-1:19
			}
			loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 1:0-3:1
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
				message: RAW_MARKUP {value: "await is not allowed in async function parameters"}
			}
			location: {
				language: "js"
				path: UIDPath<es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js>
				end: Position 2:28
				start: Position 2:28
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js>
	loc: SourceLocation es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-function/input.js 1:0-3:1
}
```

### `diagnostics`

```

 es2017/async-functions/await-inside-arguments-of-async-call-inside-parameters-of-async-arrow-functi
 on/input.js:2:28 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ await is not allowed in async function parameters

    1 │ async function fn() {
  > 2 │   async (x = async(y = await 2)) => {};
      │                             ^
    3 │ }


```
