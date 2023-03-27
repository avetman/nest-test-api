import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AboutController } from './about/about.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController, AboutController],
  providers: [],
})
export class AppModule {}
