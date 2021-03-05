import {CSSParser, Tokens} from "@internal/css-parser/types";
import {
	CSSDimension,
	CSSMediaFeature, CSSMediaFeatureName,
	CSSMediaFeaturePlain,
	CSSMediaFeatureValue,
	CSSNumber,
	CSSString
} from "@internal/ast";
import {matchToken, readToken} from "@internal/css-parser/tokenizer";
import {descriptions} from "@internal/diagnostics";
import {isCondition} from "@internal/css-parser/parser/media/conditions";

export function parseMediaFeatureName(parser: CSSParser): CSSMediaFeatureName | undefined {

	const ident = parser.eatToken("Ident");
	const namePosition = parser.getPosition();
	const colon = parser.eatToken("Colon");
	if (!ident || !colon) {
		//	 TODO: error
		return undefined
	}

	return parser.finishNode(namePosition, {
		type: "CSSMediaFeatureName",
		value: parser.finishNode(namePosition, {
			type: "CSSString",
			value: ident.value
		})
	});
}

export function parseMediaFeatureValue(parser: CSSParser ): CSSMediaFeatureValue | undefined {
	const token = parser.nextToken();
	const start  = parser.getPosition();
	let value: CSSDimension | CSSString | CSSNumber | undefined = undefined;

	if (token.type === "Ident") {
		value = parser.finishNode(start, {
			type: "CSSString",
			value: token.value
		});
	} else if (token.type === "Dimension") {
		value = parser.finishNode(start, {
			type: "CSSDimension",
			unit: token.unit,
			value: token.value,
		});
	} else if (token.type === "Number") {
		value = parser.finishNode(start, {
			type: "CSSNumber",
			raw: token.raw,
			value: token.value,
		});
	} else {
		// TODO: error
		return undefined;
	}

	return  parser.finishNode(start, {
		type: "CSSMediaFeatureValue",
		value: value
	})
}

export function parseMediaFeaturePlain(parser: CSSParser): CSSMediaFeaturePlain | undefined {
	const start = parser.getPosition();
	// remove white spaces between keyword and next important token
	while (matchToken(parser, "Whitespace")) {
		readToken(parser, "Whitespace");
	}
	const name = parseMediaFeatureName(parser);
	const value = parseMediaFeatureValue(parser);

	if (name && value) {
		return parser.finishNode(start,{
			type: "CSSMediaFeaturePlain",
			name,
			value
		})
	}
		//	 TODO: error
		return undefined

}


export function parseMediaFeature(parser: CSSParser): CSSMediaFeature | undefined {
	// TODO: implement me
	const start = parser.getPosition();
	const previousToken = readToken(parser, "LeftParen");
	// a feature must be wrapped in parenthesis
	if (!previousToken) {
		parser.unexpectedDiagnostic({
				description: descriptions.CSS_PARSER.MEDIA_QUERY_EXPECTED_PARENTHESIS,
			token: previousToken
		});
		// TODO: check this one
		parser.nextToken();
		return undefined
	}


	console.log()
	// const token = readToken(parser, "Ident") as Tokens["Ident"];
	// the value of the feature can be a:
	// - plain: "(max-width: 600px)", "(hover: hover)"
	// - boolean: "(color)"
	//
	const value = parseMediaFeaturePlain(parser);
	// if (isCondition(token.value)) {
	//
	// } else {
	// 	// const value =
	// }

	if (value) {
		return parser.finishNode(start, {
			type: "CSSMediaFeature",
			value
		})
	}

	return undefined;
}
