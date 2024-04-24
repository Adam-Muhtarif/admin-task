import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  categoryId: number;
}
