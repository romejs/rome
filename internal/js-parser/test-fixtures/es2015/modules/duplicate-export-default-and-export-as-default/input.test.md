# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-export-default-and-export-as-default`

### `ast`

```javascript
JSRoot {
	body: [
		JSExportDefaultDeclaration {
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "*default*"
					loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:15-1:28
				}
				body: JSBlockStatement {
					body: []
					directives: []
					loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:26-1:28
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: []
					loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:23-1:25
				}
				loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:15-1:28
			}
			loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:0-1:28
		}
		JSEmptyStatement {
			loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:28-1:29
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: [
				JSExportLocalSpecifier {
					exported: JSIdentifier {
						name: "default"
						loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 2:16-2:23 (default)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 2:9-2:12 (foo)
					}
					loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 2:9-2:23
				}
			]
			loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 2:0-2:26
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
				path: UIDPath<es2015/modules/duplicate-export-default-and-export-as-default/input.js>
				end: Position 1:28
				start: Position 1:0
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/modules/duplicate-export-default-and-export-as-default/input.js>
	loc: SourceLocation es2015/modules/duplicate-export-default-and-export-as-default/input.js 1:0-3:0
}
```

### `diagnostics`

```

 es2015/modules/duplicate-export-default-and-export-as-default/input.js:1 parse(js) ━━━━━━━━━━━━━━━━

  ✖ import and export can only appear in a module

  > 1 │ export default function() {};
      │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    2 │ export { foo as default };

  ℹ Change the extension to .mjs to turn this file into a module

  ℹ Add "type": "module" to your <dim>undefined</dim>


```
