import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConversationStyle, Language, LlmModel } from "../types/enums";

@Schema({ versionKey: false})
export class PersonaDocument extends AbstractDocument{
    @Prop()
    uuid: string;

    // @Prop()
    // user_uuid: string;

    @Prop()
    name: string;

    @Prop({ type: String, enum: Language })
    language: string;

    @Prop()
    occupation: string;

    @Prop()
    profile_image: string;

    @Prop()
    greeting_message: string;
 
    @Prop({ type: String, enum: ConversationStyle })
    conversation_style: string;

    @Prop({ type: String, enum: LlmModel })
    llm_model: string;

    @Prop()
    prompt_query: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

}

export const PersonaSchema = SchemaFactory.createForClass(PersonaDocument);