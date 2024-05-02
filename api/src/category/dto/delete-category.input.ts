import { InputType, Field } from '@nestjs/graphql';
@InputType()
class Data {
  @Field()
  id: string;
}

@InputType()
export class DeleteCategoryInput {
  @Field(() => Data!)
  data: Data;
}
