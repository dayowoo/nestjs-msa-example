import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { ConversationStyle, Language, LlmModel } from "../types/enums";

export class CreatePersonaDto {
    @ApiProperty({ description: "이름", example: "Alice" })
    @IsString()
    name: string;

    @ApiProperty({ description: "언어 설정 (ko/en)", enum: Language, example: "ko" })
    @IsEnum(Language)
    language: Language;

    @ApiProperty({ description: "직업", example: "Software Engineer" })
    @IsString()
    occupation: string;

    @ApiProperty({ description: "프로필 이미지 URL", example: "https://example.com/profile.jpg" })
    @IsUrl()
    @IsOptional()
    profile_image?: string;

    @ApiProperty({ description: "챗봇의 인사말", example: "안녕하세요! 만나서 반가워요." })
    @IsString()
    greeting_message: string;

    @ApiProperty({ description: "대화 스타일", enum: ConversationStyle, example: "friendly" })
    @IsEnum(ConversationStyle)
    conversation_style: ConversationStyle;

    @ApiProperty({ description: "사용할 LLM 모델", enum: LlmModel, example: "GPT-4" })
    @IsEnum(LlmModel)
    llm_model: LlmModel;

    @ApiProperty({ description: "프롬프트 설정", example: "친절하고 공감하는 말투로 응답해줘." })
    @IsString()
    prompt_query: string;

    @ApiProperty({ description: "생성일", example: "2024-02-14T12:00:00Z" })
    @IsOptional()
    created_at?: Date;

    @ApiProperty({ description: "수정일", example: "2024-02-15T12:00:00Z" })
    @IsOptional()
    updated_at?: Date;
}
