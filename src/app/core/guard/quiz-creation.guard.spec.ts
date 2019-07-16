import { TestBed, async, inject } from '@angular/core/testing';

import { QuizCreationGuard } from './quiz-creation.guard';

describe('QuizCreationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizCreationGuard]
    });
  });

  it('should ...', inject([QuizCreationGuard], (guard: QuizCreationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
