# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > module-namespace > body-nested-declare`

### `ast`

```javascript
JSRoot {
	body: [
		TSModuleDeclaration {
			declare: true
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 1:18-1:19 (A)
			}
			body: TSModuleBlock {
				body: [
					TSModuleDeclaration {
						id: JSBindingIdentifier {
							name: "B"
							loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 2:14-2:15 (B)
						}
						body: TSModuleBlock {
							body: [
								JSVariableDeclarationStatement {
									declaration: JSVariableDeclaration {
										kind: "const"
										declarations: [
											JSVariableDeclarator {
												id: JSBindingIdentifier {
													name: "x"
													meta: JSPatternMeta {
														typeAnnotation: TSNumberKeywordTypeAnnotation {
															loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:17-3:23
														}
														loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:14-3:23
													}
													loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:14-3:23
												}
												loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:14-3:23
											}
										]
										loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:8-3:24
									}
									loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 3:8-3:24
								}
							]
							loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 2:16-4:5
						}
						loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 2:4-4:5
					}
				]
				loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 1:20-5:1
			}
			loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 1:0-5:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/module-namespace/body-nested-declare/input.ts>
	loc: SourceLocation typescript/module-namespace/body-nested-declare/input.ts 1:0-6:0
}
```

### `diagnostics`

```

```
