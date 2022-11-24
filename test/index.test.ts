import antlr4 from "antlr4";
import { SQLiteLexer, SQLiteParser } from "../src";

describe("Main Test Suite", () => {

  it('should support parse simple SQL', () => {
    const input = new antlr4.InputStream("SELECT A FROM TABLE_1")
    const lexer = new SQLiteLexer(input)
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new SQLiteParser(tokens);
    const tree = parser.parse();

    expect(tree.sql_stmt_list(null)).toHaveLength(1)
  });

});
