import mongoose, {Schema, Document, NumberExpression} from "mongoose";

interface IUser extends Document{
    id: Number;
    name: string;
    email: string;
    role: "Student" | "Teacher" | "Coordinator";
    active: boolean;
    createdAt: Date
}

const userSchema: Schema = new Schema({
    name : { type: String, required: true},
    email : { type: String, required: true},
    role : { type: String, required: true},
    active : { type: Boolean, required: true},
    createdAt: {type: Date, required: true }
});

const User = mongoose.model<IUser>('User', userSchema, 'Person')

export default User;