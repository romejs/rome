# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 309`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/309/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/309/input.js"
		end: Object {
			column: 18
			index: 52
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	comments: Array [
		CommentBlock {
			id: "0"
			value: " Multiline\nComment "
			loc: Object {
				filename: "core/uncategorised/309/input.js"
				end: Object {
					column: 10
					index: 44
					line: 2
				}
				start: Object {
					column: 21
					index: 21
					line: 1
				}
			}
		}
	]
	body: Array [
		JSWhileStatement {
			loc: Object {
				filename: "core/uncategorised/309/input.js"
				end: Object {
					column: 18
					index: 52
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSBooleanLiteral {
				value: true
				loc: Object {
					filename: "core/uncategorised/309/input.js"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "core/uncategorised/309/input.js"
					end: Object {
						column: 18
						index: 52
						line: 2
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				body: Array [
					JSBreakStatement {
						label: undefined
						trailingComments: Array ["0"]
						loc: Object {
							filename: "core/uncategorised/309/input.js"
							end: Object {
								column: 20
								index: 20
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
					}
					JSExpressionStatement {
						leadingComments: Array ["0"]
						loc: Object {
							filename: "core/uncategorised/309/input.js"
							end: Object {
								column: 16
								index: 50
								line: 2
							}
							start: Object {
								column: 10
								index: 44
								line: 2
							}
						}
						expression: JSReferenceIdentifier {
							name: "there"
							leadingComments: undefined
							loc: Object {
								filename: "core/uncategorised/309/input.js"
								identifierName: "there"
								end: Object {
									column: 15
									index: 49
									line: 2
								}
								start: Object {
									column: 10
									index: 44
									line: 2
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```