import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  password: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
});

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

export default Employee ;
