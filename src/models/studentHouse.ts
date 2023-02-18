import { Document } from "./common/document";
import { Package } from "./package";

export interface StudentHouse extends Document {
    name: string;
    packages: Package[];
}