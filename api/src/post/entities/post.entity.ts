import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CategoryType } from 'src/category/entities/category.entity';

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

  @Field(() => CategoryType) // Use the custom scalar type for category
  category: CategoryType;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
