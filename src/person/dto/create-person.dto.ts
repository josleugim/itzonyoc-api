export class CreatePersonDto {
  name: string;
  firstName: string;
  lastName!: string;
  rfc: string;
  curp: string;
  birthday!: string;
  registrationDate: string;
  statusId: boolean;
  genderId!: string;
  typeId: string;
  updatedAt!: string;
  avatar!: string;
  file: any;
}
