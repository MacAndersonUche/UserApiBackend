import fs from "fs";
import { User } from "../types";

export function read(path: string): string {
	const data = fs.readFileSync(path, "utf8" );
	return data;
}

export function write(path: string, data: User[]): void {
	const str = JSON.stringify(data);
	fs.writeFile(path, str, function (err) {
		if (err) throw err;

		console.log("Saved!");
		return true;
	});
}
