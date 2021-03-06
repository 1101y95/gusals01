import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  fetchBoard(): Board[] {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    @Args("createBoardInput") createBoardInput : CreateBoardInput
  ): string {
    return this.boardService.create({createBoardInput});
  }
}
