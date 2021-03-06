# `comments.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/parser-core/comments.test.ts --update-snapshots` to update.

## `test comment parsing`

### `0`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			leadingComments: ["0"]
			expression: JSNumericLiteral {
				value: 42
				loc: SourceLocation unknown 1:20-1:22
			}
			loc: SourceLocation unknown 1:20-1:22
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " block comment "
			loc: SourceLocation unknown 1:0-1:19
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:22
}
```

### `1`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			trailingComments: ["0", "1"]
			expression: JSNumericLiteral {
				value: 42
				loc: SourceLocation unknown 1:0-1:2
			}
			loc: SourceLocation unknown 1:0-1:2
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " block comment 1 "
			loc: SourceLocation unknown 1:3-1:24
		}
		CommentBlock {
			id: "1"
			value: " block comment 2 "
			loc: SourceLocation unknown 1:25-1:46
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:46
}
```

### `2`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			trailingComments: ["0", "1"]
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "p1"
							loc: SourceLocation unknown 1:4-1:6 (p1)
						}
						loc: SourceLocation unknown 1:4-1:6
					}
				]
				loc: SourceLocation unknown 1:0-1:7
			}
			loc: SourceLocation unknown 1:0-1:7
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " block comment 1 "
			loc: SourceLocation unknown 1:7-1:28
		}
		CommentBlock {
			id: "1"
			value: " block comment 2 "
			loc: SourceLocation unknown 1:29-1:50
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:50
}
```

### `3`

```javascript
JSRoot {
	body: []
	comments: [
		CommentBlock {
			id: "0"
			value: "42"
			loc: SourceLocation unknown 1:0-1:6
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	innerComments: ["0"]
	sourceType: "script"
	syntax: []
	trailingComments: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:6
}
```

### `4`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSBinaryExpression {
				operator: "*"
				left: JSBinaryExpression {
					operator: "+"
					left: JSReferenceIdentifier {
						name: "a"
						loc: SourceLocation unknown 1:1-1:2 (a)
					}
					right: JSReferenceIdentifier {
						name: "b"
						leadingComments: ["0"]
						loc: SourceLocation unknown 1:21-1:22 (b)
					}
					loc: SourceLocation unknown 1:1-1:22
				}
				right: JSReferenceIdentifier {
					name: "c"
					loc: SourceLocation unknown 1:27-1:28 (c)
				}
				loc: SourceLocation unknown 1:0-1:28
			}
			loc: SourceLocation unknown 1:0-1:28
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " assignment "
			loc: SourceLocation unknown 1:5-1:21
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:28
}
```

### `5`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSCallExpression {
				arguments: [
					JSThisExpression {
						loc: SourceLocation unknown 1:49-1:53
					}
				]
				callee: JSMemberExpression {
					object: JSFunctionExpression {
						body: JSBlockStatement {
							body: [
								JSVariableDeclarationStatement {
									trailingComments: ["0"]
									declaration: JSVariableDeclaration {
										kind: "var"
										declarations: [
											JSVariableDeclarator {
												id: JSBindingIdentifier {
													name: "version"
													loc: SourceLocation unknown 1:17-1:24 (version)
												}
												init: JSNumericLiteral {
													value: 1
													loc: SourceLocation unknown 1:27-1:28
												}
												loc: SourceLocation unknown 1:17-1:28
											}
										]
										loc: SourceLocation unknown 1:13-1:29
									}
									loc: SourceLocation unknown 1:13-1:29
								}
							]
							directives: []
							loc: SourceLocation unknown 1:11-1:42
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: true
							params: []
							loc: SourceLocation unknown 1:9-1:11
						}
						loc: SourceLocation unknown 1:1-1:42
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "call"
							loc: SourceLocation unknown 1:44-1:48 (call)
						}
						loc: SourceLocation unknown 1:44-1:48 (call)
					}
					loc: SourceLocation unknown 1:0-1:48
				}
				loc: SourceLocation unknown 1:0-1:54
			}
			loc: SourceLocation unknown 1:0-1:54
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " sync "
			loc: SourceLocation unknown 1:30-1:40
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:54
}
```

### `6`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			leadingComments: ["0"]
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation unknown 1:14-1:15 (a)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation unknown 1:18-1:20
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: []
				loc: SourceLocation unknown 1:15-1:17
			}
			loc: SourceLocation unknown 1:5-1:20
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: ""
			loc: SourceLocation unknown 1:0-1:4
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-1:20
}
```

### `7`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			leadingComments: ["0", "1"]
			expression: JSNumericLiteral {
				value: 42
				loc: SourceLocation unknown 4:0-4:2
			}
			loc: SourceLocation unknown 4:0-4:2
		}
	]
	comments: [
		CommentLine {
			id: "0"
			value: " Hello, world!"
			loc: SourceLocation unknown 1:0-1:16
		}
		CommentLine {
			id: "1"
			value: "   Another hello"
			loc: SourceLocation unknown 3:0-3:18
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-4:2
}
```

### `8`

```javascript
JSRoot {
	body: [
		JSWhileStatement {
			body: JSBlockStatement {
				body: []
				directives: []
				innerComments: ["0"]
				trailingComments: []
				loc: SourceLocation unknown 1:13-5:1
			}
			test: JSBooleanLiteral {
				value: true
				loc: SourceLocation unknown 1:7-1:11
			}
			loc: SourceLocation unknown 1:0-5:1
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: "*\n\t * comments in empty block\n\t "
			loc: SourceLocation unknown 2:1-4:4
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<unknown>
	loc: SourceLocation unknown 1:0-5:1
}
```
