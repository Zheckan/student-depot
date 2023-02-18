import { Document } from "./common/document";
import { PackageTypeEnum } from "./packageType.enum";
import { StudentHouse } from "./studentHouse";

export interface Package extends Document {
    studentHouse: StudentHouse;
    number: number;
    quantity: number;
    type: PackageTypeEnum;
    deliveryDate: Date;
    recieverFirstName: string;
    recieverLastName: string;
    reciverRoom: string;
    recived: boolean;
    recivedDate: Date;
}