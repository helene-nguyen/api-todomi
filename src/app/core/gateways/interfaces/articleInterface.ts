// Define which method we need to callin driven port
import { BodyData } from '../../use-cases/articleCRUD';

export interface ArticleInterface {
  insert(bodyData: BodyData): Promise<string[] | undefined>;
  selectAll(): Promise<string[] | undefined>;
  selectOne(id: number): Promise<string[] | undefined>;
  update(bodyData: BodyData): Promise<string[] | undefined>;
  delete(id: number): Promise<number | undefined>;
}
