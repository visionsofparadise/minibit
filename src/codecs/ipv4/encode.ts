import { Binary } from "../../Binary";
import { Ipv4JsonSchema } from "./schema";

export const encodeIpv4 = (ipv4: string, binary: Binary, _: Ipv4JsonSchema): void => {
	binary.writeBuffer.set(
		ipv4.split(".").map((octet) => parseInt(octet)),
		0
	);

	binary.write(binary.writeBuffer, 0, 4);
};
