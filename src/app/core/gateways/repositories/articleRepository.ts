export interface ArticleRepository {
  selectAll(): Promise<string[] | undefined>;
}
