import "@internal/core";
import {AbsoluteFilePath} from "@internal/path";
import {Migration} from "@internal/core/server/migrate/Migration";
import {toml} from "@internal/codec-config";
import {TestHelper} from "rome";

interface TestSingleMigration {
	t: TestHelper;
	migration: Migration;
	testPath: AbsoluteFilePath;
}

export async function testSingleMigration(
	{migration, testPath, t}: TestSingleMigration,
): Promise<void> {
	const input = testPath.append("input.toml");

	if (!input.exists()) {
		throw new Error(
			`The directory ${testPath.getBasename()} must contain a input.toml file`,
		);
	}

	const consumer = toml.consumeValue({
		input: await input.readFileText(),
		path: input,
	});

	const snapshotFile = input.getParent().append(
		input.getExtensionlessBasename(),
	).join();

	t.namedSnapshot(
		`${migration.name}: Input`,
		await input.readFileText(),
		undefined,
		{
			filename: snapshotFile,
			language: "toml",
		},
	);

	await migration.runMigration(consumer);

	t.namedSnapshot(
		`${migration.name}: Output`,
		toml.stringifyFromConsumer({consumer, comments: new Map()}),
		undefined,
		{
			filename: snapshotFile,
			language: "toml",
		},
	);
}
