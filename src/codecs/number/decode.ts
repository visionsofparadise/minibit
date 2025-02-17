import { Binary } from "../../Binary";
import { NumberJsonSchema } from "./schema";

export const decodeNumber = (binary: Binary, __: NumberJsonSchema): number => {
	const buffer = binary.read(0, 8);

	return buffer.readDoubleBE(0);
};
