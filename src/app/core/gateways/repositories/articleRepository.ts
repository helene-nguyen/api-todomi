export interface ArticleRepository {
  selectAll(): Promise<string[] | undefined>;
  selectOne(id:number): Promise<string[] | undefined>;
}
